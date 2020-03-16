import React from 'react';

import { Message } from './components/Message'
import { UserPanel } from './components/UserPanel'
import ContactForm from './components/ContactForm'

export interface IContact {
  name: string;
  email: string;
  option: string;
  select: number;
  type: string;
  message: string;
  [index: string]: any  // we can access any key of Link through an index of type string, which returns any type
}

export type TCurrentUser = {
  name: string,
  email: string
}

type AppProps = {}

type AppState = {
  contact: IContact;
  sent: boolean;
  currentUser: null | TCurrentUser;
}

class App extends React.Component<AppProps, AppState> {
  CONTACT_FORM_DEFAULTS = {
    name: '',
    email: '',
    option: 'A',
    select: 1,
    type: '',
    message: '',
  }

  constructor(props: AppProps) {
    super(props)

    this.state = {
      contact: {...this.CONTACT_FORM_DEFAULTS},
      sent: false,
      currentUser: null,
    }
  }

  logIn = () => {
    this.setState({
      currentUser: {
        name: "Test User",
        email: "user@example.com"
      },
      contact: {
        ...this.CONTACT_FORM_DEFAULTS,
        name: "Test User",
        email: "user@example.com"
      }
    })
  }

  contactChanged(contact: IContact) {
    this.setState({
      contact
    })
  }

  sendContact(contact: IContact) {
    this.setState({
      sent: true,
      contact
    })
  }

  render() {
    const { sent, contact, currentUser } = this.state

    if (sent) 
      return (
        <Message
          header={`Thank You ${contact.name}`}
          text={`We will reply to your message in next 24h. Have a nice day! ;-)`}
        >
          We will get back to you. Have a nice day.
        </Message>
      )

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="pull-right">
              <button className="btn btn-default" onClick={this.logIn}>
                <i className="glyphicon glyphicon-user"></i>Log In
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h2>Contact us</h2>
            {
              currentUser && 
              <UserPanel user={currentUser} />
            }
            <p>Please fill in form on the right to get fast reply</p>
            <img style={{width: '100%'}} src="http://via.placeholder.com/300x200" alt="" />
          </div>
          <div className="col-md-8">
            <ContactForm 
              data={contact} 
              onChange={ contact => (
                this.contactChanged(contact)
              )}
              onSubmit={ contact => (
                this.sendContact(contact)
              )} 
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;

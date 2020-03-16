import React, { ChangeEvent, FormEvent } from 'react'

import { IContact } from '../App'

type AppProps = {
  data: IContact;
  // onChange(contact: IContact): object;
  onChange: (contact: IContact) => void ;
  onSubmit: (data: IContact) => void;
}

class ContactForm extends React.Component<AppProps> {
  options = [
    {id: 1, label: 'I have question about my membership'},
    {id: 2, label: 'I have technical question'},
    {id: 3, label: 'I would like to change membership'},
    {id: 4, label: 'Other question'},
  ]

  isSelected(key: string, option: string) {
    return this.props.data[key] === option
  }

  fieldChange(e: ChangeEvent) {
    const target = e.target as HTMLInputElement
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.props.data[name] = value
    this.props.onChange(this.props.data)
  }

  handleSubmit(e: FormEvent) {
    e.preventDefault()

    this.props.onSubmit(this.props.data)
  }

  render() {
    const { data } = this.props

    this.isSelected('option', 'A')

    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <h3>Contact Form</h3>

        <div className="form-group">
          <label className="form-label">Your Name:</label>
          <input name="name" className="form-control" value={data.name} onChange={e => this.fieldChange(e)} />
        </div>

        <div className="form-group">
          <label className="form-label">Your Email:</label>
          <input name="email" className="form-control" value={data.email} onChange={e => this.fieldChange(e)} />
        </div>

        {/* radio button */}
        <label className="form-label">Select your membership option:</label>
        <div className="form-group row">
          <label className="form-label col-xs-4">
            <input type="radio" name="option" value='A' checked={this.isSelected('option', 'A')} onChange={e => this.fieldChange(e)} /> Option A
          </label>
          <label className="form-label col-xs-4">
            <input type="radio" name="option" value='B' checked={this.isSelected('option', 'B')} onChange={e => this.fieldChange(e)} /> Option B
          </label>
          <label className="form-label col-xs-4">
            <input type="radio" name="option" value='C' checked={this.isSelected('option', 'C')} onChange={e => this.fieldChange(e)} /> Option C
          </label>
        </div>

        <hr />

        {/* drop down */}
        <div className="form-group">
          <label className="form-label">What can we help you with:</label>
          <select className="form-control" name="select" value={data.select} onChange={e => this.fieldChange(e)}>
            {
              this.options.map( item => (
                <option key={item.id} value={item.id}>{item.label}</option>
              ))
            }
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Message:</label>
          <textarea name="message" rows={10} placeholder="Please type your question here" className="form-control" onChange={e => this.fieldChange(e)} value={data.message} />
        </div>

        <div className="form-group">
          <label className="form-label">
            <input type="checkbox" name="terms" onChange={e => this.fieldChange(e)} /> I agree to terms and conditions 
          </label>
        </div>

        <input type="submit" value="Send" className="contactform-submit" />
      </form>
    )
  }
}

export default ContactForm
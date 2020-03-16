import React from 'react'

import { TCurrentUser } from '../App'

type AppProps = {
  user: TCurrentUser
}

export const UserPanel = ({ user }: AppProps) => (
  <div>
    <div>
      <h3>
        <i className="glyphicon glyphicon-user"></i> Welcom, {user.name}
      </h3>
    </div>
  </div>
)
import React from 'react'

export default function User(props) {
  return (
    <li key={props.key}>
          <button type="button" onClick={() => props.setCurrentUser(props.user)}>
            {props.user.name}
          </button>
    </li>
  )
}

import React from 'react'

export default function Album(props) {
  return (
    <li key={props.index}>
     {props.album.id} - {props.album.title}
    </li>
  )
}

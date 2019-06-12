import React from 'react';

const Friend = (props) => {
  return (
    <div key={props.name}>
    <div className="name">{props.name}</div>
    <div className="age">{props.age}</div>
    <div className="email">{props.email}</div>
  </div>
  )
}

export default Friend;
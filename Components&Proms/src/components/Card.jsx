import React from 'react'

export const Card = (props) => {
  console.log(props);
  
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.sex}</p>
      <p>{props.address}</p>
      <p>{props.age}</p>
    </div>
  )
}

export default Card

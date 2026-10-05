import React from 'react'
import'./Card.css'

const Card = ({title,comment}:{title:string , comment:string}) => {
  return (
    <div className="h-50 w-50 border-2 border-black flex flex-col justify-center items-center wrap-break-word text-center p-4">
        <h1>{ title}</h1>
        <p> {comment}</p>
    </div>
  )
}

export default Card
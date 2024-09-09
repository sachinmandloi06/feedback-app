import React, { useContext } from 'react'
import FeedbackContext from '../providers/FeedbackContext'

const ListItem = ({dark,feedback}) => {

   const {editFeedback,removecard} = useContext(FeedbackContext)

  return (
    <li className={dark? "list-group-item bg-secondary text-white border-black" : "list-group-item"}>
    <h1 className='my-3 text-danger'>Rating : {feedback.rating}</h1>
    <p className= {dark? "text-black " : "text-secondary"}>Review : {feedback.review}</p>
    <span className='float-end'>
     <button onClick={() => editFeedback(feedback)} className="btn btn-primary mx-2">Edit</button>
     <button onClick={() => removecard(feedback.id)} className="btn btn-danger">Delete</button>

    </span>
   </li>

  )
}

export default ListItem

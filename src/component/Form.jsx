import React, {useContext, useEffect, useState } from 'react'
import FeedbackContext from '../providers/FeedbackContext'

const Form = ({dark}) => {
    const {updateFeedback,addFeedback,edit} = useContext(FeedbackContext)

      const [rating,setRating] = useState(0)
      const [review,setReview]= useState("")

    const handleSubmit = (e) => {
e.preventDefault();
       
      if(edit.isEdit){
       updateFeedback({id:edit.feedback.id,rating,review})
      }else{
        addFeedback(rating,review)
      }

     setRating(0) ,setReview("")
    }
    
    useEffect(() => {
      setRating(edit.feedback.rating);
      setReview(edit.feedback.review);
    } ,[edit]);

  return (
    <form onSubmit={handleSubmit}>
    <select onChange={e => setRating(e.target.value)}
    value={rating}
    name="" id="rating" className={dark? 'form-select bg-secondary text-white border-black' : 'form-select'} required> 
      <option value="#">
      Please Select Rating
      </option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <textarea onChange={e => setReview(e.target.value)}
    value={review}
    className={dark? 'form-control my-3 bg-secondary border-black text-white' : 'form-control my-3 '}
    placeholder='Enter Your Review'
     required></textarea>

    <button className={dark? 'btn btn-secondary w-100' : 'btn btn-success w-100'}>Submit Review</button>
  </form > 
  )
}

export default Form

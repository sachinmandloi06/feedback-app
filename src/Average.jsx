import { useContext } from "react";
import FeedbackContext from "./providers/FeedbackContext";



const Average = ({dark}) => {

  const {feedbacks} = useContext(FeedbackContext)
  
const average = feedbacks.reduce((p, c) => {
    return p + c.rating / feedbacks.length;
},0);

  return (
    <span className={dark? 'my-3 d-flex align-item-center justify-content-between text-light' : 'my-3 d-flex align-item-center justify-content-between'}>
    <p>Average Rating : {average.toFixed(1)}</p>
    <p>Total Review : {feedbacks.length}</p>
  </span>
  )
}

export default Average


import { useContext } from 'react'
import ListItem from './ListItem'
import FeedbackContext from '../providers/FeedbackContext'


const ListGroup = ({dark}) => {

const {feedbacks} = useContext(FeedbackContext)

  if (feedbacks.length === 0){
    return(
      <h1 className="my-5 text-center text-secondary">No Feedbacks Yet</h1>
    )
  }
  return (
    <ul className="list-group my-3">
   
   {
    feedbacks.map(feedback => <ListItem key={feedback.id} feedback={feedback} dark={dark}/>)
   }
  </ul>

  )
}

export default ListGroup

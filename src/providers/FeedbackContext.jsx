import { createContext, useReducer, useState } from "react";
import feedbackReducer from "./FeedbackReducer";

const FeedbackContext = createContext ()


export const FeedbackProvider = ({children}) => {

    const initialState = {
        feedbacks:[],
        edit:{
            feedback:{},
            isEdit: false,
          },
        }

  
   
const [state, dispatch] = useReducer( feedbackReducer ,initialState)
  
  const removecard =(id) => {
    dispatch({
        type:"DELETE_FEEDBACK",
        payload: id,
    });
  };
  
  const addFeedback = (rating , review) => {
  
    const Newrating = {
      id : crypto.randomUUID(),
      rating,
      review,
    };
  
     dispatch ({
        type : "SAVE_FEEDBACK",
        payload : Newrating,
     }) 
  }
  
     
  
     const editFeedback = (feedback) => {
      dispatch ({
        type : "EDIT_FEEDBACK",
        payload : feedback,
      })
     };  
  
     const updateFeedback = (updatedFeedback) => {
      
     dispatch({
        type : "UPDATE_FEEDBACK",
        payload: updatedFeedback,
     })
      
     };
  
  

  return(
    <FeedbackContext.Provider value={{feedbacks : state.feedbacks,
        edit : state.edit,
        addFeedback,
        removecard,
        updateFeedback,
        editFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
  )

}

export default FeedbackContext;
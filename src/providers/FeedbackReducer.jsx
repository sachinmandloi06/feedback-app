const feedbackReducer = (state,action) => {

    if (action.type === "DELETE_FEEDBACK"){
        return{
        ...state,
        feedbacks : state.feedbacks.filter(item => item.id !== action.payload),
        }
    } else if (action.type === "SAVE_FEEDBACK"){
        return{
            ...state,
            feedbacks : [action.payload,...state.feedbacks],
        }
    } else if (action.type === "EDIT_FEEDBACK"){
        return{
            ...state,
            edit :{
                feedback : action.payload,
                isEdit : true,
            } 
        }
    } else if (action.type === "UPDATE_FEEDBACK"){
        return {
            ...state,
            feedbacks : state.feedbacks.map
                (item => item.id === action.payload.id ? action.payload : item ),
                edit : {feedback : {},
                     isEdit : false,}
               
        }
    }
};




export default feedbackReducer;
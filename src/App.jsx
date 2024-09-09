import React, { useState } from 'react'
import Navbar from './component/Navbar';
import Form from './component/Form';
import ListGroup from './component/ListGroup';
import Average from './Average';
import { FeedbackProvider } from './providers/FeedbackContext';


const App = () => {


const [dark , setdark] = useState(false)

const changeTheme = () => {
  setdark (dark? false : true)
}



  return (
    
  <FeedbackProvider>

   <Navbar dark={dark} changeTheme={changeTheme}/>

 <div className= {dark? "container-flute p-5 bg-secondary" : "container-flute p-5 "}>
 <div className={dark? "card p-3 bg-dark" : "card p-3"}>

<h1 className='text-center text-secondary my-3'>Give Your Valuable Feedback</h1> 
<Form dark={dark}/>


</div>
  
  <Average dark={dark}/>
  

<div className={dark? "card p-3 bg-dark my-3 shadow" : "card p-3 my-3 shaodow"}>
  <ListGroup dark={dark}/>
</div>


 </div>
 </FeedbackProvider>
  )
}

export default App;

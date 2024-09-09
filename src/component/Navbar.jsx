import React from 'react'

const Navbar = ({dark,changeTheme}) => {
  return (
    <nav className={dark? "navbar bg-dark shadow" : "navbar bg-body-tertiary shadow"}>
  <div className="container-fluid">
    <span className={dark? "navbar-text text-light h3" : "navbar-text h3"}>
      Feedback-App
    </span>
    <button className= {dark? 'btn btn-light shadow' : 'btn btn-dark shadow'} onClick={changeTheme}>ChangeTheme</button>
  </div>
</nav>
  )
}

export default Navbar

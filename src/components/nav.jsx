import React from 'react'
import { func, shape } from 'prop-types'

const NavBar = props => {
  function handleClick() {
    props.history.push('/')
  }
  return (
    <div className="nav">
      <button className="nav-home-button" onClick={handleClick}>Home</button>
    </div>
  )
}

NavBar.propTypes = {
  history: shape({
    push: func.isRequired,
  }).isRequired,
}

export default NavBar

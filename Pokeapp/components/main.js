import React from 'react'
import { Link } from 'react-router'

let main = function(props) {
  return (
    <div className="main">
      <div>Name: <Link to={'/profile/' + props.id}>{props.name}</Link></div>
    </div>
  )
}

export default main

import React from 'react'
import { NavLink } from 'react-router-dom'

const ButtonUsersDasboard = ({children}) => {
  return (
    <NavLink
      to=""
      className="btn text-center d-block"
      tabIndex="-1"
      role="button"
      aria-disabled="true"
      style={{ 
        backgroundColor: "#fff"
        ,width: "23%"
        ,color: "#194567"
        ,fontSize: "12px"
        ,position: "absolute"
        ,top: "14%"
        ,left: "34%"
      }}
    >
    {children}
    </NavLink>
  )
}

export default ButtonUsersDasboard
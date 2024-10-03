import React from 'react'
import restaurant from "../common/images/restaurant.png"

const RstrIcon = ({loc, showNum, index, handleShow}) => {
  return (
    <div className={`food pos${index}`}>
      <img src={restaurant} alt="restaurant-icon" width="90" onClick={()=>handleShow(loc,showNum)}/>
    </div>
  )
}

export default RstrIcon

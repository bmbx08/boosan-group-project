import React from 'react'
import restaurant from "../common/images/restaurant.png"

const RstrIcon = ({loc, showNum, index, handleShow, fade}) => {
  return (
    <div className={`icon food pos${index} ${fade? 'fade-in':'fade-out'}`}>
      <img src={restaurant} className="img" alt="restaurant-icon" onClick={()=>handleShow(loc,showNum)}/>
    </div>
  )
}

export default RstrIcon

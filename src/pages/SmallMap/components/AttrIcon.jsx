import React from 'react'
import history from "../../../common/images/attractionMap/history2.png"
import nature from "../../../common/images/attractionMap/nature2.png"
import culture from "../../../common/images/attractionMap/culture4.png"

const AttrIcon = ({loc, theme, showNum, index, handleShow, fade}) => {
  return (
    <div className={`icon pos${index} ${fade? 'fade-in':'fade-out'}`}>
        {theme==="history" && (<img src={history} className="img" alt="history-icon" onClick={()=>handleShow(loc,showNum)}/>)}
        {theme==="nature" && (<img src={nature} className="img" alt="nature-icon" onClick={()=>handleShow(loc,showNum)}/>)}
        {theme==="culture" && (<img src={culture} className="img" alt="culture-icon" onClick={()=>handleShow(loc,showNum)}/>)}
    </div>
  )
}

export default AttrIcon;
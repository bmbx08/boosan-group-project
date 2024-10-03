import React from 'react'
// import history from "../common/images/"

const HistoryIcon = ({loc, showNum, index, handleShow}) => {
  return (
    <div className={`food pos${index}`}>
        {/* <img src={restaurant} alt="restaurant-icon" width="90" onClick={()=>handleShow(loc,showNum)}/> */}
      </div>
  )
}

export default HistoryIcon


// const RstrIcon = ({loc, showNum, index, handleShow}) => {
//     return (
//       <div className={`food pos${index}`}>
//         <img src={restaurant} alt="restaurant-icon" width="90" onClick={()=>handleShow(loc,showNum)}/>
//       </div>
//     )
//   }
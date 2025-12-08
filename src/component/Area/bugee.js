import React from 'react'
import bugeeImage from '../../common/images/부산시마스코트부기.png'
import './Bugee.css'
const Bugee = () => {
  return (
    <div className="bugee-container">
          <div className="thought">
          나는 오늘 너의 소통을 도와줄 부산 마스코트 부기야!
          </div>
          <img
            src={bugeeImage}
            alt="부산시 마스코트 부기"
            className="bugee-image"
          />
        </div>
  )
}

export default Bugee;
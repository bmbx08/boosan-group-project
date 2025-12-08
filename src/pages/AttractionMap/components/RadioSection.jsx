import React from "react";
import { useNavigate } from "react-router-dom";

const RadioSection = ({id,handleRadioChange,theme}) => {

  const navigate = useNavigate();

  const goToHousePage = () => {
    navigate(`/house/${id}`)
  }

    return (
    <div className="radio-section">
      <label className={`radio-button ${theme === "history" ? "active" : ""}`}>
        <input
          type="radio"
          name="options"
          value="history"
          className="radio-nodisplay"
          onChange={handleRadioChange}
        />
        역사
      </label>
      <label className={`radio-button ${theme === "nature" ? "active" : ""}`}>
        <input
          type="radio"
          name="options"
          value="nature"
          className="radio-nodisplay"
          onChange={handleRadioChange}
        />
        자연
      </label>
      <label className={`radio-button ${theme === "culture" ? "active" : ""}`}>
        <input
          type="radio"
          name="options"
          value="culture"
          className="radio-nodisplay"
          onChange={handleRadioChange}
        />
        문화
      </label>
      <label className={`radio-button ${theme === "food" ? "active" : ""}`}>
        <input
          type="radio"
          name="options"
          value="food"
          className="radio-nodisplay"
          onChange={handleRadioChange}
        />
        음식
      </label>
      <label className={`radio-button1 `}>
        <input
          type="radio"
          name="options"
          value="food"
          className="radio-nodisplay"
          onChange={goToHousePage}
        />
        다음
        <span className="hover-text">부산은 살기 좋은 곳인지 한 번 볼까?</span>
      </label>
    </div>
  );
};

export default RadioSection;

import React from "react";

const RadioSection = ({handleRadioChange,theme}) => {
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
    </div>
  );
};

export default RadioSection;

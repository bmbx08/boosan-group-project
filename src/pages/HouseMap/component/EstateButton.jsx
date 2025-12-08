import React from "react";
import { useState } from "react";
import { useEstateDataQuery } from "../../../hooks/useEstateDate";
import Button from "react-bootstrap/Button";

const EstateButton = ({ onRealEstateData }) => {


  return (
    <div>
      <Button onClick={() => onRealEstateData("금정구")}>
        금정구 부동산 알아보기
      </Button>
      <Button onClick={() => onRealEstateData("북구")}>
        북구 부동산 알아보기
      </Button>
      <Button onClick={() => onRealEstateData("동래구")}>
        동래구 부동산 알아보기
      </Button>
    </div>
  );
};

export default EstateButton;

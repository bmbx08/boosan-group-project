import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useEstateDataQuery } from "../../../hooks/useEstateDate";
import Table from "react-bootstrap/Table";

const EstateModal = ({ data }) => {
  return (
    <div className="real-estate-data">
      <div style={{ fontSize: "20px" }}>부동산 정보</div>
      <Table>
        <thead>
          <tr>
            <th style={{ backgroundColor: "pink" }}>중개업소명</th>
            <th style={{ backgroundColor: "pink" }}>중개업자명</th>
            <th style={{ backgroundColor: "pink" }}>사무소주소</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.연변}>
              <td>{item.중개업소명}</td>
              <td>{item.중개업자명}</td>
              <td>{item.사무소주소}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default EstateModal;

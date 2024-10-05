import React from 'react'
import { useHouseDataQuery } from '../../../hooks/useHouseData'
import Table from "react-bootstrap/Table";

const HouseModal = ({ data }) => {

    if(!data || data.length === 0) {
        return <p>데이터가 없습니다.</p>
    }
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>관리명</th>
        <th>세대수</th>
        <th>유형</th>
        <th>위치</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          <td>{item.MGMT_NM}</td>
          <td>{item.CNT}</td>
          <td>{item.GB}</td>
          <td>{item.LOCATE}</td>
        </tr>
      ))}
    </tbody>
  </Table>
  )
}

export default HouseModal

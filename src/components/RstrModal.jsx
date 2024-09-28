import React from "react";
import { Button, Modal } from "react-bootstrap";

const RstrModal = ({data, show, handleClose}) => {
  console.log("component data",data);
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title><h3>{data?.RSTR_NM}</h3><h5>{data?.BSNS_STATM_BZCND_NM}</h5></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>주소: {data?.RSTR_RDNMADR}</h4>
        <h4>번호: {data?.RSTR_TELNO}</h4><br/>
        <h4><b>상세정보</b></h4>
        <h4>{data?.RSTR_INTRCN_CONT}</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          닫기
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RstrModal;

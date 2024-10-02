import React from "react";
import { Button, Modal } from "react-bootstrap";

const RstrModal = ({data, show, handleClose}) => {
  // console.log("component data",data);
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title><h3>{data?.RSTR_NM}</h3><h5>{data?.MAIN_TITLE}</h5></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>주소: {data?.ADDR1}</h4>
        <h4>번호: {data?.CNTCT_TEL}</h4>
        <h4>운영시간: {data?.USAGE_DAY_WEEK_AND_TIME}</h4>
        <h4>대표메뉴: {data?.RPRSNTV_MENU}</h4>
        <img src={data?.MAIN_IMG_THUMB} /><br/><br/>
        <h5><b>상세정보</b></h5>
        <h5>{data?.ITEMCNTNTS}</h5>
        
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

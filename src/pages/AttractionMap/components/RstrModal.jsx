import React from "react";
import { Button, Modal } from "react-bootstrap";
import "./RstrModal.style.css"

const RstrModal = ({data, theme, show, handleClose}) => {
  // console.log("component data",data);
  if(theme==="food"){

    const filterText=(text,maxLength)=>{
      if(text.length>maxLength){
        return text.slice(0,maxLength)+' ...';
      }
    }

    if(data){
      if(data.ITEMCNTNTS.length>150){
        data.ITEMCNTNTS= filterText(data.ITEMCNTNTS, 120);
      }
    }

    return (
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title><div className="modal-title">{data?.MAIN_TITLE}</div></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="subinfo-section">
            <div className="modal-subinfo"><b>주소: </b>{data?.ADDR1}</div>
            <div className="modal-subinfo"><b>번호: </b>{data?.CNTCT_TEL}</div>
            {data?.USAGE_DAY_WEEK_AND_TIME?(<div className="modal-subinfo"><b>운영시간: </b>{data?.USAGE_DAY_WEEK_AND_TIME}</div>):""}  
            {data?.RPRSNTV_MENU?(<div className="modal-subinfo"><b>대표메뉴: </b>{data?.RPRSNTV_MENU}</div>):""}  
          </div>

          <div className="img-container">
            <img src={data?.MAIN_IMG_THUMB} /> 
          </div>

          <div className="bottom-title"><b>상세정보</b></div>
          <h5>{data?.ITEMCNTNTS}</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }else if(theme!=="food"){

    const filterText=(text,maxLength)=>{
      if(text.length>maxLength){
        return text.slice(0,maxLength)+' ...';
      }
    }

    if(data){
      data.MAIN_TITLE = data?.MAIN_TITLE //제목에서 문구 제거
          .replace(/\(한,영,중간,중번,일\)/g, '')
          .replace(/\(한,영\)/g, '')
          .replace(/\(한,중간\)/g, '')
          .replace(/\(한\)/g, '')
          .replace(/정승빈작가-/g, "");
      if(data.ITEMCNTNTS.length>150){
        data.ITEMCNTNTS= filterText(data.ITEMCNTNTS, 120);
      }
    }

    return(
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title><div className="modal-title">{data?.MAIN_TITLE}</div></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="subinfo-section">
            <div className="modal-subinfo"><b>주소: </b>{data?.ADDR1}</div>
            <div className="modal-subinfo"><b>번호: </b>{data?.CNTCT_TEL}</div>
            {data?.USAGE_DAY_WEEK_AND_TIME?(<div className="modal-subinfo"><b>운영시간: </b>{data?.USAGE_DAY_WEEK_AND_TIME}</div>):""}
            {data?.USAGE_AMOUNT?(<div className="modal-subinfo"><b>이용요금: </b>{data?.USAGE_AMOUNT}</div>):""}
          </div>
          <div className="img-container">
            <img src={data?.MAIN_IMG_THUMB} />
          </div>
          <div className="bottom-title"><b>{data?.TITLE}</b></div>
          <h5>{data?.ITEMCNTNTS}</h5>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }

};

export default RstrModal;

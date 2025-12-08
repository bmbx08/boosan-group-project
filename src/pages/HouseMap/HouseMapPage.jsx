import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import busan from "../../common/images/Busan.png"
import "./HouseMapPage.style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import AptModal from "./component/AptModal";
import attraction1 from "./images/부산진구.png";
import attraction2 from "./images/해운대구.png";
import attraction3 from "./images/금정구.png";
import attraction4 from "./images/사하구.png";
import attraction5 from "./images/강서구와기장군.png";
import apartment from "../../common/images/apartment.png";

const HouseMapPage = () => {
  const [isMoving, setIsMoving] = useState(false);
  const [isDialog, setIsDialog] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [otherBuilding, setOtherBuilding] = useState(false);
  const [hasDialogStarted, setHasDialogStarted] = useState(false);
  const [position, setPosition] = useState({ x: 800, y: 350 });

  //const [imageID, setImageID]=useState("");

  const [isWithinRange, setIsWithinRange] = useState(false);

  const aptImg1Ref = useRef(null);
  const aptImg2Ref = useRef(null);
  const aptImg3Ref = useRef(null);
  const aptImg4Ref = useRef(null);
  const aptImg5Ref = useRef(null);
  const aptImg6Ref = useRef(null);
  const aptImg7Ref = useRef(null);
  const aptImg8Ref = useRef(null);

  const { id } = useParams();

  useEffect(() => {

  }, []);

  const handleAptClick = (aptRef) => {
    /*
    calculateDistance();
    if (!isMoving) {
      if (isWithinRange) {
        // 범위 안에서 클릭
        setIsMoving(true);
        setHasDialogStarted(true);
        setTimeout(() => {
          setIsDialog(true);
          setIsMoving(false);
        }, 1000);
      } else {
        // 범위 밖에서 클릭
        handleAptClickAfterMove();
        //setIsWithinRange(false);
      }
    }
      */

    setShowModal(true);
      setIsDialog(false);
    // } catch (error) {
    //   console.log("Error fetching housing data", error);
    // }

    // calculateDistance(aptRef);
    // if (!isMoving && isWithinRange && !hasDialogStarted) {
    //   setIsMoving(true);
    //   setHasDialogStarted(true);
    //   setTimeout(() => {
    //     setIsDialog(true);
    //     setIsMoving(false);
    //   }, 1000); // Apt img 클릭시 1초 후 대화시작
    // } else if (isWithinRange) {
    //   handleAptClickAfterMove(); // 범위 밖에서 클릭하면 이동
    //   setIsWithinRange(false);
    // }
  };

  const handleAptClickAfterMove = () => {
    if (!isMoving && !isDialog && !showModal) {
      // 건물 클릭시 움직이기
      setIsMoving(true);
      setTimeout(() => {
        // 이동 완료 후 상태 업데이트
        setPosition({ x: 800, y: 150 }); //pt 위치
        setIsWithinRange(true); // 아파트 근처에 도착했다고 설정
      }, 2000);

      setTimeout(() => {
        // 아파트에 도착했으므로 말풍선 표시
        setIsDialog(true); // 말풍선 표시
        setIsMoving(false);
      }, 3000);
      setIsDialog(false);
    }
  };

  const handleInfoAptButton = () => {
    // 말풍선 다음 누르면 apt정보 모달창 뜨기
    try {
      setShowModal(true);
      setIsDialog(false);
    } catch (error) {
      console.log("Error fetching housing data", error);
    }
  };

  const handleOtherBuilding = () => {
    setOtherBuilding(true);
  };

  const handleKeyDown = (event) => {
    // 캐릭터 방향키 설정 가능
    switch (event.key) {
      case "ArrowUp":
        setPosition((prev) => ({ ...prev, y: prev.y - 10 }));
        break;
      case "ArrowDown":
        setPosition((prev) => ({ ...prev, y: prev.y + 10 }));
        break;
      case "ArrowLeft":
        setPosition((prev) => ({ ...prev, x: prev.x - 10 }));
        break;
      case "ArrowRight":
        setPosition((prev) => ({ ...prev, x: prev.x + 10 }));
        break;
      default:
        break;
    }
    console.log("rrrrr", event);
  };

  const calculateDistance = (aptRef) => {
    // character 와 거리 계산을 위한 함수
    if (aptRef && aptRef.current) {
      const aptRect = aptRef.current.getBoundingClientRect(); // DOM 요소 경계 정보 사용해서 aptImg 위치 정보 가져오기
      const characterX = position.x;
      const characterY = position.y;

      const aptX = aptRect.left + aptRect.width / 2;
      const aptY = aptRect.top + aptRect.height / 2;

      const distance = Math.sqrt(
        (aptX - characterX) ** 2 + (aptY - characterY) ** 2
      );

      console.log("aptX", aptX);
      console.log("aptY", aptY);
      console.log("character", position.x, position.y);

      const maxDistance = 100; // 클릭할 수 있는 범위 설정
      if (distance <= maxDistance) {
        setIsWithinRange(true);
      } else {
        setIsWithinRange(false);
      }
    }
  };

  const navigate = useNavigate();

  const goToMain=()=>{
    navigate('/');
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    calculateDistance();
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [position]);

  return (
    <div>
      {/* 아파트 사진 넣어주기 */}

      {/*맛집  사진 넣어주기 */}
      {/* <div
        className="best-food"
        style={{ display: showModal ? "none" : "block" }}
      ></div> */}
      {/* 이후 캐릭터 설정  */}

      <img src={busan} className="map-button" onClick={goToMain}/>

      <div className={`house-find-page`}>
        {id === "a" && ( // 부산진구, 서구, 동구, 중구, 영도구
          <div>
            <img src={attraction1} alt="asd" className="map-image" />
            <img
              src={apartment}
              onClick={() => handleAptClick(aptImg1Ref)}
              ref={aptImg1Ref}
              className="aptImg1"
              // style={{ display: showModal ? "none" : "block" }}
            />
            <img
              src={apartment}
              className="aptImg2"
              onClick={() => handleAptClick(aptImg2Ref)}
              ref={aptImg2Ref}
              // style={{ display: showModal ? "none" : "block" }}
            />
            <img
              src={apartment}
              className="aptImg3"
              onClick={() => handleAptClick(aptImg3Ref)}
              ref={aptImg3Ref}
              // style={{ display: showModal ? "none" : "block" }}
            />
            <img
              src={apartment}
              className="aptImg4"
              onClick={() => handleAptClick(aptImg4Ref)}
              ref={aptImg4Ref}
              // style={{ display: showModal ? "none" : "block" }}
            />
            <img
              src={apartment}
              className="aptImg5"
              onClick={() => handleAptClick(aptImg5Ref)}
              ref={aptImg5Ref}
              // style={{ display: showModal ? "none" : "block" }}
            />
          </div>
        )}
        {id === "b" && ( // 해운대구, 수영구, 남구
          <div>
            <img src={attraction2} alt="asd" className="map-image" />
            <img
              src={apartment}
              onClick={handleAptClick}
              ref={aptImg6Ref}
              className="aptImg6"
              // style={{ display: showModal ? "none" : "block" }}
            />
            <img
              src={apartment}
              onClick={handleAptClick}
              ref={aptImg7Ref}
              className="aptImg7"
              // style={{ display: showModal ? "none" : "block" }}
            />
            <img
              src={apartment}
              onClick={handleAptClick}
              ref={aptImg8Ref}
              className="aptImg8"
              // style={{ display: showModal ? "none" : "block" }}
            />
          </div>
        )}
        {id === "c" && ( // 금정구 , 동래구, 연제구
          <div>
            <img src={attraction3} alt="asd" className="map-image" />
            <img
              src={apartment}
              onClick={handleAptClick(aptImg1Ref)}
              ref={aptImg1Ref}
              className="aptImg9"
              // style={{ display: showModal ? "none" : "block" }}
            />
            <img
              src={apartment}
              onClick={handleAptClick(aptImg2Ref)} 
              ref={aptImg2Ref}
              className="aptImg10"
              // style={{ display: showModal ? "none" : "block" }}
            />
            <img
              src={apartment}
              onClick={handleAptClick(aptImg3Ref)}
              ref={aptImg3Ref}
              className="aptImg11"
              // style={{ display: showModal ? "none" : "block" }}
            />
          </div>
        )}
        {id === "d" && ( // 북구, 사상구, 사하구
          <div>
            <img src={attraction4} alt="asd" className="map-image" />
            <img
              src={apartment}
              onClick={handleAptClick}
              ref={aptImg1Ref}
              className="aptImg12"
              // style={{ display: showModal ? "none" : "block" }}
            />
            <img
              src={apartment}
              onClick={handleAptClick}
              ref={aptImg2Ref}
              className="aptImg13"
              // style={{ display: showModal ? "none" : "block" }}
            />
            <img
              src={apartment}
              onClick={handleAptClick}
              ref={aptImg2Ref}
              className="aptImg14"
              // style={{ display: showModal ? "none" : "block" }}
            />
          </div>
        )}
        {id === "e" && (
          <div>
            <img src={attraction5} alt="asd" className="map-image" />
            <img
              src={apartment}
              onClick={handleAptClick}
              ref={aptImg1Ref}
              className="aptImg15"
              // style={{ display: showModal ? "none" : "block" }}
            />
            <img
              src={apartment}
              onClick={handleAptClick}
              ref={aptImg2Ref}
              className="aptImg16"
              // style={{ display: showModal ? "none" : "block" }}
            />
          </div>
        )}
        <div>
          {showModal && (
            <AptModal
              onClose={() => setShowModal(false)}
              onOtherBuilding={handleOtherBuilding}
              showBuilding={otherBuilding}
            />
          )}
          {isDialog && (
            <div>
              <div
                className="speech-bubble"
                style={{
                  left: `${position.x}px`,
                  top: `${position.y - 150}px`,
                }}
              >
                {" "}
                우와 여긴 정말 살기 좋은 곳이다.{" "}
                <Button variant="success" onClick={handleInfoAptButton}>
                  주택정보보기
                </Button>
              </div>
            </div>
          )}
        </div>
        <div
          className={`character`}
          style={{
            left: position.x,
            top: position.y,
            display: showModal ? "none" : "block",
          }}
        ></div>
      </div>
    </div>
  );
};

export default HouseMapPage;

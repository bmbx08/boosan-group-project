import React, { useState } from "react";
import './AttractionMapStyle.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import AttractionMapData from './AttractionMapData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

// 각 관광지 아이콘과 좌표 설정
const touristSpots = [
  { top: "10%", left: "49%" },
  { top: "5%", left: "55%" },
  { top: "50%", left: "41%" },
  { top: "100%", left: "42%" },
];

const AttractionMapPage = () => {

  const [characterPosition, setCharacterPosition] = useState({ top: "50%", left: "50%" });
  const [showModal, setShowModal] = useState(false);
  const [attractions, setAttractions] = useState([]); // API로부터 필터링된 관광지 저장
  const [randomizedAttractions, setRandomizedAttractions] = useState([]); // 무작위로 섞은 관광지 목록
  const [selectedSpot, setSelectedSpot] = useState(0); // 선택된 관광지 인덱스

  // 관광지를 필터링한 데이터를 받아옴
  const handleSelectAttraction = (filteredAttractions) => {
    setAttractions(filteredAttractions);
  };

  // 아이콘 클릭 시 랜덤한 관광지로 이동
  const moveToSpot = (top, left, index) => {
    setShowModal(true); // 모달 열기

    // 관광지 리스트를 랜덤하게 섞기
    const shuffledAttractions = [...attractions].sort(() => Math.random() - 0.5);
    setRandomizedAttractions(shuffledAttractions); // 무작위로 섞은 관광지 목록 저장

    // 랜덤하게 선택된 관광지 인덱스 설정
    const randomIndex = Math.floor(Math.random() * shuffledAttractions.length);
    setSelectedSpot(randomIndex);
  };

  // 모달 닫기 함수
  const handleClose = () => {
    setShowModal(false); // 모달 닫기 상태 설정
  };

  // 전체 관광지 목록 페이지로 이동하는 함수 (가상의 URL)
  const goToAttractionsList = () => {
    window.location.href = "/info"; // 실제 URL로 수정
  };

  // 슬라이더 설정
  const sliderSettings = {
    dots: false, // 점 없애기
    infinite: true, // 무한 슬라이딩 설정
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // 최대 두 문장까지만 보여주는 함수
  const getShortDescription = (description) => {
    const sentences = description.split('. ');
    return sentences.slice(0, 2).join('. ') + (sentences.length > 2 ? '.' : '');
  };

  return (
    <div className="Wt">
      <AttractionMapData onSelectAttraction={handleSelectAttraction} />

      <div className="map">
        {/* 캐릭터 */}
        <div
          className="character"
          style={{ top: characterPosition.top, left: characterPosition.left }}
        >
          🚶
        </div>

        {/* 관광지 아이콘들 */}
        {touristSpots.map((spot, index) => (
          <div key={index}>
            <div
              className="tourist-spot"
              style={{ top: spot.top, left: spot.left }}
              onClick={() => moveToSpot(spot.top, spot.left, index)}
            >
              📍
            </div>
          </div>
        ))}

        {/* 모달로 랜덤 관광지 정보 표시 */}
        {showModal && randomizedAttractions.length > 0 && (
          <Modal show={showModal} onHide={handleClose} centered>
            <Modal.Body style={{ maxHeight: '80vh', padding: '10px' }}>
              <div style={{ textAlign: 'center', marginBottom: '10px', fontSize: '16px', color: 'gray' }}>
                옆으로 넘기시면 다른 관광지를 볼 수 있어요!
              </div>
              <Slider {...sliderSettings}>
                {randomizedAttractions.map((attraction, index) => (
                  <div key={index}>
                    <h5>{attraction.title}</h5>
                    <img
                      src={attraction.imageUrl}
                      alt={attraction.title}
                      style={{ width: '100%', height: 'auto' }}
                    />
                    <p><strong>주소:</strong> {attraction.address}</p>
                    <p><strong>상세 내용:</strong> {getShortDescription(attraction.description)}</p>
                  </div>
                ))}
              </Slider>
              <Button variant="primary" onClick={goToAttractionsList} style={{ marginTop: '4px' }}>
                전체 관광지 보기
              </Button>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose} className="ModalButton">
                닫기
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default AttractionMapPage;
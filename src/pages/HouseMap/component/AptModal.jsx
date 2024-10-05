import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import { useHouseDataQuery } from "../../../hooks/useHouseData";
import { useEstateDataQuery } from "../../../hooks/useEstateDate";
import HouseModal from "./HouseModal";
import EstateButton from "./EstateButton";
import EstateModal from "./EstateModal";

const AptModal = ({
  onClose,
  onOtherBuilding,
  showBuilding,
  onRestaurantClick,
}) => {
  //부산시 도로공사 API 임대주택 정보 fetch
  const [houseData, setHouseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showButtons, setShowButtons] = useState(true); // 버튼 보이기 여부 관리
  const [showHouseData, setShowHouseData] = useState(false);
  const [showEstateData, setShowEstateData] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  // 시군구별 데이터 fetch
  const [keumData, setKeumData] = useState(null);
  const [dongData, setDongData] = useState(null);
  const [yeonData, setYeonData] = useState(null);

  //부산시 부동산 API 정보 fetch
  const [realEstateData, setRealEstateData] = useState([]);

  const { data } = useHouseDataQuery();
  console.log("house data please", data);
  const { data: estateDataFromQuery } = useEstateDataQuery();
  console.log("Estat?", estateDataFromQuery);

  const fetchHouseData = async () => {
    setLoading(true);
    try {
      if (data) {
        setHouseData(data);
        setShowHouseData(true);
      }
    } catch (error) {
      console.error("Error fetching housing data", error);
    } finally {
      setLoading(false);
    }
  };

  const handleButtonClick = (type) => {
    fetchHouseData(type);
    setShowButtons(false);
    setShowHouseData(true);
  };

  useEffect(() => {
    if (data) {
      fetchHouseData();
    }
  }, []);

  const fetchRealEstateData = async () => {
    setLoading(true);

    try {
      if (data) {
        setRealEstateData(data); // 데이터가 있을 때 상태로 저장
        setShowHouseData(false);
      }
    } catch (error) {
      console.error("Error fetching housing data", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRealEstateClick = async (district) => {
    setLoading(true);
    try {
      // if (estateDataFromQuery) {
      //   const filteredEstateData = estateDataFromQuery
      //     .filter((item) => item.시군구 === district)
      //     .slice(0, 5); // 5개의 랜덤 항목 선택

      //   console.log("필터링 된 데이터", filteredEstateData);
      //   setFilteredData(filteredEstateData);
      //   setShowEstateData(true); // 부동산 정보 표시
      //   setShowHouseData(false); // 주택 정보 숨기기
      // }
      fetchRealEstateData();
      setShowHouseData(false);
    } catch (error) {
      console.error("Error fetching estate data", error);
    } finally {
      setLoading(false);
    }
  };

  // const handleDistrictClick = (district) => {
  //   handleRealEstateClick(district);
  // };

  // const filterByKeum = ({ data }) => {

  //   const filteredKeum = data?.filter((item) => item.시군구 === "금정구");
  //   setKeumData(filteredKeum);
  //   console.log("금정구 데이터", filteredKeum);
  // };

  // useEffect(() => {
  //   if (filteredData) {
  //     filterByKeum(filteredData);
  //   }
  // }, [filteredData]);

  return (
    <div>
      <div
        className="modal index content"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog className="modal-index">
          <Modal.Header closeButton onClick={onClose}>
            <Modal.Title>임대주택 정보</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {showButtons && (
              <div>
                <Button
                  variant="primary"
                  onClick={() => handleButtonClick("영구임대")}
                  style={{ marginLeft: "1rem", marginRight: "1rem" }}
                >
                  영구임대
                </Button>
                <Button
                  variant="primary"
                  onClick={() => handleButtonClick("행복주택")}
                  style={{ marginRight: "1rem" }}
                >
                  행복주택
                </Button>
                <Button
                  variant="primary"
                  onClick={() => handleButtonClick("매입임대")}
                  style={{ marginRight: "1rem" }}
                >
                  매입임대
                </Button>
                <Button
                  variant="primary"
                  onClick={() => handleButtonClick("재개발임대")}
                >
                  재개발임대
                </Button>
              </div>
            )}

            {loading ? (
              <p> 데이터를 로딩 중입니다... </p>
            ) : (
              <div className="housing-data">
                {showHouseData && houseData && houseData.length > 0 ? (
                  <>
                    <HouseModal data={houseData} />
                    {/* 부동산 정보 알아보기 버튼 추가 */}
                    <div>
                      <Button onClick={() => handleRealEstateClick("금정구")}>
                        금정구 부동산 알아보기
                      </Button>
                      <Button onClick={() => handleRealEstateClick("북구")}>
                        북구 부동산 알아보기
                      </Button>
                      <Button onClick={() => handleRealEstateClick("동래구")}>
                        동래구 부동산 알아보기
                      </Button>
                    </div>
                  </>
                ) : realEstateData && realEstateData.length > 0 ? (
                  <EstateModal />
                ) : (
                  <p> </p>
                )}
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            {showBuilding && (
              <Modal.Footer>
                <Button variant="secondary" onClick={onRestaurantClick}>
                  맛집리스트 보러가기
                </Button>
                <Button variant="secondary">관광지리스트</Button>
              </Modal.Footer>
            )}
            <Button variant="secondary" onClick={onOtherBuilding}>
              다른 건물 보러가기
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </div>
  );
};

export default AptModal;

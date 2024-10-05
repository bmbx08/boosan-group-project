import React, { useState } from 'react';
import InfoData from './InfoData';
import './InfoStyle.css'
import ReactPaginate from 'react-paginate';

const Infopage = () => {
  const [attractions, setAttractions] = useState([]); // 관광지 데이터를 저장할 상태
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  // AllArea 컴포넌트로부터 데이터를 받는 함수
  const handleSelectAttraction = (data) => {
    setAttractions(data);
  };

  // 페이지 클릭 시 호출되는 함수
  const handlePageClick = ({ selected }) => {
    setPage(selected + 1); // 페이지 인덱스는 0부터 시작하므로 1을 더해줍니다.
    // 페이지가 변경될 때 스크롤을 맨 위로 올립니다.
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 스크롤 애니메이션 적용
    });
  };

  // 현재 페이지에 보여줄 관광지 데이터 계산
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentAttractions = attractions.slice(startIndex, endIndex);

  return (
    <div className="All">
      <div className="navbar"></div>
      <div className="under">
        <div className="radio"></div>
        <div className="information">
          {currentAttractions.length > 0 ? (
            currentAttractions.map((attraction, index) => (
              <div key={index} className="attraction-card">
                <img src={attraction.imageUrl} alt={attraction.title} className="attraction-image" />
                <div className="attraction-content">
                  <h2>{attraction.title}</h2>
                  {attraction.subtitle && <p><strong>부제목:</strong> {attraction.subtitle}</p>}
                  {attraction.cntct_tel && <p><strong>연락처:</strong> {attraction.cntct_tel}</p>}
                  {attraction.usage_day && <p><strong>운영일:</strong> {attraction.usage_day}</p>}
                  {attraction.hldy_info && <p><strong>휴무일:</strong> {attraction.hldy_info}</p>}
                  {attraction.usage_day_week_and_time && <p><strong>운영 및 시간 정보:</strong> {attraction.usage_day_week_and_time}</p>}
                  <p className="address"><strong>주소:</strong> {attraction.address}</p>
                  <p className="description"><strong>상세 정보:</strong> {attraction.description}</p>
                  <p className='address'>{attraction.middle_size_rm1}</p>
                </div>
              </div>
            ))
          ) : (
            <p>관광지 정보를 불러오는 중입니다...</p>
          )}

          {/* 페이지네이션을 가운데 정렬 */}
          <div className="pagination-container">
            <ReactPaginate
              nextLabel="다음 >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={Math.ceil(attractions.length / itemsPerPage)} // 전체 페이지 수 계산
              previousLabel="< 이전"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link disabled" // 클릭 불가능하게 처리
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
              forcePage={page - 1} // 페이지 강제 설정
            />
          </div>
        </div>
      </div>
      <InfoData onSelectAttraction={handleSelectAttraction} /> {/* API 데이터를 불러오는 컴포넌트 */}
    </div>
  );
};

export default Infopage;
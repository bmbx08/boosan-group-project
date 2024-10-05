import React, { useEffect, useState } from 'react';

const AttractionMapData = ({ onSelectAttraction }) => {
  const [attractions, setAttractions] = useState([]); // 관광지 데이터를 저장할 상태

  const fetchAttractions = async () => {
    const serviceKey = 'xnyO1ber7GLu44x%2FJPPyqfMsxHJZ9Sjt8iLoMMOPOzi3zubTQckDxzf%2FGQtfBHZzQoaT%2BleAkG2LgBdiFiEOTw%3D%3D'; // 인증키
    const url = 'http://apis.data.go.kr/6260000/AttractionService/getAttractionKr';

    const queryParams =
      `?serviceKey=${serviceKey}&` +
      `pageNo=1&` +
      `numOfRows=168&` +
      `resultType=xml`; // XML 형식으로 요청

    try {
      const response = await fetch(url + queryParams);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseText = await response.text(); // XML은 텍스트로 받아옵니다.

      // XML을 파싱하는 DOMParser 사용
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(responseText, 'application/xml');

      const items = xmlDoc.getElementsByTagName('item');
      const filteredAttractions = [];

      for (let i = 0; i < items.length; i++) {
        const title = items[i].getElementsByTagName('TITLE')[0]?.textContent;
        const address = items[i].getElementsByTagName('ADDR1')[0]?.textContent;
        const imageUrl = items[i].getElementsByTagName('MAIN_IMG_NORMAL')[0]?.textContent;
        const description = items[i].getElementsByTagName('ITEMCNTNTS')[0]?.textContent;

        // '북구', '사상구', '사하구'가 들어간 주소만 필터링
        if (address && (address.includes('북구') || address.includes('사상구') || address.includes('사하구'))) {
          filteredAttractions.push({
            title,
            address,
            imageUrl,
            description
          });
        }
      }

      setAttractions(filteredAttractions); // 필터링된 결과를 상태에 저장
      onSelectAttraction(filteredAttractions); // 부모 컴포넌트로 필터링된 데이터를 전달
    } catch (error) {
      console.error('Error fetching the attractions:', error);
    }
  };

  useEffect(() => {
    fetchAttractions();
  }, []);

  return null; // 해당 컴포넌트는 데이터를 필터링해서 전달만 함
};

export default AttractionMapData;

import React, { useEffect, useState } from 'react';

const InfoData = ({ onSelectAttraction }) => {
    const [attractions, setAttractions] = useState([]); // 관광지 데이터를 저장할 상태

    const fetchAttractions = async () => {
        const serviceKey = 'xnyO1ber7GLu44x%2FJPPyqfMsxHJZ9Sjt8iLoMMOPOzi3zubTQckDxzf%2FGQtfBHZzQoaT%2BleAkG2LgBdiFiEOTw%3D%3D'; // 인증키
        const url = 'http://apis.data.go.kr/6260000/AttractionService/getAttractionKr';

        const queryParams =
            `?serviceKey=${serviceKey}&` +
            `pageNo=1&` +
            `numOfRows=160&` +
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
            const allAttractions = [];

            for (let i = 0; i < items.length; i++) {
                const title = items[i].getElementsByTagName('TITLE')[0]?.textContent;
                const address = items[i].getElementsByTagName('ADDR1')[0]?.textContent;
                const imageUrl = items[i].getElementsByTagName('MAIN_IMG_NORMAL')[0]?.textContent;
                const description = items[i].getElementsByTagName('ITEMCNTNTS')[0]?.textContent;
                const subtitle = items[i].getElementsByTagName('SUBTITLE')[0]?.textContent;
                const cntct_tel = items[i].getElementsByTagName('CNTCT_TEL')[0]?.textContent;
                const usage_day = items[i].getElementsByTagName('USAGE_DAY')[0]?.textContent;
                const hldy_info = items[i].getElementsByTagName('HLDY_INFO')[0]?.textContent;
                const usage_day_week_and_time = items[i].getElementsByTagName('USAGE_DAY_WEEK_AND_TIME')[0]?.textContent;
                const middle_size_rm1 = items[i].getElementsByTagName('MIDDLE_SIZE_RM1')[0]?.textContent;

                allAttractions.push({
                    title,
                    address,
                    imageUrl,
                    description,
                    subtitle,
                    cntct_tel,
                    usage_day,
                    hldy_info,
                    usage_day_week_and_time,
                    middle_size_rm1
                });
            }

            setAttractions(allAttractions); // 모든 관광지 데이터를 상태에 저장
            onSelectAttraction(allAttractions); // 부모 컴포넌트로 데이터를 전달
        } catch (error) {
            console.error('Error fetching the attractions:', error);
        }
    };

    useEffect(() => {
        fetchAttractions();
    }, []);

    return null; // 해당 컴포넌트는 데이터를 필터링해서 전달만 함
};

export default InfoData;

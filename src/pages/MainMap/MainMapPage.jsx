import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../../component/Loader/Loader'; // Loader 컴포넌트 import
import './MainMapPage.css'; // Import the CSS file
import busanDefault from '../../common/images/부산시지도.png';
import bugeeImage from '../../common/images/부산시마스코트부기.png';
import signImage from '../../common//images/표지판.png';
import ChatBotTest from '../../component/ChatBot/ChatBotTest';
import Weather from '../../component/weather/Weather';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoImage from '../../common/images/부산 로고.png';

const MainMapPage = () => {
  const [showChatbot, setShowChatbot] = useState(false); // 챗봇 표시 여부 상태
  const [isClicked, setIsClicked] = useState(false);
  const [clickedArea, setClickedArea] = useState(''); // 클릭된 지역 상태 저장
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태
  const [backgroundImage, setBackgroundImage] = useState(busanDefault); // 기본 이미지 설정
  const [hoveredAreas, setHoveredAreas] = useState([]);
  const [balloonText, setBalloonText] = useState(''); // 말풍선 텍스트 상태 저장

  const navigate = useNavigate(); // React Router의 useNavigate hook 사용

  const handlePolygonClick = (area) => {
    setClickedArea(area); // 클릭된 지역을 상태로 저장
    setIsLoading(true); // 로딩 애니메이션 시작
  };
  const handleChatbotClick = () => {
    setShowChatbot(true); // 챗봇 모달 열기
  };

  const handleCloseModal = () => {
    setShowChatbot(false); // 챗봇 모달 닫기
  };
  //map1 : 서부지역 Western
  //map2 : 북서부 및 외곽 지역 NorthWest, outskirts 기장군 아니면 강서구
  //map3 : 북서부 및 외곽 지역 NorthWest, outskirts 기장군 아니면 강서구
  //map4 : 동부 해안 지역 EastCoast
  //map5 : 북동부 지역 NorthEast
  //map6 : 중심 지역 (부산 도심) Center
  //map7 : 중심 지역 (부산 도심) Center // 영도구
  const handleRadioChange = (event) => {
    const selectedRegion = event.target.value;
    let areas = [];
    let balloon = '';
    
    switch (selectedRegion) {
      case '북서부':
        areas = ['map-area2', 'map-area3'];
        balloon = '북서부 지역: 산업과 자연이 조화를 이루는 지역입니다.';
        break;
      case '서부':
        areas = ['map-area1'];
        balloon = '서부 지역: 다양한 문화와 역사를 자랑하는 지역입니다.';
        break;
      case '동부 해안':
        areas = ['map-area4'];
        balloon = '동부 해안: 해양 관광지로 유명한 지역입니다.';
        break;
      case '북동부':
        areas = ['map-area5'];
        balloon = '북동부: 첨단 산업의 중심지입니다.';
        break;
      case '중심':
        areas = ['map-area6', 'map-area7'];
        balloon = '중심 지역: 부산의 핵심 상업 지구입니다.';
        break;
      default:
        areas = [];
        balloon = '';
    }

    setHoveredAreas(areas);
    setBalloonText(balloon); // 말풍선 텍스트 설정
  };

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        switch (clickedArea) {
          case 'map-area1':
            navigate('/attraction/e');
            break;
          // 다른 지역 설정은 여기에 추가 가능
          case 'map-area2':
            navigate('/attraction/d');
            break;
          case 'map-area3':
            navigate('/attraction/d');
            break;
          case 'map-area4':
            navigate('/attraction/c');
            break;
          case 'map-area5':
            navigate('/attraction/a');
            break;
          case 'map-area6':
            navigate('/attraction/b');
            break;
          case 'map-area7':
            navigate('/attraction/b');
            break;
          default:
            setBackgroundImage(busanDefault);
        }
        setIsLoading(false); // 로딩 애니메이션 종료
        setIsClicked(true); // 지도를 표시
      }, 2000); // 1초 로딩 후 페이지 전환
      return () => clearTimeout(timer);
    }
  }, [isLoading, clickedArea, navigate]);
  return (
    <div
    className="map-basic-image"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    {isLoading ? (
      <Loader /> // 로딩 애니메이션을 보여줌
    ) : (
      <>
      {/* 로고 이미지 추가 */}
      <div className="logo-container">
          <img src={logoImage} alt="부산 로고" className="logo-image" />
        </div>
      
      <div className="map-container1">
        
        {/* WeatherBox를 오른쪽 상단에 고정 */}
        <div className="weather-box">
          <Weather />
        </div>
        {/* 부기 이미지 및 말풍선 */}
        <div className="bugee-container">
          <div className="thought">
          나는 오늘 너의 소통을 도와줄 부산 마스코트 부기야!
            <br />
            <button onClick={handleChatbotClick} className='bugee-button'>부기와 대화하기</button>
          </div>
          <img
            src={bugeeImage}
            alt="부산시 마스코트 부기"
            className="bugee-image"
          />
        </div>
        
          {/* React-Bootstrap 모달 */}
          {showChatbot && (
        <div className="modal-container">
          <div className="modal-main">
            <button className="close-modal" onClick={handleCloseModal}>
              닫기
            </button>
            <ChatBotTest /> {/* 챗봇 컴포넌트 */}
          </div>
        </div>
      )}
        {/* 표지판 이미지와 텍스트 */}
        <div className="sign-container">
          <img src={signImage} alt="표지판" className="sign-image" />

          {/* 1번 표지판 */}
          <div className="sign-box box1">
            <div className="color-box"></div> 북서부 및 외곽 지역
          </div>

          {/* 2번 표지판 */}
          <div className="sign-box box2">
            <div className="color-box"></div> 서부 지역
          </div>

          {/* 3번 표지판 */}
          <div className="sign-box box3">
            <div className="color-box"></div> 중심 지역
          </div>

          {/* 4번 표지판 */}
          <div className="sign-box box4">
            <div className="color-box"></div> 동부 해안 지역
          </div>

          {/* 5번 표지판 */}
          <div className="sign-box box5">
            <div className="color-box"></div> 북동부 지역
          </div>
        </div>

        {/* 라디오 버튼 섹션 */}
        <div className="radio-container">
          <label>
            <input
              type="radio"
              name="region"
              value="북서부"
              onChange={handleRadioChange}
            />
            북서부
          </label>
          <label>
            <input
              type="radio"
              name="region"
              value="서부"
              onChange={handleRadioChange}
            />
            서부
          </label>
          <label>
            <input
              type="radio"
              name="region"
              value="중심"
              onChange={handleRadioChange}
            />
            중심
          </label>
          <label>
            <input
              type="radio"
              name="region"
              value="동부 해안"
              onChange={handleRadioChange}
            />
            동부 해안
          </label>
          <label>
            <input
              type="radio"
              name="region"
              value="북동부"
              onChange={handleRadioChange}
            />
            북동부
          </label>
        </div>
        {/* 지도 SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3000 3000" // Adjust based on your map's dimensions
          className="map-svg"
        >
          {}
          <polygon
            points="1073,1865,1079,1881,1079,1900,1081,1921,1081,1940,1079,1961,1073,1977,1071,1993,1068,2016,1063,2032,1060,2051,1052,2064,1052,2091,1049,2109,1049,2130,1052,2152,1047,2170,1044,2186,1041,2205,1031,2226,1026,2250,1020,2271,1018,2292,1015,2308,1018,2327,1020,2348,1028,2361,1034,2380,1041,2406,1047,2427,1055,2446,1057,2467,1076,2486,1089,2496,1100,2512,1105,2533,1102,2554,1100,2578,1113,2565,1121,2546,1142,2536,1158,2539,1158,2523,1137,2517,1126,2501,1134,2488,1148,2480,1166,2491,1179,2486,1177,2467,1163,2459,1142,2456,1142,2438,1155,2425,1171,2419,1193,2419,1214,2419,1224,2435,1232,2456,1240,2470,1256,2475,1267,2462,1267,2446,1261,2422,1251,2409,1246,2390,1246,2369,1251,2340,1254,2319,1246,2303,1234,2279,1240,2263,1261,2258,1282,2255,1301,2268,1316,2271,1329,2282,1345,2292,1356,2269,1348,2245,1348,2231,1350,2210,1356,2192,1351,2173,1334,2157,1318,2141,1322,2122,1324,2101,1309,2077,1293,2061,1282,2043,1274,2024,1263,2003,1255,1990,1287,1993,1290,1974,1298,1953,1303,1932,1292,1913,1287,1895,1300,1884,1314,1881,1340,1884,1353,1876,1359,1857,1364,1836,1364,1820,1359,1802,1361,1781,1367,1762,1359,1743,1345,1733,1335,1714,1337,1698,1332,1680,1332,1659,1337,1643,1353,1632,1364,1622,1377,1603,1388,1590,1372,1574,1382,1555,1393,1539,1409,1526,1422,1513,1438,1505,1449,1497,1462,1478,1480,1478,1499,1465,1512,1449,1526,1436,1533,1417,1533,1399,1547,1386,1555,1367,1565,1349,1568,1330,1576,1311,1579,1293,1563,1288,1547,1290,1526,1293,1512,1277,1504,1258,1510,1240,1523,1224,1526,1205,1512,1192,1496,1179,1496,1158,1502,1139,1491,1121,1470,1113,1457,1097,1465,1081,1478,1070,1480,1054,1494,1033,1491,1017,1483,1010,1467,1007,1448,1004,1432,999,1409,996,1390,996,1372,993,1356,993,1343,999,1332,1009,1332,1031,1329,1046,1324,1070,1311,1092,1306,1113,1298,1129,1287,1155,1279,1174,1274,1195,1266,1213,1266,1232,1258,1253,1253,1269,1258,1288,1250,1306,1252,1330,1250,1346,1250,1362,1250,1378,1244,1402,1244,1428,1239,1447,1228,1463,1212,1487,1207,1505,1189,1516,1175,1529,1159,1540,1141,1550,1120,1561,1104,1574,1091,1590,1085,1611,1083,1630,1080,1648,1075,1675,1072,1696,1072,1717,1072,1741,1072,1762,1072,1786,1072,1802,1067,1826,1069,1850,"
            className={`map-area1 ${hoveredAreas.includes('map-area1') ? 'hovered' : ''}`}// Add a class for styling
            onMouseEnter={(e) => e.target.classList.add('hovered')}
            onMouseLeave={(e) => e.target.classList.remove('hovered')}
            onClick={() => handlePolygonClick('map-area1')}
          />
          {}
          <polygon
            points="177,1810,185,1826,193,1845,201,1863,206,1882,219,1893,238,1906,256,1922,272,1932,293,1946,309,1959,328,1975,341,1985,352,1996,378,1988,386,2009,381,2030,386,2052,397,2054,418,2067,431,2089,434,2107,426,2123,413,2139,394,2147,386,2166,394,2192,392,2208,386,2226,381,2250,402,2261,423,2269,439,2274,455,2274,474,2274,495,2282,519,2282,540,2282,561,2282,582,2287,601,2290,630,2293,649,2290,659,2277,670,2261,674,2255,670,2226,670,2208,670,2242,680,2197,688,2184,694,2184,710,2179,728,2173,741,2181,739,2200,728,2216,723,2232,715,2253,715,2274,723,2290,749,2290,765,2293,778,2290,794,2290,813,2287,826,2272,837,2256,853,2240,861,2221,874,2205,884,2189,892,2168,898,2152,892,2134,895,2115,900,2094,906,2078,922,2060,927,2046,943,2030,961,2012,972,1999,980,1991,993,1972,1006,1959,1012,1938,1025,1916,1025,1898,1030,1877,1049,1869,1059,1853,1057,1832,1057,1816,1059,1800,1057,1773,1062,1752,1059,1734,1062,1715,1062,1694,1065,1675,1065,1649,1070,1630,1073,1606,1081,1585,1096,1567,1107,1559,1123,1548,1136,1540,1152,1530,1171,1519,1184,1506,1195,1487,1213,1469,1226,1450,1232,1429,1242,1416,1240,1394,1240,1373,1240,1355,1242,1339,1242,1323,1242,1302,1240,1286,1242,1270,1221,1288,1197,1296,1179,1304,1157,1312,1136,1320,1118,1325,1102,1331,1081,1333,1062,1336,1041,1333,1020,1336,996,1339,975,1336,951,1339,930,1339,908,1341,887,1349,869,1368,855,1378,845,1394,834,1408,818,1392,813,1373,797,1357,776,1357,765,1370,765,1394,763,1413,744,1416,720,1410,696,1413,675,1421,657,1429,643,1434,625,1447,609,1461,593,1474,587,1490,584,1506,584,1530,590,1545,592,1566,595,1587,611,1611,621,1627,611,1643,595,1648,574,1648,558,1648,568,1670,582,1675,595,1688,606,1704,611,1722,592,1741,571,1736,555,1731,534,1725,515,1715,500,1723,484,1733,468,1744,452,1744,439,1746,431,1760,433,1776,423,1794,404,1786,388,1781,375,1792,348,1797,330,1794,314,1784,293,1776,277,1770,261,1776,240,1778,219,1781,205,1789,182,1797  "
            className={`map-area2 ${hoveredAreas.includes('map-area2') ? 'hovered' : ''}`}
            onMouseEnter={(e) => e.target.classList.add('hovered')}
            onMouseLeave={(e) => e.target.classList.remove('hovered')}
            onClick={() => handlePolygonClick('map-area2')}
          />
          <polygon
            points="1844,795,1860,806,1881,808,1900,814,1915,824,1929,832,1942,851,1942,867,1942,885,1942,906,1942,925,1937,943,1931,959,1926,981,1921,999,1918,1015,1913,1036,1910,1052,1915,1073,1926,1084,1939,1092,1955,1102,1974,1110,1992,1124,2013,1134,2024,1145,2040,1155,2061,1161,2074,1174,2085,1187,2098,1206,2104,1227,2112,1246,2125,1256,2141,1275,2151,1291,2159,1304,2162,1325,2162,1344,2159,1365,2151,1383,2141,1397,2130,1415,2127,1431,2141,1447,2157,1452,2172,1460,2186,1466,2204,1471,2218,1473,2239,1479,2257,1489,2257,1505,2252,1529,2263,1537,2278,1529,2292,1516,2310,1497,2321,1476,2342,1471,2361,1479,2369,1497,2366,1516,2361,1529,2369,1542,2371,1558,2371,1580,2371,1598,2387,1593,2400,1582,2403,1574,2416,1566,2430,1572,2448,1558,2459,1545,2469,1537,2479,1521,2483,1503,2485,1487,2490,1468,2483,1452,2477,1439,2467,1420,2456,1405,2461,1389,2472,1375,2485,1362,2501,1352,2514,1344,2533,1344,2543,1330,2549,1312,2557,1296,2567,1269,2567,1246,2580,1230,2583,1208,2593,1187,2606,1169,2609,1150,2604,1132,2604,1110,2596,1092,2586,1076,2570,1076,2557,1079,2546,1089,2525,1092,2512,1089,2506,1076,2504,1060,2506,1044,2512,1026,2533,1039,2551,1047,2554,1026,2559,1010,2565,994,2581,991,2599,991,2612,978,2607,957,2607,936,2607,914,2610,893,2623,877,2628,856,2618,840,2618,824,2618,808,2607,792,2610,774,2620,755,2634,739,2634,721,2636,705,2647,686,2660,673,2673,660,2687,657,2700,644,2718,636,2734,631,2750,633,2761,647,2779,660,2787,673,2803,681,2819,681,2838,681,2856,673,2880,647,2877,623,2867,602,2856,586,2846,572,2824,572,2809,554,2795,543,2777,533,2763,549,2742,546,2750,530,2758,511,2766,498,2756,482,2750,466,2748,451,2748,435,2748,419,2750,400,2737,384,2732,366,2718,347,2703,334,2692,318,2679,299,2668,286,2657,265,2642,252,2620,252,2602,249,2586,252,2578,265,2562,273,2543,273,2522,273,2501,281,2477,286,2464,281,2445,284,2430,292,2408,297,2392,305,2371,299,2355,292,2337,273,2324,260,2313,244,2300,236,2294,252,2286,265,2281,284,2281,305,2292,326,2297,347,2297,366,2297,379,2292,400,2278,419,2265,437,2231,448,2210,466,2199,482,2180,490,2159,482,2141,474,2125,464,2112,448,2096,437,2077,432,2056,424,2048,405,2027,403,2008,400,1990,403,1966,405,1945,408,1942,424,1945,440,1950,456,1953,469,1947,490,1939,509,1929,530,1926,551,1925,572,1918,594,1907,612,1900,636,1894,652,1884,670,1873,689,1868,710,1862,731,1859,753,1849,771,1950,456, "
            className={`map-area3 ${hoveredAreas.includes('map-area3') ? 'hovered' : ''}`}
            onMouseEnter={(e) => e.target.classList.add('hovered')}
            onMouseLeave={(e) => e.target.classList.remove('hovered')}
            onClick={() => handlePolygonClick('map-area3')}
          />
          <polygon
            points="1623,1839,1619,1851,1624,1875,1634,1888,1632,1906,1634,1925,1637,1944,1637,1973,1637,1991,1653,1994,1658,2010,1658,2028,1653,2047,1648,2065,1650,2087,1658,2105,1674,2116,1695,2118,1709,2124,1722,2137,1740,2132,1754,2134,1772,2142,1793,2145,1812,2142,1831,2142,1849,2137,1862,2134,1878,2126,1894,2124,1907,2134,1926,2140,1939,2121,1947,2105,1953,2087,1953,2065,1955,2047,1955,2031,1950,2010,1950,1994,1931,1981,1921,1965,1905,1952,1889,1938,1878,1922,1870,1901,1876,1883,1884,1861,1881,1843,1886,1827,1892,1814,1902,1800,1915,1790,1931,1790,1950,1790,1968,1785,1984,1782,1990,1763,1990,1747,2008,1758,2019,1769,2037,1777,2051,1774,2066,1771,2077,1785,2090,1782,2101,1763,2114,1753,2130,1750,2146,1750,2167,1750,2186,1750,2202,1763,2220,1769,2236,1766,2252,1758,2268,1755,2284,1745,2300,1734,2310,1721,2310,1700,2316,1681,2318,1660,2321,1639,2329,1620,2347,1610,2366,1612,2363,1594,2363,1564,2358,1546,2347,1538,2357,1519,2363,1500,2350,1485,2331,1488,2318,1501,2308,1520,2300,1533,2284,1543,2260,1549,2252,1538,2244,1525,2249,1503,2244,1487,2223,1482,2202,1482,2183,1477,2165,1469,2149,1461,2135,1450,2119,1439,2116,1423,2127,1405,2140,1389,2148,1378,2148,1360,2151,1342,2159,1325,2153,1309,2143,1296,2132,1277,2114,1264,2098,1244,2095,1219,2082,1198,2066,1185,2055,1174,2039,1163,2032,1186,2027,1207,2018,1222,2011,1239,1995,1249,1982,1265,1971,1281,1960,1297,1947,1314,1955,1307,1929,1331,1910,1342,1902,1360,1900,1387,1900,1403,1884,1416,1868,1432,1878,1448,1878,1471,1878,1487,1881,1503,1881,1519,1881,1538,1886,1556,1889,1578,1897,1596,1894,1617,1878,1628,1867,1643,1841,1635,1835,1617,1815,1617,1811,1627,1806,1646,1803,1664,1798,1683,1788,1707,1767,1723,1758,1739,1742,1746,1727,1757,1719,1773,1711,1792,1700,1813,1679,1829,1639,1834,1655,1834,1615,1829"
            className={`map-area4 ${hoveredAreas.includes('map-area4') ? 'hovered' : ''}`}
            onMouseEnter={(e) => e.target.classList.add('hovered')}
            onMouseLeave={(e) => e.target.classList.remove('hovered')}
            onClick={() => handlePolygonClick('map-area4')}
          />
          <polygon
            points="1501,1015,1499,1031,1499,1049,1488,1063,1483,1079,1472,1089,1459,1102,1470,1116,1488,1121,1504,1126,1509,1142,1504,1163,1499,1179,1515,1187,1525,1203,1530,1222,1525,1243,1517,1261,1512,1280,1530,1288,1549,1285,1568,1277,1586,1291,1583,1309,1583,1328,1576,1344,1568,1364,1560,1383,1550,1396,1539,1412,1536,1433,1531,1449,1518,1462,1507,1478,1489,1489,1510,1499,1515,1507,1518,1507,1526,1531,1531,1550,1539,1568,1542,1573,1547,1581,1565,1589,1584,1595,1602,1602,1616,1608,1626,1616,1642,1616,1655,1624,1674,1634,1682,1645,1690,1655,1695,1669,1708,1671,1722,1685,1714,1698,1703,1711,1695,1724,1692,1735,1711,1748,1727,1748,1743,1735,1756,1722,1767,1708,1780,1695,1783,1679,1785,1658,1788,1640,1798,1629,1804,1608,1822,1600,1835,1608,1843,1618,1859,1629,1873,1618,1883,1605,1878,1584,1875,1563,1870,1542,1870,1520,1867,1499,1867,1478,1873,1457,1865,1436,1870,1414,1886,1401,1894,1385,1894,1362,1894,1340,1910,1327,1928,1319,1941,1301,1949,1287,1963,1269,1976,1253,1986,1240,2000,1232,2008,1213,2016,1195,2018,1176,2023,1160,2008,1139,1984,1129,1957,1118,1939,1107,1918,1097,1904,1081,1896,1062,1899,1041,1904,1017,1912,993,1915,967,1923,946,1931,925,1933,898,1936,874,1933,848,1907,832,1886,824,1859,816,1838,805,1817,803,1796,805,1775,808,1753,811,1738,821,1719,832,1700,843,1685,858,1674,872,1658,890,1637,890,1618,882,1597,874,1584,869,1571,874,1557,888,1544,901,1534,914,1523,930,1518,943,1518,959,1518,978,1515,999"
            className={`map-area5 ${hoveredAreas.includes('map-area5') ? 'hovered' : ''}`}
            onMouseEnter={(e) => e.target.classList.add('hovered')}
            onMouseLeave={(e) => e.target.classList.remove('hovered')}
            onClick={() => handlePolygonClick('map-area5')}
          />

          <polygon
            points="1377,1579,1385,1592,1385,1608,1375,1624,1364,1637,1354,1648,1340,1659,1332,1677,1338,1688,1340,1704,1340,1720,1354,1735,1362,1741,1372,1759,1369,1778,1369,1794,1367,1810,1367,1825,1372,1839,1369,1857,1359,1876,1351,1894,1330,1897,1309,1894,1298,1908,1298,1923,1306,1934,1306,1950,1298,1968,1298,1984,1295,1998,1277,2005,1274,2027,1282,2040,1293,2056,1303,2066,1314,2080,1324,2090,1332,2109,1330,2130,1330,2146,1340,2156,1351,2167,1362,2180,1362,2196,1356,2209,1356,2223,1356,2238,1354,2257,1362,2276,1351,2291,1335,2297,1324,2289,1311,2276,1309,2289,1309,2310,1311,2323,1317,2336,1319,2355,1324,2366,1330,2381,1338,2400,1346,2421,1351,2434,1356,2448,1372,2445,1380,2424,1393,2405,1401,2384,1404,2358,1407,2334,1407,2313,1409,2291,1412,2270,1417,2246,1414,2228,1420,2209,1425,2193,1438,2175,1454,2162,1473,2159,1486,2143,1497,2122,1499,2101,1499,2077,1507,2058,1523,2048,1534,2058,1550,2056,1557,2037,1568,2021,1576,2013,1589,2003,1600,1990,1610,1976,1621,1984,1629,1995,1629,1968,1632,1947,1632,1929,1632,1913,1626,1892,1616,1873,1608,1852,1605,1833,1618,1820,1634,1820,1658,1817,1677,1810,1690,1804,1700,1783,1711,1772,1706,1759,1690,1743,1685,1727,1690,1712,1703,1696,1708,1685,1690,1674,1677,1656,1663,1640,1640,1629,1616,1619,1595,1611,1571,1600,1552,1592,1528,1582,1520,1561,1512,1539,1510,1518,1494,1505,1475,1497,1457,1500,1446,1518,1428,1529,1412,1539,1396,1553"
            className={`map-area6 ${hoveredAreas.includes('map-area6') ? 'hovered' : ''}`}
            onMouseEnter={(e) => e.target.classList.add('hovered')}
            onMouseLeave={(e) => e.target.classList.remove('hovered')}
            onClick={() => handlePolygonClick('map-area6')}
          />

          <polygon
            points="1454,2207,1459,2220,1467,2233,1483,2246,1494,2254,1505,2265,1518,2276,1531,2289,1542,2299,1552,2305,1568,2321,1581,2329,1595,2344,1605,2352,1618,2360,1632,2371,1642,2379,1655,2392,1669,2405,1690,2408,1711,2411,1722,2429,1730,2445,1740,2456,1753,2471,1772,2461,1798,2419,1785,2440,1793,2397,1785,2376,1775,2355,1764,2334,1748,2313,1735,2294,1722,2278,1708,2260,1698,2241,1687,2223,1674,2204,1655,2183,1634,2167,1613,2156,1592,2146,1568,2146,1547,2151,1534,2159,1523,2172,1502,2180,1478,2186,1459,2196"
            className={`map-area7 ${hoveredAreas.includes('map-area7') ? 'hovered' : ''}`}
            onMouseEnter={(e) => e.target.classList.add('hovered')}
            onMouseLeave={(e) => e.target.classList.remove('hovered')}
            onClick={() => handlePolygonClick('map-area7')}
          />
        </svg>
        
    {/* 말풍선 위치 표시 */}
    {hoveredAreas.includes('map-area1') && (
      <div className="thought" style={{ top: '12%', left: '33%' }}>
        {balloonText}
      </div>
    )}
    {hoveredAreas.includes('map-area2') && (
      <div className="thought" style={{ top: '27%', left: '25%' }}>
        {balloonText}
      </div>
    )}
    {hoveredAreas.includes('map-area4') && (
      <div className="thought" style={{ top: '60%', left: '58%' }}>
        {balloonText}
      </div>
    )}
    {hoveredAreas.includes('map-area7') && (
      <div className="thought" style={{ top: '81%', left: '47%' }}>
        {balloonText}
      </div>
    )}
    {hoveredAreas.includes('map-area5') && (
      <div className="thought" style={{ top: '12%', left: '37%' }}>
        {balloonText}
      </div>
    )}

        
      </div>
      </>
    )}
    
  </div>
  )
}

export default MainMapPage

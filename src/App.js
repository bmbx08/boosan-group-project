import { useEffect } from "react";
import "./App.css";
import map from "./common/images/boosan-map.png";

let tokenKey = `gbn2CWbfPq7J5Cn3UNX1uKBsgVCaCoH%2B7bsxs2v1db4LsayzwhOFUOWpjJypath3Qt3e0cfXciTFO1i6CX%2FVNQ%3D%3D`
let numOfRows = 10;
let pageNo = 1

function App() {
  // const getAttractionInfo = async() => {
  //   let url = `http://apis.data.go.kr/3330000/HeaundaeTourAttrInfoService/getTourAttrList?serviceKey=${tokenKey}&numOfRows=${numOfRows}&pageNo=${pageNo}&resultType=json`
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   console.log("data",data);
  // }

  // useEffect(()=>{
  //   getAttractionInfo();
  // },[]);

  var xhr = new XMLHttpRequest();
var url = 'http://apis.data.go.kr/3330000/HeaundaeTourAttrInfoService/getTourAttrList'; /*URL*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+`${tokenKey}`; /*Service Key*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
queryParams += '&' + encodeURIComponent('trrsrtNm') + '=' + encodeURIComponent('부산항대교'); /**/
queryParams += '&' + encodeURIComponent('resultType') + '=' + encodeURIComponent('json'); /**/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
    }
};

xhr.send('');

  return (
    <div>
      <div className="map-container">
        <img src={map} className="map" />
      </div>
    </div>
  );
}

export default App;
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
// import map from "./common/images/boosan-map.png";
import northwest from "./common/images/northwest.png"
import tourist from "./common/images/tourist.png"
import restaurant from "./common/images/restaurant.png"
import RstrModal from "./components/RstrModal";

let tokenKey = `PbshnZKCA1YUtih0GQHG4aIUbS4ZX6gBXVSW0WboMeHxBIPic7j7j6jA08TzW4jP`
let rstrDataURL='/api/rstr'
let rstrOperateURL='/api/rstr/oprt'
let rstrQualityURL='/api/rstr/qlt'
let rstrImageURL='/api/rstr/img'
let foodImageURL = `/api/food/img`
let menuURL= '/api/menu/korean'
let menuDescURL= '/api/menu-dscrn/korean'


function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var xhr = new XMLHttpRequest();
var url = 'http://apis.data.go.kr/6260000/FoodService/getFoodKr'; /*URL*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'gbn2CWbfPq7J5Cn3UNX1uKBsgVCaCoH%2B7bsxs2v1db4LsayzwhOFUOWpjJypath3Qt3e0cfXciTFO1i6CX%2FVNQ%3D%3D'; /*Service Key*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
    }
};

xhr.send('');

  // // const [rstrData,setRstrData]= useState();
  // let rstrData;
  // let rstrID;
  

  // const getRstrData = async() => {
  //   let url = `https://busan-food.openapi.redtable.global${rstrDataURL}?serviceKey=${tokenKey}`
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   // setRstrData(data.body[0]);
  //   rstrData = data.body[0];  
  //   rstrID = rstrData.RSTR_ID;

  //   console.log("restaurant data",data);
  //   console.log("first example",rstrData);
  //   console.log("rstr ID",rstrID);
  // }

  // const getRstrOperateData = async() => {
  //   let url = `https://busan-food.openapi.redtable.global${rstrOperateURL}?serviceKey=${tokenKey}`
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   console.log("rstr operate data",data);
  // }

  // const getRstrQualityData = async() => {
  //   let url = `https://busan-food.openapi.redtable.global${rstrQualityURL}?serviceKey=${tokenKey}`
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   console.log("rstr quality data",data);
  // }

  // const getRstrImages = async() => {
  //   let url = `https://busan-food.openapi.redtable.global${rstrImageURL}?serviceKey=${tokenKey}`
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   // let rstrImages = data.filter((img)=>{
  //   //   return img.RSTR_ID == rstrID;
  //   // })

  //   console.log("rstr images",data);
  //   // console.log("thisss rstr images", rstrImages);
  // }

  // const getMenuData = async() => {
  //   let url = `https://busan-food.openapi.redtable.global${menuURL}?serviceKey=${tokenKey}`
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   console.log("menu data",data);
  // }

  // const getMenuDescData = async() => {
  //   let url = `https://busan-food.openapi.redtable.global${menuDescURL}?serviceKey=${tokenKey}`
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   console.log("menu desc data",data);
  // }

  // const getFoodImages = async() => {
  //   let url = `https://busan-food.openapi.redtable.global${foodImageURL}?serviceKey=${tokenKey}`
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   console.log("food images",data);
  // }

  
  // const getAllData = ()=>{
  //   getRstrData();
  //   getRstrOperateData();
  //   getRstrQualityData();
  //   getRstrImages();
  //   getMenuData();
  //   getMenuDescData();
  //   getFoodImages();
  // }
  
  //1,5,9,10,11,12,13,14

  // useEffect(()=>{
  //   getAllData();
  // },[]);

  return (
    <div>
      <div className="map-container">
        {/* <img src={map} className="map" /> */}
        <img src={northwest} alt="busan-northwest-map" className="map" width="800"/>
        <img src={tourist} alt="tourist-img" className="tourist" width="150"/>
        <img src={restaurant} alt="restaurant-img1" className="food pos1" width="90" onClick={handleShow}/>
        <img src={restaurant} alt="restaurant-img2" className="food pos2" width="90"/>
        <img src={restaurant} alt="restaurant-img3" className="food pos3" width="90"/>
        <img src={restaurant} alt="restaurant-img4" className="food pos4" width="90"/>
        <img src={restaurant} alt="restaurant-img5" className="food pos5" width="90"/>
      </div>
      
      {/* <RstrModal data={rstrData} show={show} handleClose={handleClose}/>/ */}
    </div>
  );
}

export default App;
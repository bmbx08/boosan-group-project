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
  const [rstrData,setRstrData]= useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getRstrData = async() => {
    let url = `https://busan-food.openapi.redtable.global${rstrDataURL}?serviceKey=${tokenKey}`
    let response = await fetch(url);
    let data = await response.json();
    setRstrData(data.body[0]);
    console.log("restaurant data",data);
    console.log("first example",rstrData);
  }

  const getRstrOperateData = async() => {
    let url = `https://busan-food.openapi.redtable.global${rstrOperateURL}?serviceKey=${tokenKey}`
    let response = await fetch(url);
    let data = await response.json();
    console.log("rstr operate data",data);
  }

  const getRstrQualityData = async() => {
    let url = `https://busan-food.openapi.redtable.global${rstrQualityURL}?serviceKey=${tokenKey}`
    let response = await fetch(url);
    let data = await response.json();
    console.log("rstr quality data",data);
  }

  const getRstrImages = async() => {
    let url = `https://busan-food.openapi.redtable.global${rstrImageURL}?serviceKey=${tokenKey}`
    let response = await fetch(url);
    let data = await response.json();
    console.log("rstr images",data);
  }

  const getMenuData = async() => {
    let url = `https://busan-food.openapi.redtable.global${menuURL}?serviceKey=${tokenKey}`
    let response = await fetch(url);
    let data = await response.json();
    console.log("menu data",data);
  }

  const getMenuDescData = async() => {
    let url = `https://busan-food.openapi.redtable.global${menuDescURL}?serviceKey=${tokenKey}`
    let response = await fetch(url);
    let data = await response.json();
    console.log("menu desc data",data);
  }

  const getFoodImages = async() => {
    let url = `https://busan-food.openapi.redtable.global${foodImageURL}?serviceKey=${tokenKey}`
    let response = await fetch(url);
    let data = await response.json();
    console.log("food images",data);
  }

  
  const getAllData = ()=>{
    getRstrData();
    getRstrOperateData();
    getRstrQualityData();
    getRstrImages();
    getMenuData();
    getMenuDescData();
    getFoodImages();
  }
  

  //1,5,9,10,11,12,13,14

  useEffect(()=>{
    getAllData();
  },[]);

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
      
      <RstrModal data={rstrData} show={show} handleClose={handleClose}/>/
    </div>
  );
}

export default App;
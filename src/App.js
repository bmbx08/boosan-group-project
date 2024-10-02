import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
// import map from "./common/images/boosan-map.png";
import northwest from "./common/images/northwest.png"
import tourist from "./common/images/tourist.png"
import boogi from "./common/images/Boogi.png"
import restaurant from "./common/images/restaurant.png"
import RstrModal from "./components/RstrModal";




function App() {
  const [show, setShow] = useState(false);
  const [rstrData, setRstrData] = useState(null);
  const [totalData, setTotalData]=useState(null);
  const [keumData, setKeumData]= useState(null);
  const [dongData, setDongData]= useState(null);
  const [yeonData, setYeonData]= useState(null);

  const handleClose = () => setShow(false);
  // const handleShow = (num) => setShow(true);

  const handleKeumShow = (num) =>{
    setRstrData(keumData?keumData[num]:null); 
    setShow(true);
  }
  const handleDongShow = (num) =>{
    setRstrData(dongData?dongData[num]:null); 
    setShow(true);
  }
  const handleYeonShow = (num) =>{
    setRstrData(yeonData?yeonData[num]:null); 
    setShow(true);
  }

  //keum,dong,yeon

  const getData = async()=>{
    try{
      let key = 'gbn2CWbfPq7J5Cn3UNX1uKBsgVCaCoH%2B7bsxs2v1db4LsayzwhOFUOWpjJypath3Qt3e0cfXciTFO1i6CX%2FVNQ%3D%3D'
      let url=`http://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=${key}&pageNo=1&numOfRows=1000&resultType=json`
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
      filterData(data);
      setTotalData(data);
      setRstrData(data.getFoodKr.item[0]);      
    }catch(error){
      console.log("error message",error);
    }
  }

  const filterData=(data)=>{
    let keum = data.getFoodKr.item.filter((item)=>{
      return item.GUGUN_NM === '금정구'
    })
    setKeumData(keum);
    console.log("금정구 데이터", keum);
    let dong = data.getFoodKr.item.filter((item)=>{
      return item.GUGUN_NM === '동래구'
    })
    setDongData(dong);
    console.log("동래구 데이터", dong);
    let yeon = data.getFoodKr.item.filter((item)=>{
      return item.GUGUN_NM === '연제구'
    })
    setYeonData(yeon);
    console.log("연제구 데이터", yeon);
  }

  const getAttractionData = async()=>{
    try{
      let key = 'gbn2CWbfPq7J5Cn3UNX1uKBsgVCaCoH%2B7bsxs2v1db4LsayzwhOFUOWpjJypath3Qt3e0cfXciTFO1i6CX%2FVNQ%3D%3D'
      let url=`http://apis.data.go.kr/6260000/AttractionService/getAttractionKr?serviceKey=${key}&pageNo=1&numOfRows=1000&resultType=json`
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);    
    }catch(error){
      console.log("error message",error);
    }
  }

  useEffect(()=>{
    getData();
    getAttractionData();
  },[]);

  return (
    <div>
      <div className="map-container">
        {/* <img src={map} className="map" /> */}
        <img src={northwest} alt="busan-northwest-map" className="map" width="800"/>
        {/* <img src={tourist} alt="tourist-img" className="tourist" width="150"/> */}
        <img src={boogi} alt="tourist-img" className="tourist" width="150"/> {/*부산시 소통캐릭터*/}
        <img src={restaurant} alt="restaurant-img0" className="food pos1" width="90" onClick={()=>handleKeumShow(0)}/>
        <img src={restaurant} alt="restaurant-img1" className="food pos2" width="90" onClick={()=>handleKeumShow(1)}/>
        <img src={restaurant} alt="restaurant-img2" className="food pos3" width="90" onClick={()=>handleDongShow(0)}/>
        <img src={restaurant} alt="restaurant-img3" className="food pos4" width="90" onClick={()=>handleDongShow(1)}/>
        <img src={restaurant} alt="restaurant-img4" className="food pos5" width="90" onClick={()=>handleYeonShow(0)}/>
      </div>
      {/* <div>{rstrData?.getFoodKr.item[0].TITLE}</div> */}
      <RstrModal data={rstrData} show={show} handleClose={handleClose}/>
    </div>
  );
}

export default App;
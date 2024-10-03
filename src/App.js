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
import {filterByCategory} from "./function/filterByCategory"
import RstrIcon from "./components/RstrIcon";
import HistoryIcon from "./components/HistoryIcon";



function App() {
  const [show, setShow] = useState(false);
  const [rstrData, setRstrData] = useState(null);
  const [totalData, setTotalData]=useState(null);
  const [keumData, setKeumData]= useState(null);
  const [dongData, setDongData]= useState(null);
  const [yeonData, setYeonData]= useState(null);

  const [attrData,setAttrData]= useState(null);
  const [keumAttr, setKeumAttr]= useState(null);
  const [dongAttr, setDongAttr]= useState(null);
  const [yeonAttr, setYeonAttr]= useState(null);

  const [historyData, setHistoryData]= useState(null);
  const [natureData, setNatureData] = useState(null);
  const [cultureData, setCultureData] =  useState(null);

  const [theme, setTheme] = useState(null);

  const handleClose = () => setShow(false);
  // const handleShow = (num) => setShow(true);

  const handleShow = (loc, num)=>{
    if(loc==="keum") {setRstrData(keumData?keumData[num]:null);}
    else if(loc==="dong") {setRstrData(dongData?dongData[num]:null);}
    else if(loc==="yeon") {setRstrData(yeonData?yeonData[num]:null);}
    setShow(true);
  }

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

  // const getData = async()=>{
  //   try{
  //     let key = 'gbn2CWbfPq7J5Cn3UNX1uKBsgVCaCoH%2B7bsxs2v1db4LsayzwhOFUOWpjJypath3Qt3e0cfXciTFO1i6CX%2FVNQ%3D%3D'
  //     let url=`http://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=${key}&pageNo=1&numOfRows=1000&resultType=json`
  //     let response = await fetch(url);
  //     let data = await response.json();
  //     console.log(data);
  //     filterData(data);
  //     setTotalData(data);
  //     setRstrData(data.getFoodKr.item[0]);      
  //   }catch(error){
  //     console.log("error message",error);
  //   }
  // }

  const getAttractionData = async()=>{
    try{
      let key = 'gbn2CWbfPq7J5Cn3UNX1uKBsgVCaCoH%2B7bsxs2v1db4LsayzwhOFUOWpjJypath3Qt3e0cfXciTFO1i6CX%2FVNQ%3D%3D'
      let url=`http://apis.data.go.kr/6260000/AttractionService/getAttractionKr?serviceKey=${key}&pageNo=1&numOfRows=1000&resultType=json`
      let response = await fetch(url);
      let firstData = await response.json();
      let data = firstData.getAttractionKr.item;
      console.log(data);
      setAttrData(data);
      filterAttrData(data);
      // filterByCategory(data, setHistoryData, setNatureData, setCultureData);
      
      
    }catch(error){
      console.log("error message",error);
    }
  }

  const filterAttrData=(data)=>{
    let keum = data.filter((item)=>{
      return item.GUGUN_NM === '금정구'
    })
    setKeumData(keum);
    console.log("금정구 데이터", keum);
    let dong = data.filter((item)=>{
      return item.GUGUN_NM === '동래구'
    })
    setDongData(dong);
    console.log("동래구 데이터", dong);
    let yeon = data.filter((item)=>{
      return item.GUGUN_NM === '연제구'
    })
    setYeonData(yeon);
    console.log("연제구 데이터", yeon);
  }

  useEffect(()=>{
    // getData();
    getAttractionData();
  },[]);

  return (
    <div>
      <div className="map-container">
        <img src={northwest} alt="busan-northwest-map" className="map" width="800"/>
        {/* <img src={tourist} alt="tourist-img" className="tourist" width="150"/> */}
        <img src={boogi} alt="tourist-img" className="tourist" width="150"/> {/*부산시 소통캐릭터*/}
        <RstrIcon loc="keum" showNum={0} index={1} handleShow={handleShow}/>
        <RstrIcon loc="keum" showNum={1} index={2} handleShow={handleShow}/>
        <RstrIcon loc="dong" showNum={0} index={3} handleShow={handleShow}/>
        <RstrIcon loc="dong" showNum={1} index={4} handleShow={handleShow}/>
        <RstrIcon loc="yeon" showNum={0} index={5} handleShow={handleShow}/>
        <HistoryIcon loc="keum" showNum={0} index={1} handleShow={handleShow}/>
        {/* <img src={restaurant} alt="restaurant-icon" className="food pos1" width="90" onClick={()=>handleShow("keum",0)}/>
        <img src={restaurant} alt="restaurant-icon" className="food pos2" width="90" onClick={()=>handleShow("keum",1)}/>
        <img src={restaurant} alt="restaurant-icon" className="food pos3" width="90" onClick={()=>handleShow("dong",0)}/>
        <img src={restaurant} alt="restaurant-icon" className="food pos4" width="90" onClick={()=>handleShow("dong",1)}/>
        <img src={restaurant} alt="restaurant-icon" className="food pos5" width="90" onClick={()=>handleShow("yeon",0)}/>*/}
        <div className="radio-section">
        <label>
            <input 
              type="radio" 
              name="options" 
              value="1" 
              className="radio-button"
              // onChange={handleRadioChange} 
            />
            1번
          </label>
          <label>
            <input 
              type="radio" 
              name="options" 
              value="2" 
              className="radio-button"
              // onChange={handleRadioChange} 
            />
            2번
          </label>
        </div>
      </div>
      {/* <div>{rstrData?.getFoodKr.item[0].TITLE}</div> */}
      <RstrModal data={rstrData} show={show} handleClose={handleClose}/>
    </div>
  );
}

export default App;
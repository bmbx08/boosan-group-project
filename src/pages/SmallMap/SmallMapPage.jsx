import { useEffect, useState } from "react";
import northwest from "../../common/images/attractionMap/northwest.png"
// import tourist from "../../common/images/attractionMap/tourist.png"
import boogi from "../../common/images/attractionMap/Boogi.png"
import RstrModal from "./components/RstrModal";
import { filterHistory } from "./function/filterHistory";
import { filterCulture } from "./function/filterCulture";
import { filterNature } from "./function/filterNature";
import {useRestaurantDataQuery} from "../../hooks/useRestaurantData"
import {useAttractionDataQuery} from "../../hooks/useAttractionData" 
import RstrIcon from "./components/RstrIcon";
import AttrIcon from "./components/AttrIcon";
import RadioSection from "./components/RadioSection";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./SmallMap.style.css";

const SmallMapPage=()=> {
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [keumData, setKeumData]= useState(null);
  const [dongData, setDongData]= useState(null);
  const [yeonData, setYeonData]= useState(null);

  // const [rstrData, setRstrData] = useState(null);
  const [historyData, setHistoryData]= useState(null);
  const [natureData, setNatureData] = useState(null);
  const [cultureData, setCultureData] =  useState(null);

  const [theme, setTheme] = useState(null);

  const [fade,setFade] = useState(true);

  const {data:rstrData, isLoading:rstrIsLoading, isError:rstrIsError, error:rstrError} = useRestaurantDataQuery();
  console.log("rstrData", rstrData, rstrIsLoading);
  console.log("rstrError", rstrIsError, rstrError);

  const {data:attrData,isLoading:attrIsLoading,isError:attrIsError,error:attrError} = useAttractionDataQuery();
  console.log("attrData", attrData, attrIsLoading);
  console.log("attrError", attrIsError, attrError);

  const handleClose = () => setShow(false);

  const handleShow = (loc, num)=>{
    if(loc==="keum") {setModalData(keumData?keumData[num]:null);}
    else if(loc==="dong") {setModalData(dongData?dongData[num]:null);}
    else if(loc==="yeon") {setModalData(yeonData?yeonData[num]:null);}
    setShow(true);
  }

  //keum,dong,yeon

  // const getRstrData = async()=>{
  //   try{
  //     let key = 'gbn2CWbfPq7J5Cn3UNX1uKBsgVCaCoH%2B7bsxs2v1db4LsayzwhOFUOWpjJypath3Qt3e0cfXciTFO1i6CX%2FVNQ%3D%3D'
  //     let url=`http://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=${key}&pageNo=1&numOfRows=1000&resultType=json`
  //     let response = await fetch(url);
  //     let firstData = await response.json();
  //     let data = firstData.getFoodKr.item;
  //     console.log(data);
  //     setRstrData(data);
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
      setHistoryData(filterHistory(data));
      setNatureData(filterNature(data));
      setCultureData(filterCulture(data));
      console.log("history, nature, culture", historyData, natureData, cultureData)
      // filterByLoc(historyData);
    }catch(error){
      console.log("error message",error);
    }
  }

  const filterByLoc=(data)=>{
    console.log(data);
    let keum = data?.filter((item)=>{
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

  const handleRadioChange=(event)=>{
    const selectedTheme = event.target.value;
    let beforeFilter;
    setFade(false);

    setTimeout(() => {
      if(selectedTheme === "history"){
        beforeFilter = "history";
      } else if(selectedTheme ==="nature"){
        beforeFilter = "nature";
      } else if(selectedTheme === "culture"){
        beforeFilter = "culture";
      }else if(selectedTheme === "food"){
        beforeFilter = "food";
      }

      if(beforeFilter){
        setTheme(beforeFilter);
      }
      setTimeout(() => {
        setFade(true);
      }, 100); //상태 업데이트 미리 시작되게끔 설정
    }, 300);
    
  }

  useEffect(()=>{
    if(theme===null){
      // getAttractionData();
      // getRstrData();
      setHistoryData(filterHistory(attrData));
      setNatureData(filterNature(attrData));
      setCultureData(filterCulture(attrData));
      console.log("history, nature, culture", historyData, natureData, cultureData);
    }
    if(historyData||natureData||cultureData){ //데이터 가져오기 전 라디오 누를 때 에러 방지
      if(theme==="history"){
        filterByLoc(historyData);
      }else if(theme==="nature"){
        filterByLoc(natureData);
      }else if(theme==="culture"){
        filterByLoc(cultureData);
      }else if(theme==="food"){
        filterByLoc(rstrData);
      }
    }
    
  },[theme,attrData]);

  return (
    <div>
      <div className="map-container">
        <img src={northwest} alt="busan-northwest-map" className="map" width="800"/>
        {/* <img src={tourist} alt="tourist-img" className="tourist" width="150"/> */}
        <img src={boogi} alt="tourist-img" className="tourist" width="150"/> {/*부산시 소통캐릭터*/}
        {theme==="history" &&
          <>
          <AttrIcon loc="keum" theme={theme} showNum={0} index={1} handleShow={handleShow} fade={fade}/>
          <AttrIcon loc="keum" theme={theme} showNum={1} index={2} handleShow={handleShow} fade={fade}/>
          <AttrIcon loc="dong" theme={theme} showNum={0} index={3} handleShow={handleShow} fade={fade}/>
          <AttrIcon loc="dong" theme={theme} showNum={1} index={4} handleShow={handleShow} fade={fade}/>
          <AttrIcon loc="yeon" theme={theme} showNum={0} index={5} handleShow={handleShow} fade={fade}/>
          </>
        }
        {theme==="nature" &&
          <>
          <AttrIcon loc="keum" theme={theme} showNum={0} index={1} handleShow={handleShow} fade={fade}/>
          <AttrIcon loc="keum" theme={theme} showNum={1} index={2} handleShow={handleShow} fade={fade}/>
          <AttrIcon loc="dong" theme={theme} showNum={0} index={3} handleShow={handleShow} fade={fade}/>
          <AttrIcon loc="dong" theme={theme} showNum={1} index={4} handleShow={handleShow} fade={fade}/>
          <AttrIcon loc="yeon" theme={theme} showNum={0} index={5} handleShow={handleShow} fade={fade}/>
          </>
        }
        {theme==="culture" &&
          <>
          <AttrIcon loc="keum" theme={theme} showNum={0} index={1} handleShow={handleShow} fade={fade}/>
          <AttrIcon loc="keum" theme={theme} showNum={1} index={2} handleShow={handleShow} fade={fade}/>
          <AttrIcon loc="dong" theme={theme} showNum={0} index={3} handleShow={handleShow} fade={fade}/>
          <AttrIcon loc="dong" theme={theme} showNum={1} index={4} handleShow={handleShow} fade={fade}/>
          <AttrIcon loc="yeon" theme={theme} showNum={0} index={5} handleShow={handleShow} fade={fade}/>
          </>
        }
        {theme==="food" &&
          <>
          <RstrIcon loc="keum" showNum={0} index={1} handleShow={handleShow} fade={fade}/>
          <RstrIcon loc="keum" showNum={1} index={2} handleShow={handleShow} fade={fade}/>
          <RstrIcon loc="dong" showNum={0} index={3} handleShow={handleShow} fade={fade}/>
          <RstrIcon loc="dong" showNum={1} index={4} handleShow={handleShow} fade={fade}/>
          <RstrIcon loc="yeon" showNum={0} index={5} handleShow={handleShow} fade={fade}/>
          </>
        }
        <RadioSection handleRadioChange={handleRadioChange} theme={theme}/>
      </div>
      <RstrModal data={modalData} theme={theme} show={show} handleClose={handleClose}/>
    </div>
  );
}

export default SmallMapPage;
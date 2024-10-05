import { useEffect, useState } from "react";
// import northwest from "../../common/images/attractionMap/northwest.png";
// import tourist from "../../common/images/attractionMap/tourist.png"
import attractionA from "../../common/images/NorthEast.png"
import attractionB from "../../common/images/Center.png"
import attractionC from "../../common/images/EastCoast.png"
import attractionD from "../../common/images/NorthwestAndOutlying.png"
import attractionE from "../../common/images/Western.png"
import boogi from "../../common/images/Boogi.png";
import busan from "../../common/images/Busan.png"
import RstrModal from "./components/RstrModal";
import { useNavigate, useParams } from "react-router-dom";
import { filterHistory } from "./function/filterHistory";
import { filterCulture } from "./function/filterCulture";
import { filterNature } from "./function/filterNature";
import {useRestaurantDataQuery} from "../../hooks/useRestaurantData";
import {useAttractionDataQuery} from "../../hooks/useAttractionData" ;
import RadioSection from "./components/RadioSection";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./AttractionMap.style.css";
import "./AttractionIconLoc.style.css";
import AttrIconSection from "./components/AttrIconSection";
import RstrIconSection from "./components/RstrIconSection";

const AttractionMapPage=()=> {
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [keumData, setKeumData]= useState(null);
  const [dongData, setDongData]= useState(null);
  const [yeonData, setYeonData] = useState(null);
  const [jinguData, setJinguData]= useState(null);
  const [seoguData, setSeoguData]= useState(null);
  const [donguData, setDonguData]= useState(null);
  const [joonguData, setJoonguData]= useState(null);
  const [yeongdoData, setYeongdoData]= useState(null);
  const [haeoonData, setHaeoonData]= useState(null);
  const [youngData, setYoungData]= useState(null);
  const [namguData, setNamguData]= useState(null);
  const [gangData, setGangData]= useState(null);
  const [kijangData, setKijangData]= useState(null);
  const [bookData, setBookData]= useState(null);
  const [sangData, setSangData]= useState(null);
  const [sahaData, setSahaData]= useState(null);

  const [historyData, setHistoryData]= useState(null);
  const [natureData, setNatureData] = useState(null);
  const [cultureData, setCultureData] =  useState(null);

  const [theme, setTheme] = useState(null);

  const [fade,setFade] = useState(true);

  const {id} = useParams();

  // const handleOnAttractionAPISuccess=()=>{
  //   console.log("SUCCESS!!!!!!!!!!!!!!");
  //   setHistoryData(filterHistory(attrData));
  //   setNatureData(filterNature(attrData));
  //   setCultureData(filterCulture(attrData));
  // }

  const navigate=useNavigate();

  const goToMain=()=>{
    navigate('/');
  }

  const {
    data:rstrData, isLoading:rstrIsLoading, isError:rstrIsError, error:rstrError
  } = useRestaurantDataQuery() //API호출 성공시 데이터 장르별 필터
  // console.log("rstrData", rstrData, rstrIsLoading);
  // console.log("rstrError", rstrIsError, rstrError);

  const {data:attrData,isLoading:attrIsLoading,isError:attrIsError,error:attrError} = useAttractionDataQuery();
  // console.log("attrData", attrData, attrIsLoading);
  // console.log("attrError", attrIsError, attrError);
  // console.log("history, nature, culture", historyData, natureData, cultureData);

  const handleClose = () => setShow(false);

  const handleShow = (loc, num)=>{
    if(loc==="keum") {setModalData(keumData?keumData[num]:null);}
    else if(loc==="dong") {setModalData(dongData?dongData[num]:null);}
    else if(loc==="yeon") {setModalData(yeonData?yeonData[num]:null);}
    else if(loc==="jingu") {setModalData(jinguData?jinguData[num]:null);}
    else if(loc==="seogu") {setModalData(seoguData?seoguData[num]:null);}
    else if(loc==="dongu") {setModalData(donguData?donguData[num]:null);}
    else if(loc==="joongu") {setModalData(joonguData?joonguData[num]:null);}
    else if(loc==="yeongdo") {setModalData(yeongdoData?yeongdoData[num]:null);}
    else if(loc==="haeoon") {setModalData(haeoonData?haeoonData[num]:null);}
    else if(loc==="young") {setModalData(youngData?youngData[num]:null);}
    else if(loc==="namgu") {setModalData(namguData?namguData[num]:null);}
    else if(loc==="gang") {setModalData(gangData?gangData[num]:null);}
    else if(loc==="kijang") {setModalData(kijangData?kijangData[num]:null);}
    else if(loc==="book") {setModalData(bookData?bookData[num]:null);}
    else if(loc==="sang") {setModalData(sangData?sangData[num]:null);}
    else if(loc==="saha") {setModalData(sahaData?sahaData[num]:null);}
    setShow(true);
  }

  //keum,dong,yeon

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
    let jingu = data.filter((item)=>{
      return item.GUGUN_NM === '부산진구'
    })
    setJinguData(jingu);
    console.log("부산진구 데이터", jingu);
    let seogu = data.filter((item)=>{
      return item.GUGUN_NM === '서구'
    })
    setSeoguData(seogu);
    console.log("서구 데이터", seogu);
    let dongu = data.filter((item)=>{
      return item.GUGUN_NM === '동구'
    })
    setDonguData(dongu);
    console.log("동구 데이터", dongu);
    let joongu = data.filter((item)=>{
      return item.GUGUN_NM === '중구'
    })
    setJoonguData(joongu);
    console.log("중구 데이터", joongu);
    let yeongdo = data.filter((item)=>{
      return item.GUGUN_NM === '영도구'
    })
    setYeongdoData(yeongdo);
    console.log("영도구 데이터", yeongdo);
    let haeoon = data.filter((item)=>{
      return item.GUGUN_NM === '해운대구'
    })
    setHaeoonData(haeoon);
    console.log("해운대구 데이터", haeoon);
    let young = data.filter((item)=>{
      return item.GUGUN_NM === '수영구'
    })
    setYoungData(young);
    console.log("수영구 데이터", young);
    let namgu = data.filter((item)=>{
      return item.GUGUN_NM === '남구'
    })
    setNamguData(namgu);
    console.log("남구 데이터", namgu);
    let gang = data.filter((item)=>{
      return item.GUGUN_NM === '강서구'
    })
    setGangData(gang);
    console.log("강서구 데이터", gang);
    let kijang = data.filter((item)=>{
      return item.GUGUN_NM === '기장군'
    })
    setKijangData(kijang);
    console.log("기장군 데이터", kijang);
    let book = data.filter((item)=>{
      return item.GUGUN_NM === '북구'
    })
    setBookData(book);
    console.log("북구 데이터", book);
    let sang = data.filter((item)=>{
      return item.GUGUN_NM === '사상구'
    })
    setSangData(sang);
    console.log("사상구 데이터", sang);
    let saha = data.filter((item)=>{
      return item.GUGUN_NM === '사하구'
    })
    setSahaData(saha);
    console.log("사하구 데이터", saha);
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
    if(attrData){
      if(attrData&&theme===null){
        setHistoryData(filterHistory(attrData));
        setNatureData(filterNature(attrData));
        setCultureData(filterCulture(attrData));
      }
    }

    if(theme){
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
    }
  },[theme,attrData]);

  return (
    <div>
      <div className="map-container">
        {id==="a"&&<img src={attractionA} alt="busan-map" className="map" width="800"/>}
        {id==="b"&&<img src={attractionB} alt="busan-map" className="map" width="800"/>}
        {id==="c"&&<img src={attractionC} alt="busan-map" className="map" width="800"/>}
        {id==="d"&&<img src={attractionD} alt="busan-map" className="map" height="1000"/>}
        {id==="e"&&<img src={attractionE} alt="busan-map" className="map" width="800"/>}

        <img src={busan} className="map-button" onClick={goToMain}/>
  
        <RadioSection handleRadioChange={handleRadioChange} theme={theme}/>

        {/* <img src={tourist} alt="tourist-img" className="tourist" width="150"/> */}
        <img src={boogi} alt="tourist-img" className={`tourist ${id}`}/> {/*부산시 소통캐릭터*/}
        {theme==="history" &&
          <> {/* NorthEast, Center, EastCoast, NorthwestAndOutlying, Western */}
            <AttrIconSection id={id} theme={theme} handleShow={handleShow} fade={fade}/>
            {/* <AttrIcon loc="keum" theme={theme} showNum={0} index={1} handleShow={handleShow} fade={fade}/>
            <AttrIcon loc="keum" theme={theme} showNum={1} index={2} handleShow={handleShow} fade={fade}/>
            <AttrIcon loc="dong" theme={theme} showNum={0} index={3} handleShow={handleShow} fade={fade}/>
            <AttrIcon loc="dong" theme={theme} showNum={1} index={4} handleShow={handleShow} fade={fade}/>
            <AttrIcon loc="yeon" theme={theme} showNum={0} index={5} handleShow={handleShow} fade={fade}/> */}
          </>
        }
        {theme==="nature" &&
          <>
            <AttrIconSection id={id} theme={theme} handleShow={handleShow} fade={fade}/>
            {/* <AttrIcon loc="keum" theme={theme} showNum={0} index={1} handleShow={handleShow} fade={fade}/>
            <AttrIcon loc="keum" theme={theme} showNum={1} index={2} handleShow={handleShow} fade={fade}/>
            <AttrIcon loc="dong" theme={theme} showNum={0} index={3} handleShow={handleShow} fade={fade}/>
            <AttrIcon loc="dong" theme={theme} showNum={1} index={4} handleShow={handleShow} fade={fade}/>
            <AttrIcon loc="yeon" theme={theme} showNum={0} index={5} handleShow={handleShow} fade={fade}/> */}
          </>
        }
        {theme==="culture" &&
          <>
            <AttrIconSection id={id} theme={theme} handleShow={handleShow} fade={fade}/>
            {/* <AttrIcon loc="keum" theme={theme} showNum={0} index={1} handleShow={handleShow} fade={fade}/>
            <AttrIcon loc="keum" theme={theme} showNum={1} index={2} handleShow={handleShow} fade={fade}/>
            <AttrIcon loc="dong" theme={theme} showNum={0} index={3} handleShow={handleShow} fade={fade}/>
            <AttrIcon loc="dong" theme={theme} showNum={1} index={4} handleShow={handleShow} fade={fade}/>
            <AttrIcon loc="yeon" theme={theme} showNum={0} index={5} handleShow={handleShow} fade={fade}/> */}
          </>
        }
        {theme==="food" &&
          <>
            <RstrIconSection id={id} handleShow={handleShow} fade={fade}/>
            {/* <RstrIcon loc="keum" showNum={0} index={1} handleShow={handleShow} fade={fade}/>
            <RstrIcon loc="keum" showNum={1} index={2} handleShow={handleShow} fade={fade}/>
            <RstrIcon loc="dong" showNum={0} index={3} handleShow={handleShow} fade={fade}/>
            <RstrIcon loc="dong" showNum={1} index={4} handleShow={handleShow} fade={fade}/>
            <RstrIcon loc="yeon" showNum={0} index={5} handleShow={handleShow} fade={fade}/> */}
          </>
        }
        
      </div>
      <RstrModal data={modalData} theme={theme} show={show} handleClose={handleClose}/>
    </div>
  );
}

export default AttractionMapPage;

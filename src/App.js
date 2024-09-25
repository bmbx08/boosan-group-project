import { useEffect } from "react";
import "./App.css";
import map from "./common/images/boosan-map.png";

let tokenKey = `PbshnZKCA1YUtih0GQHG4aIUbS4ZX6gBXVSW0WboMeHxBIPic7j7j6jA08TzW4jP`
let imageURL = `/api/food/img`

function App() {
  const getFoodImage = async() => {
    let url = `https://busan-food.openapi.redtable.global${imageURL}?serviceKey=${tokenKey}`
    let response = await fetch(url);
    let data = await response.json();
    console.log("data",data);
  }

  useEffect(()=>{
    getFoodImage();
  },[]);

  return (
    <div>
      <div className="map-container">
        <img src={map} className="map" />
      </div>
    </div>
  );
}

export default App;
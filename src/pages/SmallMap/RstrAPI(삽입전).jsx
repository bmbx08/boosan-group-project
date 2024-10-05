import React from "react";

const RstrAPI = () => {
  let tokenKey = `PbshnZKCA1YUtih0GQHG4aIUbS4ZX6gBXVSW0WboMeHxBIPic7j7j6jA08TzW4jP`;
  let rstrDataURL = "/api/rstr";
  let rstrOperateURL = "/api/rstr/oprt";
  let rstrQualityURL = "/api/rstr/qlt";
  let rstrImageURL = "/api/rstr/img";
  let foodImageURL = `/api/food/img`;
  let menuURL = "/api/menu/korean";
  let menuDescURL = "/api/menu-dscrn/korean";

  let rstrData;
  let rstrID;

  const getRstrData = async () => {
    let url = `https://busan-food.openapi.redtable.global${rstrDataURL}?serviceKey=${tokenKey}`;
    let response = await fetch(url);
    let data = await response.json();
    // setRstrData(data.body[0]);
    rstrData = data.body[0];
    rstrID = rstrData.RSTR_ID;

    console.log("restaurant data", data);
    console.log("first example", rstrData);
    console.log("rstr ID", rstrID);
  };

  const getRstrOperateData = async () => {
    let url = `https://busan-food.openapi.redtable.global${rstrOperateURL}?serviceKey=${tokenKey}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("rstr operate data", data);
  };

  const getRstrQualityData = async () => {
    let url = `https://busan-food.openapi.redtable.global${rstrQualityURL}?serviceKey=${tokenKey}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("rstr quality data", data);
  };

  const getRstrImages = async () => {
    let url = `https://busan-food.openapi.redtable.global${rstrImageURL}?serviceKey=${tokenKey}`;
    let response = await fetch(url);
    let data = await response.json();
    // let rstrImages = data.filter((img)=>{
    //   return img.RSTR_ID == rstrID;
    // })

    console.log("rstr images", data);
    // console.log("thisss rstr images", rstrImages);
  };

  const getMenuData = async () => {
    let url = `https://busan-food.openapi.redtable.global${menuURL}?serviceKey=${tokenKey}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("menu data", data);
  };

  const getMenuDescData = async () => {
    let url = `https://busan-food.openapi.redtable.global${menuDescURL}?serviceKey=${tokenKey}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("menu desc data", data);
  };

  const getFoodImages = async () => {
    let url = `https://busan-food.openapi.redtable.global${foodImageURL}?serviceKey=${tokenKey}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("food images", data);
  };

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

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div>
    
    </div>
  );
}

export default RstrAPI;

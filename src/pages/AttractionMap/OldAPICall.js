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

  // const getAttractionData = async()=>{
  //   try{
  //     let key = 'gbn2CWbfPq7J5Cn3UNX1uKBsgVCaCoH%2B7bsxs2v1db4LsayzwhOFUOWpjJypath3Qt3e0cfXciTFO1i6CX%2FVNQ%3D%3D'
  //     let url=`http://apis.data.go.kr/6260000/AttractionService/getAttractionKr?serviceKey=${key}&pageNo=1&numOfRows=1000&resultType=json`
  //     let response = await fetch(url);
  //     let firstData = await response.json();
  //     let data = firstData.getAttractionKr.item;
  //     console.log(data);
  //     setHistoryData(filterHistory(data));
  //     setNatureData(filterNature(data));
  //     setCultureData(filterCulture(data));
  //     console.log("history, nature, culture", historyData, natureData, cultureData)
  //     // filterByLoc(historyData);
  //   }catch(error){
  //     console.log("error message",error);
  //   }
  // }
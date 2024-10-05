import React, { useEffect, useState } from 'react'
import {filterHistory} from "./function/filterHistory"
import {filterNature} from "./function/filterNature"
import {filterCulture} from "./function/filterCulture"
import { useRestaurantDataQuery } from '../../hooks/useRestaurantData'
import { useAttractionDataQuery } from '../../hooks/useAttractionData'

const InfoPage = () => {

  const [historyData, setHistoryData]= useState(null);
  const [natureData, setNatureData] = useState(null);
  const [cultureData, setCultureData] =  useState(null);

  const {
    data:rstrData, isLoading:rstrIsLoading, isError:rstrIsError, error:rstrError
  } = useRestaurantDataQuery()
  console.log("history, nature, culture", historyData, natureData, cultureData);
  console.log("rstrData", rstrData, rstrIsLoading);
  console.log("rstrError", rstrIsError, rstrError);

  const {
    data:attrData,isLoading:attrIsLoading,isError:attrIsError,error:attrError
  } = useAttractionDataQuery();
  console.log("attrData", attrData, attrIsLoading);
  console.log("attrError", attrIsError, attrError);

  const checkData=()=>{
    console.log("history data",historyData);
    console.log("nature data",natureData);
    console.log("culture data",cultureData);
    console.log("맛집 data",rstrData);
  }

  useEffect(()=>{
    if(attrData){
      setHistoryData(filterHistory(attrData));
      setNatureData(filterNature(attrData));
      setCultureData(filterCulture(attrData));
    }
  },[attrData])

  return (
    <div>
      Info Page
      <button onClick={checkData}>Click Me</button>
    </div>
  )
}

export default InfoPage
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
  console.log("rstrData", rstrData, rstrIsLoading);
  console.log("rstrError", rstrIsError, rstrError);

  const {
    data:attrData,isLoading:attrIsLoading,isError:attrIsError,error:attrError
  } = useAttractionDataQuery();
  console.log("attrData", attrData, attrIsLoading);
  console.log("attrError", attrIsError, attrError);

  console.log("history, nature, culture, 맛집 데이터", historyData, natureData, cultureData,rstrData);


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
    </div>
  )
}

export default InfoPage
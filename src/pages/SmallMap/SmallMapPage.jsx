import React from 'react'
import { useAttractionDataQuery } from '../../hooks/useAttractionData';
import { useRestaurantDataQuery } from '../../hooks/useRestaurantData';
import { useHouseDataQuery } from '../../hooks/useHouseData';
import { useEstateDataQuery } from '../../hooks/useEstateDate';

const SmallMapPage = () => {
    // const {data,isLoading,isError,error}=useEstateDataQuery();
    // console.log("data",data,isLoading);
    // console.log("error",isError,error);

  return (
    <div>
      Small Map Page
    </div>
  )
}

export default SmallMapPage;
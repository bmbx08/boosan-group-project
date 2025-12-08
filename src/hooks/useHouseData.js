import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const serviceKey = process.env.REACT_APP_ENCODING_KEY;
//임대주택 api
const fetchHouseData=()=>{
    return api.get(`/B551922/BMC_SERVICE/HOUSELIST?serviceKey=${serviceKey}&numOfRows=1000&pageNo=1`)
}

export const useHouseDataQuery=()=>{
    return useQuery({
        queryKey:['house'],
        queryFn: fetchHouseData,
        select:(result)=>result.data.response.body.items.item,
    })
}
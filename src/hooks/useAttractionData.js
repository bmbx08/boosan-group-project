import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const serviceKey = process.env.REACT_APP_ENCODING_KEY;

const fetchAttractionData=()=>{
    return api.get(`/6260000/AttractionService/getAttractionKr?serviceKey=${serviceKey}&numOfRows=1000&pageNo=1&resultType=json`)
}

export const useAttractionDataQuery=()=>{
    return useQuery({
        queryKey:['attraction'],
        queryFn:fetchAttractionData,
        select:(result)=>result.data.getAttractionKr.item,
    })
}
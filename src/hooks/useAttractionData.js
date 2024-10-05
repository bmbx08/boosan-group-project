import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const serviceKey = process.env.REACT_APP_ENCODING_KEY;
//관광지(자연,문화,역사) api
const fetchAttractionData=()=>{
    return api.get(`/6260000/AttractionService/getAttractionKr?serviceKey=${serviceKey}&numOfRows=1000&pageNo=1&resultType=json`)
}

export const useAttractionDataQuery=(onSuccess)=>{
    return useQuery({
        queryKey:['attraction'],
        queryFn:fetchAttractionData,
        select:(result)=>result.data.getAttractionKr.item,
    })
}
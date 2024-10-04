import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const serviceKey = process.env.REACT_APP_ENCODING_KEY;
//맛집 api
const fetchRestaurantData=()=>{
    return api.get(`/6260000/FoodService/getFoodKr?serviceKey=${serviceKey}&numOfRows=1000&pageNo=1&resultType=json`)
}

export const useRestaurantDataQuery=()=>{
    return useQuery({
        queryKey:['restaurant'],
        queryFn: fetchRestaurantData,
        select:(result)=>result.data.getFoodKr.item
    })
}
import { useQuery } from "@tanstack/react-query";
import foodapi from "../utils/foodapi";

const token = process.env.REACT_APP_FOOD_TOKEN;

//음식점 기본 정보 api
const fetchAllFoodDataQuery=()=>{
    return foodapi.get(`/api/rstr?serviceKey=${token}&pageNo=1`)
}

export const useAllFoodDataQuery=()=>{
    return useQuery({
        queryKey:['all-food'],
        queryFn:fetchAllFoodDataQuery,
        select: (result)=>result.data.body
    })
}
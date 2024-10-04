import { useQuery } from "@tanstack/react-query";
import api2 from "../utils/api2";

const serviceKey = process.env.REACT_APP_ENCODING_KEY;
//부동산 api
const fetchEstateData=()=>{
    return api2.get(`/15083344/v1/uddi:aae31967-3c9b-4544-9fd9-e75c345c5b86?page=1&perPage=1000&serviceKey=${serviceKey}`)
}
export const useEstateDataQuery=()=>{
    return useQuery({
        queryKey:['estate'],
        queryFn: fetchEstateData,
        select:(result)=>result.data.data
    })
}
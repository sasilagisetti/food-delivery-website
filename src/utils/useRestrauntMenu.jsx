import { useEffect, useState } from "react";
import useLocation from "./UseLocation";

const useRestrauntMenu = (resId) =>{
    const[apidata, setApiData] = useState(null);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async() =>{
        // let data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.6851243&lng=83.2035471&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER")
        let data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.6905906&lng=83.1664418&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER")
        let json  = await data.json();
        // console.log(json.data)
        setApiData(json.data);
    }
    return apidata;
}

export default useRestrauntMenu;
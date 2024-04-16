import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaruntCard = (props) =>{
    const {loggedInUser} = useContext(UserContext)
    const {resData} = props;
    // console.log(resData)
    const {name,cloudinaryImageId,avgRating,cuisines,costForTwo,sla} = resData.info;
    // console.log(resData.info)
    return(
        <div className="w-[18rem] res-card bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl overflow-hidden relative h-[360px]">
            <div className="overflow-hidden [filter:drop-shadow(rgba(0,0,0,0.1) 0px 2px 8px)]">

                <img className="res-card-logo h-48 w-full hover:scale-110 transition ease-in duration-300 " src={`${CDN_URL}${cloudinaryImageId}`} alt="" />
            </div>
            <div className="res-card-text px-4 py-4 flex flex-col gap-y-[6px]">
                <h2 className="underline text-xl font-semibold">{name}</h2>
                <h5 >{cuisines.join(",")}</h5>
                <div className="flex flex-row gap-x-2" >
                    <h5 className="text-sm bg-orange-400 px-2 py-.5">{avgRating}⭐</h5>
                    <h3 className="text-sm underline underline-offset-2 decoration-dotted">{costForTwo}</h3>
                    <h6>⌛{sla.deliveryTime} Mins</h6>
                </div>
                <h5>User: {loggedInUser}</h5>
            </div>
        </div>
    )
}

// higher Order Component

export const withDiscount = (RestaruntCard) =>{
    return(props)=>{
        return (
            <div className="relative drop-shadow-2xl">
                <div className="absolute z-40 top-[45%] left-0 bg-black flex flex-row gap-x-4 py-1 px-2">
                    <label className="text-white font-semibold ">{props.resData.info.aggregatedDiscountInfoV3.subHeader}</label>
                    <label className="text-white font-semibold ">{props.resData.info.aggregatedDiscountInfoV3.header}</label>
                </div>
                <RestaruntCard {...props}/>
            </div>
        )
    }
}

export default RestaruntCard;
import {useParams} from "react-router-dom"
import Shimmer from "./Shimmer";
import { IMG_URL } from "../utils/constants";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestaruntCategory from "./RestaruntCategory";
import { useState } from "react";
const RestaruntMenu = () =>{
    const {resId} = useParams();

    menuDetails = useRestrauntMenu(resId);
    // console.log(menuDetails.cards[0].card.card.info)
    // console.log(menuDetails.cards[2].groupedCard.cardGroupMap.REGULAR.cards)
    const[showIndex, setShowIndex] = useState(null);
    
    if(menuDetails === null) return <Shimmer /> ; 
    console.log(menuDetails.cards[2].card.card.info.name)

    const {name,cuisines,costForTwoMessage,id,avgRating,totalRatingsString,areaName,sla} = menuDetails?.cards[2]?.card?.card?.info;
    // const {itemCards} = menuDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;
    // console.log(itemCards)
    const {cards} = menuDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
    // console.log(cards[0].card.card);
    const extractCards = cards.filter((card)=> {
        return(
            // card.card.card.title !==undefined &&  card.card.card.categories === undefined
            card.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
    })
    // console.log(extractCards);
    return(
        <div className="menu px-6 py-8 w-[75%] mx-auto">
            <div className="border-b-2 pb-4 mb-8 flex flex-row align-middle justify-between">
                <div className="">
                    <h1 className="font-semibold text-lg">{name}</h1>
                    <h4 className="mt-2 text-sm">{cuisines.join(",")}</h4>
                    <span className="text-sm">{areaName},{sla.lastMileTravelString}</span>
                </div>
                <div className=" border-2 rounded-lg flex flex-col px-2 py-2 align-middle justify-between">
                    <h2 className="text-center border-b-2 pb-2 text-green-700 font-bold">☆{" "}{avgRating}</h2>
                    <h5 className="text-sm">{totalRatingsString}</h5>
                </div>
            </div>
            <div className="flex flex-col gap-y-2 bg-slate-200 ">
                {extractCards.map((card,index)=> <RestaruntCategory key={index} category={card.card.card}
                showItems={index=== showIndex ? true: false} setShowIndex={()=>setShowIndex((prev)=>prev===index?null:index)}/>)}
            </div>
        </div>
    )
}

export default RestaruntMenu;
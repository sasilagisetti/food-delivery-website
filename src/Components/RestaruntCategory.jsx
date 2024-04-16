import { useState } from "react"
import CategoryItems from "./CategoryItems"

const RestaruntCategory = ({category, showItems,setShowIndex}) =>{
    // console.log(showItems)
    const handleClick = () =>{
        setShowIndex();
    }
    return(
        <div className="bg-white">
            <div className="flex flex-row align-middle justify-between py-4 px-2  hover:bg-slate-100 transition ease-in duration-300 cursor-pointer" onClick={()=>{
                handleClick();
            }}>
                <div className="text-xl font-bold flex flex-row gap-x-2">{category.title}<span>({category.itemCards.length})</span></div><span className={showItems?"rotate-180 transition ease-in duration-300" :"transition ease-in duration-300 "}>▼</span>
               
            </div>
            {showItems && <CategoryItems list={category.itemCards}/>}
                
        </div>
    )
}

export default RestaruntCategory
function e(e,a,s,t){Object.defineProperty(e,a,{get:s,set:t,enumerable:!0,configurable:!0})}var a=globalThis.parcelRequirea524,s=a.register;s("a8I73",function(s,t){Object.defineProperty(s.exports,"__esModule",{value:!0,configurable:!0}),e(s.exports,"default",()=>o);var l=a("ayMG0"),r=a("aphAM"),i=a("cuXuQ");a("4eM2B");var n=a("fcjJI"),d=a("72oAI"),c=a("acw62"),o=()=>{let{resId:e}=(0,r.useParams)();menuDetails=(0,n.default)(e);let[a,s]=(0,c.useState)(null);if(null===menuDetails)return(0,l.jsx)(i.default,{});console.log(menuDetails.cards[2].card.card.info.name);let{name:t,cuisines:o,costForTwoMessage:x,id:m,avgRating:u,totalRatingsString:f,areaName:p,sla:g}=menuDetails?.cards[2]?.card?.card?.info,{cards:h}=menuDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR,j=h.filter(e=>"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"===e.card.card["@type"]);return(0,l.jsxs)("div",{className:"menu px-6 py-8 w-[75%] mx-auto",children:[(0,l.jsxs)("div",{className:"border-b-2 pb-4 mb-8 flex flex-row align-middle justify-between",children:[(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)("h1",{className:"font-semibold text-lg",children:t}),(0,l.jsx)("h4",{className:"mt-2 text-sm",children:o.join(",")}),(0,l.jsxs)("span",{className:"text-sm",children:[p,",",g.lastMileTravelString]})]}),(0,l.jsxs)("div",{className:" border-2 rounded-lg flex flex-col px-2 py-2 align-middle justify-between",children:[(0,l.jsxs)("h2",{className:"text-center border-b-2 pb-2 text-green-700 font-bold",children:["☆"," ",u]}),(0,l.jsx)("h5",{className:"text-sm",children:f})]})]}),(0,l.jsx)("div",{className:"flex flex-col gap-y-2 bg-slate-200 ",children:j.map((e,t)=>(0,l.jsx)(d.default,{category:e.card.card,showItems:t===a,setShowIndex:()=>s(e=>e===t?null:t)},t))})]})}}),s("fcjJI",function(s,t){e(s.exports,"default",()=>r);var l=a("acw62");a("4d1Il");var r=e=>{let[a,s]=(0,l.useState)(null);(0,l.useEffect)(()=>{t()},[]);let t=async()=>{let a=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.6905906&lng=83.1664418&restaurantId="+e+"&catalog_qa=undefined&submitAction=ENTER");s((await a.json()).data)};return a}}),s("72oAI",function(s,t){e(s.exports,"default",()=>i);var l=a("ayMG0");a("acw62");var r=a("kL3sN"),i=({category:e,showItems:a,setShowIndex:s})=>{let t=()=>{s()};return(0,l.jsxs)("div",{className:"bg-white",children:[(0,l.jsxs)("div",{className:"flex flex-row align-middle justify-between py-4 px-2  hover:bg-slate-100 transition ease-in duration-300 cursor-pointer",onClick:()=>{t()},children:[(0,l.jsxs)("div",{className:"text-xl font-bold flex flex-row gap-x-2",children:[e.title,(0,l.jsxs)("span",{children:["(",e.itemCards.length,")"]})]}),(0,l.jsx)("span",{className:a?"rotate-180 transition ease-in duration-300":"transition ease-in duration-300 ",children:"▼"})]}),a&&(0,l.jsx)(r.default,{list:e.itemCards})]})}}),s("kL3sN",function(s,t){e(s.exports,"default",()=>d);var l=a("ayMG0"),r=a("7jD0c"),i=a("4eM2B"),n=a("awx58"),d=({list:e})=>{let a=(0,r.useDispatch)(),s=e=>{a((0,n.addItem)(e))};return(0,l.jsx)("div",{className:"mb-2",children:e.map(e=>(0,l.jsxs)("div",{className:"flex flex-row align-middle mb-2 border-b-2 pt-2 pb-8 px-2 justify-between overflow-hidden",children:[(0,l.jsxs)("div",{className:"flex flex-col w-8/12",children:[(0,l.jsx)("h1",{className:"font-semibold",children:e.card.info.name}),(0,l.jsxs)("h3",{children:["₹ ",e.card.info.price/100]}),(0,l.jsx)("p",{className:"mt-2 text-sm text-gray-400",children:e.card.info.description})]}),(0,l.jsxs)("div",{className:"w-2/12 relative z-10",children:[void 0!==e.card.info.imageId&&(0,l.jsx)("img",{className:"rounded-2xl object-cover h-[110px] w-40 -z-10",src:`${i.ITEMS_URL}${e.card.info.imageId}`,alt:""}),(0,l.jsx)("button",{className:"absolute top-[85%] left-[19%] bg-white z-50 px-6 py-[1px] border-[1px] border-gray-500 font-semibold text-green-600 rounded-md",onClick:()=>s(e),children:"ADD"})]})]},e.card.info.id))})}});
//# sourceMappingURL=RestaruntMenu.85f59ea6.js.map
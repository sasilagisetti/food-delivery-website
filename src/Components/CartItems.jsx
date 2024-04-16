import React from "react";
import { ITEMS_URL } from "../utils/constants";
const CartItems = ({ list }) => {
  console.log(list);
  return (
    <div>
      {list.map((item) => (
        <div
          key={item.payload.card.info.id}
          className="flex flex-row align-middle w-75% bg-gray-300 mb-2 px-4 py-2 rounded-lg justify-between h-[150px] mt-4"
        >
          <div className="w-9/12 flex flex-col justify-center">
            <h2 className="text-lg font-serif font-bold">{item.payload.card.info.name}</h2>
            <h3 className="font-medium">₹{item.payload.card.info.price / 100}</h3>
            <h4>{item.payload.card.info.description}</h4>
          </div>
          <div className="w-2/12 rounded-lg overflow-hidden">
            <img src={`${ITEMS_URL}${item.payload.card.info.imageId}`} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;

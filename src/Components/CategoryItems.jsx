import { useDispatch } from "react-redux";
import { ITEMS_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const CategoryItems = ({ list }) => {
  // console.log(list)
  const dispatch = useDispatch();
  const handleAddItem = (ele) => {
    dispatch(addItem(ele));
  };
  return (
    <div className="mb-2">
      {list.map((ele) => (
        <div
          key={ele.card.info.id}
          className="flex flex-row align-middle mb-2 border-b-2 pt-2 pb-8 px-2 justify-between overflow-hidden"
        >
          <div className="flex flex-col w-8/12">
            <h1 className="font-semibold">{ele.card.info.name}</h1>
            <h3>₹ {ele.card.info.price / 100}</h3>
            <p className="mt-2 text-sm text-gray-400">
              {ele.card.info.description}
            </p>
          </div>
          <div className="w-2/12 relative z-10">
            {ele.card.info.imageId !== undefined && (
              <img
                className="rounded-2xl object-cover h-[110px] w-40 -z-10"
                src={`${ITEMS_URL}${ele.card.info.imageId}`}
                alt=""
              />
            )}
            <button
              className="absolute top-[85%] left-[19%] bg-white z-50 px-6 py-[1px] border-[1px] border-gray-500 font-semibold text-green-600 rounded-md"
              onClick={() => handleAddItem(ele)}
            >
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryItems;

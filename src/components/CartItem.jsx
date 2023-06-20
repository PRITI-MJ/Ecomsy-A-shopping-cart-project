
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div >

      <div className="flex flex-row justify-around">

        <div >
          <img className="w-[100px]" src={item.image} />
        </div>
        <div>
          <h1 className="font-bold text-sm  ml-[40px] w-40">{item.title}</h1>
          <h1 className="text-gray-700 font-semibold text-sm text-left truncate w-40 mt-5 ml-[40px] ">{item.description}</h1>
          <div className="flex flex-row space-between gap-10  mt-5  ml-[40px]">
            <p className="text-green-600 font-semibold">${item.price}</p>
            <div className="bg-red-500"
            onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div>
            
          </div>
          <hr className="h-px my-10 bg-gray-200 border-0 dark:bg-gray-700"/>
        </div>


      </div>

    </div>
  );
};

export default CartItem;

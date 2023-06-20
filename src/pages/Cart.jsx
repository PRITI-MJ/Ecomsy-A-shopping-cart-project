import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (<div className="flex flex-row  justify-center items-center gap-20">


      <div className="flex flex-col items-center justify-between 
    gap-20 p-4 mt-10 ml-5 rounded-xl ">

        {
          cart.map( (item,index) => {
            return <CartItem className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1"
            
            key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div>

        <div className="text-left">
          <div className="font-bold text-green-600 ">Your Cart</div>
          <div className="font-bold text-3xl text-green-600 mt-[20px] ">Summary</div>
          <p className="mt-[500px]">
            <span className="font-bold ">Total Items: <p className="text-green-600">{cart.length}</p></span>
          </p>
        </div>

        <div>
          <p className="font-bold">Total Amount: <p className="text-green-600">${totalAmount}</p></p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded bottom-0">
            CheckOut Now
          </button>
        </div>

      </div>



    </div>) : 
    (<div className="flex flex-col justify-center items-center h-screen ">
      <h1 className="font-bold mb-40px">Your Cart is Empty !</h1>
      <Link to={"/"}>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;

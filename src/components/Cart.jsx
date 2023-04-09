import React from "react";
import { useLoaderData } from "react-router-dom";
import CartItem from "./Cards/CartItem";

const Cart = () => {
  const { cartArray } = useLoaderData();
  // console.log(cartArray);
  let total = 0;
  if (cartArray.length > 0) {
    for (const product of cartArray) {
      total += product.price * product.quantity;
    }
  }
  return (
    <div className=" flex min-h-screen items-start justify-center bg-gray-100 text-gray-900">
      <div className="mx-auto flex flex-col max-w-3xl p-6 space-y-4 sm:p-10">
        <h2 className="text-xl font-semibold ">
          {cartArray.length ? "Review Cart Items" : "Cart Is Empty"}
        </h2>

          <ul className="flex flex-col divide-y divide-gray-700">
            {cartArray.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </ul>
          <div className="space-y-1 text-right">
            <p>
              Total Amount: <span className="font-semibold">${total}</span>
            </p>
            <p className="text-sm text-gray-400">
              Not including taxes and shipping costs
            </p>
          </div>
          <div className="flex justify-end space-x-4">
            <button className="btn-outline">
            </button>
            <button className="btn-primary">

            </button>

          </div>
        
      </div>
    </div>
  );
};

export default Cart;

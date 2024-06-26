"use client"
import React from "react";

interface ProductProps {
  product: Product;
}


export default function Product({ product }) {
  return (
    <div className=" border rounded-lg p-4 shadow-md">
      <h2 className=" text-lg font-semibold">{product.title}</h2>
      <p className=" text-gray-400">${product.price.toFixed(2)}</p>
      <button
        onClick={() => {}}
        disabled={false}
        className=" mt-2 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        {true ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
}

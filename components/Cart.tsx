"use client"
import React from "react";

export default function Cart() {
  return (
    <div className=" border rounded-lg p-4 shadow-md">
      <h2 className=" text-lg font-semibold mb-4 text-center">Your Cart</h2>
      <ul>
        <li className=" flex justify-between items-center mb-2">
          <div>
            <p className=" font-semibold">Product</p>
            <p className=" to-gray-400">$23.09 x 4</p>
          </div>
          <div className=" flex space-x-2">
            <button
              onClick={() => {}}
              className=" px-2 py-1 bg-red-500 text-white hover:bg-red-600 w-8 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              -
            </button>
            <button
              onClick={() => {}}
              className=" px-2 py-1 bg-blue-500 text-white hover:bg-blue-600 w-8 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              +
            </button>
          </div>
        </li>
        <li className=" flex justify-between items-center mb-2">
          <div>
            <p className=" font-semibold">Product</p>
            <p className=" to-gray-400">$23.09 x 4</p>
          </div>
          <div className=" flex space-x-2">
            <button
              onClick={() => {}}
              className=" px-2 py-1 bg-red-500 text-white hover:bg-red-600 w-8 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              -
            </button>
            <button
              onClick={() => {}}
              className=" px-2 py-1 bg-blue-500 text-white hover:bg-blue-600 w-8 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              +
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

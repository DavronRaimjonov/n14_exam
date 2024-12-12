import React from "react";
import Navbar from "../navbar";
import { useSelector } from "react-redux";
import Card from "./card";
import { Button, Empty } from "antd";

const ShopComponent = () => {
  const { data } = useSelector((state) => state.shopSlice);
  const totalPrice =
    data.reduce((acc, value) => (acc += value.userPrice), 0) || 0;
  return (
    <section className="w-[90%] m-auto">
      <Navbar />

      {data.length ? (
        <>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-16 py-3">
                    <span className="sr-only">Image</span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Qty
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((value) => (
                  <Card key={value.id} {...value} />
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center gap-10 mt-8">
            <div className="flex items-center gap-20 bg-[#f9f9f9] py-2 px-5 rounded-lg">
              <h3>Subtotal </h3>
              <h4>{totalPrice.toFixed(2)}</h4>
            </div>
            <Button className="w-[100px]" type="primary">
              Pay
            </Button>
          </div>
        </>
      ) : (
        <Empty />
      )}
    </section>
  );
};

export default ShopComponent;

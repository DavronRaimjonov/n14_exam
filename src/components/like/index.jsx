import React from "react";
import Navbar from "../navbar";
import { useSelector } from "react-redux";
import Card from "../home/card";

const LikeComponent = () => {
  const { like } = useSelector((state) => state.shopSlice);
  return (
    <section className="w-[90%] m-auto">
      <Navbar />
      <div className="grid grid-cols-4 gap-5 mt-5">
        {like.map((value) => (
          <Card {...value} />
        ))}
      </div>
    </section>
  );
};

export default LikeComponent;

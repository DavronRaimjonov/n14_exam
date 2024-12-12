import React from "react";
import Navbar from "../navbar";
import { useAxios } from "../../hooks/useAxios";
import Card from "./card";

const HomeComponent = () => {
  const { data, loading, error } = useAxios({ url: "newProducts" });
  return (
    <div className="w-[90%] m-auto">
      <Navbar />
      <div className="mt-10 grid grid-cols-4 gap-10">
        {data.map((value) => (
          <Card key={value.id} {...value} />
        ))}
      </div>
    </div>
  );
};

export default HomeComponent;

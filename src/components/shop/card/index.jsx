import { DeleteFilled } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { decrement, deleteData, increment } from "../../../redux/shop-slice";

const Card = ({ name, userPrice, preview, counter, id }) => {
  const dispatch = useDispatch();
  return (
    <tr className="bg-white border-b">
      <td className="p-4">
        <img
          src={preview.images[0]}
          className="w-16 md:w-32 max-w-full max-h-full"
          alt="Apple Watch"
        />
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 ">{name}</td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-5">
          <Button
            onClick={() => dispatch(increment(id))}
            className="rounded-full w-[30px] h-[30px]"
          >
            +
          </Button>
          <span className="text-[20px]">{counter}</span>
          <Button
            onClick={() => dispatch(decrement(id))}
            className="rounded-full w-[30px] h-[30px]"
          >
            -
          </Button>
        </div>
      </td>
      <td className="px-6 py-4 font-semibold text-gray-90">
        ${userPrice.toFixed(2)}
      </td>
      <td className="px-6 py-4">
        <Button
          onClick={() => dispatch(deleteData(id))}
          icon={<DeleteFilled />}
          className="font-medium text-red-600 hover:!text-red-600 hover:!border-[red]"
        >
          Remove
        </Button>
      </td>
    </tr>
  );
};

export default Card;

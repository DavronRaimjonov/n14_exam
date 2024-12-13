import {
  HeartFilled,
  HeartOutlined,
  ShoppingOutlined,
  StarFilled,
} from "@ant-design/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addLikeData,
  deleteLikeData,
  getData,
} from "../../../redux/shop-slice";
import { Button } from "antd";

const Card = (props) => {
  const { name, price, rating, preview, id } = props;
  const dispatch = useDispatch();
  const { like } = useSelector((state) => state.shopSlice);
  const likeData = like.filter((value) => value.id == id)[0];
  const isLiked = Boolean(likeData);
  return (
    <div className="shadow-[-2px_2px_20px_-1px_rgba(113,113,113,0.2)] p-5 max-h-[450px] flex flex-col justify-between rounded-lg cursor-pointer group">
      <div className="border-b border-[#4444447c] relative">
        <img className="h-[250px]" src={preview.images[0]} alt="" />
        {!isLiked ? (
          <HeartOutlined
            onClick={() => dispatch(addLikeData(props))}
            className="text-[20px] absolute top-0 text-[#063A88] hidden group-hover:block"
          />
        ) : (
          <HeartFilled
            onClick={() => dispatch(deleteLikeData(id))}
            className="text-[red] text-[20px] absolute top-0 "
          />
        )}
      </div>

      <h3 className="pt-5">{name}</h3>
      <div>
        <h3 className="pt-2">${price}</h3>
        <div className="flex items-center justify-between pt-5">
          <Button onClick={() => dispatch(getData(props))}>
            <ShoppingOutlined className="text-[20px] cursor-pointer" />
          </Button>
          <div className="flex items-center gap-1">
            <StarFilled className="text-[20px] text-[#063A88]" />
            <p className="text-[17px]"> {rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { navbar_links } from "../../utils";
import {
  HeartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Badge, Button } from "antd";
import { useSelector } from "react-redux";
const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { data } = useSelector((state) => state.shopSlice);
  return (
    <header className="flex items-center justify-between py-5">
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>

      <nav className="flex gap-6">
        {navbar_links.map((value) => (
          <h3
            className={`text-[18px] cursor-pointer ${
              pathname === value.path && "text-[#f45e0c]"
            }`}
            key={value.id}
            onClick={() => navigate(value.path)}
          >
            {value.title}
          </h3>
        ))}
      </nav>
      <nav className="flex items-center gap-4 ">
        <Button onClick={() => navigate("/like")} className="cursor-pointer">
          <HeartOutlined className="text-[20px]" />
        </Button>
        <Badge count={data.length}>
          <Button onClick={() => navigate("/shop")} className="cursor-pointer">
            <ShoppingOutlined className="text-[20px]" />
          </Button>
        </Badge>

        <Button className="cursor-pointer">
          <UserOutlined className="text-[20px]" />
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;

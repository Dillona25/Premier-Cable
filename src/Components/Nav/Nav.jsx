import { useState } from "react";
import "../../App.css";
import NavDropDown from "./NavDropDown";
import Dropdown from "../../assets/Dropdown.svg";

const Nav = () => {
  const [dropDown, setDropDown] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const handleButtonClick = () => {
    setIsRotated(!isRotated);
  };

  const handleOpenDropDown = () => {
    setDropDown(!dropDown);
    handleButtonClick();
  };

  return (
    <>
      <div className="nav flex justify-between mt-[20px] pb-[10px] border-b-[1px] border-black">
        <h1 className="font-[Poppins] text-[25px] ml-[20px]">
          Premier Cable Services
        </h1>
        <button
          onClick={handleOpenDropDown}
          className={`bg-Menu h-[32px] w-[32px] mr-[20px] rotate ${
            isRotated ? "active" : ""
          }`}
        ></button>
      </div>
      {dropDown === false && <NavDropDown />}
    </>
  );
};

export default Nav;

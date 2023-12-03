import { useState } from "react";
import "../../App.css";
import NavDropDown from "./NavDropDown";
import Dropdown from "../../assets/Dropdown.svg";

const Nav = () => {
  const [dropDown, setDropDown] = useState(true);
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
      <div className="nav flex justify-between pb-[10px] bg-[#f7f6f6] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
        <h1 className="font-[Poppins] text-[20px] mt-[20px] mb-[10px] ml-[20px]">
          Premier Cable Services
        </h1>
        <button
          onClick={handleOpenDropDown}
          className={`bg-Menu h-[32px] w-[32px] mr-[20px] mt-[20px] mb-[10px] rotate ${
            isRotated ? "active" : ""
          }`}
        ></button>
      </div>
      {dropDown === false && <NavDropDown />}
    </>
  );
};

export default Nav;

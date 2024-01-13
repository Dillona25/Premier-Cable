import { useState } from "react";
import "../../src/App.css";
import NavDropDown from "./NavDropDown";

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
        <h1 className="font-[Poppins] text-[20px] text-black mt-[20px] mb-[10px] ml-[20px]">
          Premier Cable Services
        </h1>
        <ul className="hidden md:flex gap-[50px] mr-[20px] mt-[10px]">
          <div className="self-center cursor-pointer hover:opacity-75 hover:border-b-[1px] hover:border-b-black">
            <li className="text-black font-[Poppins] text-[18px]">
              Our Services
            </li>
          </div>
          <div className="self-center cursor-pointer hover:opacity-75 hover:border-b-[1px] hover:border-b-black">
            <li className="text-black font-[Poppins] text-[18px]">
              Testimonials
            </li>
          </div>
          <div className="self-center cursor-pointer hover:opacity-75 hover:border-b-[1px] hover:border-b-black">
            <li className="text-black font-[Poppins] text-[18px]">Contact</li>
          </div>
          <div className="self-center cursor-pointer hover:opacity-75 hover:border-b-[1px] hover:border-b-black">
            <li className="text-black font-[Poppins] text-[18px]">
              Our Portfolio
            </li>
          </div>
        </ul>
        <button
          onClick={handleOpenDropDown}
          className={`bg-Menu h-[32px] w-[32px] mr-[20px] mt-[20px] mb-[10px] md:hidden rotate ${
            isRotated ? "active" : ""
          }`}
        ></button>
      </div>
      {dropDown === false && <NavDropDown />}
    </>
  );
};

export default Nav;

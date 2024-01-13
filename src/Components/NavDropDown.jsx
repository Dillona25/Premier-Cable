import { Link } from "react-router-dom";

const NavDropDown = () => {
  return (
    <>
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col bg-[#98c1ff]  w-[100%] z-2 position: absolute"
      >
        <div className="flex gap-[5px] p-[10px] border-black border-b-[1px]">
          <button className="font-[Poppins] text-start text-black">
            &#10137; Our Services
          </button>
        </div>
        <div className="flex gap-[5px] p-[10px] border-black border-b-[1px]">
          <button className="font-[Poppins] text-start text-black">
            &#10137; Client Reviews
          </button>
        </div>
        <div className="flex gap-[5px] p-[10px] border-black border-b-[1px]">
          <Link to="/About" className="font-[Poppins] text-start text-black">
            &#10137; About Us
          </Link>
        </div>
        <div className="flex gap-[5px] p-[10px] border-black border-b-[1px]">
          <Link to="/About" className="font-[Poppins] text-start text-black">
            &#10137; Contact
          </Link>
        </div>
        <div className="flex gap-[5px] p-[10px] border-black border-b-[1px]">
          <Link to="/About" className="font-[Poppins] text-start text-black">
            &#10137; Portfolio
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavDropDown;

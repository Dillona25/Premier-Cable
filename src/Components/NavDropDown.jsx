const NavDropDown = () => {
  return (
    <>
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col bg-[#98c1ff]  w-[100%] z-2 position: absolute"
      >
        <div className="flex gap-[5px] p-[10px] border-black border-b-[1px]">
          <button>&#10137;</button>
          <button className="font-[Poppins] text-start">Services</button>
        </div>
        <div className="flex gap-[5px] p-[10px] border-black border-b-[1px]">
          <button>&#10137;</button>
          <button className="font-[Poppins] text-start">Our Work</button>
        </div>
        <div className="flex gap-[5px] p-[10px] border-black border-b-[1px]">
          <button>&#10137;</button>
          <button className="font-[Poppins] text-start">Client reviews</button>
        </div>
        <div className="flex gap-[5px] p-[10px] border-black border-b-[1px]">
          <button>&#10137;</button>
          <button className="font-[Poppins] text-start">About us</button>
        </div>
        <div className="flex gap-[5px] p-[10px] border-black border-b-[1px]">
          <button>&#10137;</button>
          <button className="font-[Poppins] text-start">Contact</button>
        </div>
      </div>
    </>
  );
};

export default NavDropDown;

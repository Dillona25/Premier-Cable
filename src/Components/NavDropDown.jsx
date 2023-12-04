const NavDropDown = () => {
  return (
    <>
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col bg-[#98c1ff]  w-[100%] z-2 position: absolute"
      >
        <div className="flex gap-[5px] p-[10px] border-black border-b-[1px]">
          <button className="font-[Poppins] text-start text-black">
            &#10137; Services
          </button>
        </div>
        <div className="flex gap-[5px] p-[10px] border-black border-b-[1px]">
          <button className="font-[Poppins] text-start text-black">
            &#10137; Our Work
          </button>
        </div>
        <div className="flex gap-[5px] p-[10px] border-black border-b-[1px]">
          <button className="font-[Poppins] text-start text-black">
            &#10137;Client reviews
          </button>
        </div>
        <div className="flex gap-[5px] p-[10px] border-black border-b-[1px]">
          <button className="font-[Poppins] text-start text-black">
            &#10137; About us
          </button>
        </div>
      </div>
    </>
  );
};

export default NavDropDown;

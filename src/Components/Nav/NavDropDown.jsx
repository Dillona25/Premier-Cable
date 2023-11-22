const NavDropDown = () => {
  return (
    <>
      <div className="flex flex-col bg-[#98c1ff] w-[100%]">
        <button className="font-[Poppins] p-[10px] border-black border-b-[1px]">
          Services
        </button>
        <button className="font-[Poppins] p-[10px] border-black border-b-[1px]">
          Our Work
        </button>
        <button className="font-[Poppins] p-[10px] border-black border-b-[1px]">
          About us
        </button>
        <button className="font-[Poppins] p-[10px] border-black border-b-[1px]">
          Contact
        </button>
      </div>
    </>
  );
};

export default NavDropDown;

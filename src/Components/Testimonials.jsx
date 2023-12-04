const Testimonials = () => {
  return (
    <div className="flex flex-col gap-[20px] mt-[50px] mb-[200px] mx-[30px]">
      <h1 className="font-[Poppins] text-[30px] font-semibold text-[#757575] text-center">
        What our clients have said
      </h1>
      <p className="font-[Poppins] text-[12px] text-[#757575] text-center">
        Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
        elementum tempus hac tellus libero accumsan.
      </p>
      <div>
        <button className="bg-black rounded-[50%] h-[40px] w-[40px] text-white position: absolute right-2">
          &#10148;
        </button>
        <button className="rotate-180 bg-black rounded-[50%] ro h-[40px] w-[40px] text-white position: absolute left-2">
          &#10148;
        </button>
        <div className="flex flex-col w-[100%] h-fit border-[1px] border-[#757575] border-opacity-50 p-[10px] rounded-[20px]">
          <h1 className="font-[Poppins] text-[14px] font-semibold text-[#757575] text-center">
            John Doe
          </h1>
          <h2 className="font-[Poppins] text-[14px] font-semibold text-[#757575] text-center">
            Owner and Operator Consolidated LLC
          </h2>
          <p className="font-[Poppins] text-[12px] text-[#757575] text-center mt-[10px]">
            "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
            elementum tempus hac tellus libero accumsan. Lorem ipsum dolor sit
            amet consectetur adipiscing elit semper dalar elementum tempus hac
            tellus libero accumsan."
          </p>
        </div>
      </div>
      <button className="bg-[#98c1ff] px-[20px] py-[10px] rounded-[20px] font-[Poppins] text-black">
        Our Portfolio
      </button>
    </div>
  );
};

export default Testimonials;

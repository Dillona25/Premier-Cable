const Services = () => {
  return (
    <div className="bg-[#757575]">
      <div className="flex flex-col items-center gap-[20px] mx-[30px]">
        <h1 className="font-[Poppins] text-[30px] mt-[50px] font-semibold text-white text-center">
          Browse our services
        </h1>
        <p className="font-[Poppins] text-[12px] text-white text-center">
          Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
          elementum tempus hac tellus libero accumsan.
        </p>

        {/* card one */}
        <div className="flex flex-col gap-[10px] items-center w-[90%] h-fit p-[10px] bg-white rounded-[20px]">
          <div className="w-[100%] h-[200px] rounded-[20px] bg-gray-400"></div>
          <h1 className="font-[Poppins] text-[15px] font-semibold text-black text-center">
            FiberOptic splicing
          </h1>
          <p className="font-[Poppins] text-[12px] text-black text-center">
            Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
            elementum tempus hac tellus libero accumsan.
          </p>
          <button className="bg-[#98c1ff] px-[15px] py-[5px] rounded-[20px] font-[Poppins] text-[12px] text-black">
            Learn more
          </button>
        </div>

        {/* card two*/}
        <div className="flex flex-col gap-[10px] items-center w-[90%] h-fit p-[10px] bg-white rounded-[20px]">
          <div className="w-[100%] h-[200px] rounded-[20px] bg-gray-400"></div>
          <h1 className="font-[Poppins] text-[15px] font-semibold text-black text-center">
            FiberOptic splicing
          </h1>
          <p className="font-[Poppins] text-[12px] text-black text-center">
            Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
            elementum tempus hac tellus libero accumsan.
          </p>
          <button className="bg-[#98c1ff] px-[15px] py-[5px] rounded-[20px] font-[Poppins] text-[12px] text-black">
            Learn more
          </button>
        </div>

        {/* card three */}
        <div className="flex flex-col gap-[10px] items-center w-[90%] h-fit p-[10px] bg-white rounded-[20px] mb-[50px]">
          <div className="w-[100%] h-[200px] rounded-[20px] bg-gray-400"></div>
          <h1 className="font-[Poppins] text-[15px] font-semibold text-black text-center">
            FiberOptic splicing
          </h1>
          <p className="font-[Poppins] text-[12px] text-black text-center">
            Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
            elementum tempus hac tellus libero accumsan.
          </p>
          <button className="bg-[#98c1ff] px-[15px] py-[5px] rounded-[20px] font-[Poppins] text-[12px] text-black">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;

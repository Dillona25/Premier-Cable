const Testimonials = () => {
  return (
    <div className="flex flex-col gap-[20px] mt-[50px] mb-[50px] mx-[30px]">
      <h1 className="font-[Poppins] text-[25px] font-semibold text-[#757575] text-center border-black border-b-[1px] md:text-[40px] md:max-w-fit md:mx-auto">
        What our clients have said
      </h1>
      <p className="font-[Poppins] text-[12px] text-[#757575] text-center md:text-[15px] md:max-w-[600px] md:mx-auto">
        We take our work very seriously. Dont just take our portoflio into
        consideration, see what our clients have said.
      </p>
      <div className="md:flex md:flex-row md:justify-center md:gap-[20px] md:mt-[20px]">
        <div className="md:w-[350px]">
          <button className="bg-black rounded-[50%] h-[40px] w-[40px] text-white position: absolute right-2 md:hidden">
            &#10148;
          </button>
          <button className="rotate-180 bg-black rounded-[50%] ro h-[40px] w-[40px] text-white position: absolute left-2 md:hidden">
            &#10148;
          </button>
          <div className="flex flex-col w-[100%] h-fit border-[1px] border-[#757575] border-opacity-50 p-[10px] rounded-[20px]">
            <h1 className="font-[Poppins] text-[14px] font-semibold text-[#757575] text-center md:text-[16px]">
              John Doe
            </h1>
            <h2 className="font-[Poppins] text-[14px] font-semibold text-[#757575] text-center md:text-[16px]">
              Owner and Operator Consolidated LLC
            </h2>
            <p className="font-[Poppins] text-[12px] text-[#757575] text-center mt-[10px] md-text-[14px]">
              "Lorem ipsum dolor sit amet consectetur adipiscing elit semper
              dalar elementum tempus hac tellus libero accumsan. Lorem ipsum
              dolor sit amet consectetur adipiscing elit semper dalar elementum
              tempus hac tellus libero accumsan."
            </p>
          </div>
        </div>

        <div className="hidden md:block md:w-[350px]">
          <button className="bg-black rounded-[50%] h-[40px] w-[40px] text-white position: absolute right-2 md:hidden">
            &#10148;
          </button>
          <button className="rotate-180 bg-black rounded-[50%] ro h-[40px] w-[40px] text-white position: absolute left-2 md:hidden">
            &#10148;
          </button>
          <div className="flex flex-col w-[100%] h-fit border-[1px] border-[#757575] border-opacity-50 p-[10px] rounded-[20px]">
            <h1 className="font-[Poppins] text-[14px] font-semibold text-[#757575] text-center md:text-[16px]">
              John Doe
            </h1>
            <h2 className="font-[Poppins] text-[14px] font-semibold text-[#757575] text-center md:text-[16px]">
              Owner and Operator Consolidated LLC
            </h2>
            <p className="font-[Poppins] text-[12px] text-[#757575] text-center mt-[10px] md-text-[14px]">
              "Lorem ipsum dolor sit amet consectetur adipiscing elit semper
              dalar elementum tempus hac tellus libero accumsan. Lorem ipsum
              dolor sit amet consectetur adipiscing elit semper dalar elementum
              tempus hac tellus libero accumsan."
            </p>
          </div>
        </div>

        <div className="hidden md:block md:w-[350px]">
          <button className="bg-black rounded-[50%] h-[40px] w-[40px] text-white position: absolute right-2 md:hidden">
            &#10148;
          </button>
          <button className="rotate-180 bg-black rounded-[50%] ro h-[40px] w-[40px] text-white position: absolute left-2 md:hidden">
            &#10148;
          </button>
          <div className="flex flex-col w-[100%] h-fit border-[1px] border-[#757575] border-opacity-50 p-[10px] rounded-[20px]">
            <h1 className="font-[Poppins] text-[14px] font-semibold text-[#757575] text-center md:text-[16px]">
              John Doe
            </h1>
            <h2 className="font-[Poppins] text-[14px] font-semibold text-[#757575] text-center md:text-[16px]">
              Owner and Operator Consolidated LLC
            </h2>
            <p className="font-[Poppins] text-[12px] text-[#757575] text-center mt-[10px] md-text-[14px]">
              "Lorem ipsum dolor sit amet consectetur adipiscing elit semper
              dalar elementum tempus hac tellus libero accumsan. Lorem ipsum
              dolor sit amet consectetur adipiscing elit semper dalar elementum
              tempus hac tellus libero accumsan."
            </p>
          </div>
        </div>
      </div>
      <button className="bg-[#98c1ff] px-[20px] py-[10px] rounded-[20px] font-[Poppins] text-black md:w-[200px] md:mx-auto md:mt-[20px]">
        Our work
      </button>
    </div>
  );
};

export default Testimonials;

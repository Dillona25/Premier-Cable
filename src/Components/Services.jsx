import splice from "../images/splicing2.png";
import testing from "../images/OTDR.jpeg";
import ftth from "../images/FTTH.jpeg";

const Services = () => {
  return (
    <div className="bg-[#757575]">
      <h1 className="font-[Poppins] text-[40px] pt-[50px] font-semibold text-white text-center w-full">
        Our services
      </h1>
      <p className="font-[Poppins] text-[12px] text-white text-center pb-[40px] mx-[30px] md:text-[15px] md:max-w-[600px] md:mx-auto">
        Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
        elementum tempus hac tellus libero accumsan.
      </p>
      <div className="flex flex-col items-center gap-[20px] mx-[30px] md:flex-row pb-[100px]">
        {/* card one */}
        <div className="flex flex-col gap-[10px] items-center w-[90%] h-fit p-[10px] bg-white rounded-[20px]">
          <img
            src={splice}
            alt="fiberoptic splicing image"
            className="w-[100%] h-[200px] rounded-[20px] bg-gray-400 md:h-[300px]"
          ></img>
          <h1 className="font-[Poppins] text-[15px] font-semibold text-black text-center md:text-[20px]">
            FiberOptic splicing
          </h1>
          <p className="font-[Poppins] text-[12px] text-black text-center">
            Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
            elementum tempus hac tellus libero accumsan.
          </p>
          <button className="bg-[#98c1ff] px-[15px] py-[5px] rounded-[20px] font-[Poppins] text-[12px] text-black md:px-[20px] md:py-[10px]">
            Learn more
          </button>
        </div>

        {/* card two*/}
        <div className="flex flex-col gap-[10px] items-center w-[90%] h-fit p-[10px] bg-white rounded-[20px]">
          <img
            src={testing}
            alt="fiberoptic testing image"
            className="w-[100%] h-[200px] rounded-[20px] bg-gray-400 md:h-[300px]"
          ></img>
          <h1 className="font-[Poppins] text-[15px] font-semibold text-black text-center md:text-[20px]">
            FiberOptic OTDR Testing
          </h1>
          <p className="font-[Poppins] text-[12px] text-black text-center">
            Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
            elementum tempus hac tellus libero accumsan.
          </p>
          <button className="bg-[#98c1ff] px-[15px] py-[5px] rounded-[20px] font-[Poppins] text-[12px] text-black md:px-[20px] md:py-[10px]">
            Learn more
          </button>
        </div>

        {/* card three */}
        <div className="flex flex-col gap-[10px] items-center w-[90%] h-fit p-[10px] bg-white rounded-[20px]">
          <img
            src={ftth}
            alt="Fiber to the home image"
            className="w-[100%] h-fit rounded-[20px] bg-gray-400 md:h-[300px]"
          ></img>
          <h1 className="font-[Poppins] text-[15px] font-semibold text-black text-center md:text-[20px]">
            Fiber To The Home needs
          </h1>
          <p className="font-[Poppins] text-[12px] text-black text-center">
            Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
            elementum tempus hac tellus libero accumsan.
          </p>
          <button className="bg-[#98c1ff] px-[15px] py-[5px] rounded-[20px] font-[Poppins] text-[12px] text-black md:px-[20px] md:py-[10px]">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;

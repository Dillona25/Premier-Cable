import splice from "../images/Splice.jpeg";
import otdr from "../images/OTDR.jpeg";

const Hero = () => {
  return (
    <div className="mx-[30px] my-[50px]">
      <div className="flex flex-col gap-[20px]">
        <h1 className="font-[Poppins] font-semibold text-[40px] text-[#757575] text-center md:text-[45px] md:max-w-[700px] md:mx-auto md:leading-[50px]">
          Premier Cable Services
        </h1>
        <p className="font-[Poppins] text-[12px] text-[#757575] text-center md:max-w-[500px] md:mx-auto md:text-[15px]">
          Premier Cable Services: We are committed to providing reliable,
          precise, and personalized fiberoptic services that seamlessly connect
          communities, businesses, and individuals.
        </p>
      </div>
      <div className="flex gap-[20px] justify-center mt-[20px]">
        <button className="bg-[#98c1ff] px-[20px] py-[10px] rounded-[20px] text-[Poppins] text-black">
          About us &#10148;
        </button>
        <button className="px-[20px] py-[10px] rounded-[20px] font-[Poppins] text-black border-black border-[1px]">
          Contact us
        </button>
      </div>
      <div className="md:flex md:gap-[10px] md:justify-center">
        <img
          src={splice}
          className="w-fit h-fit md:h-[400px] bg-[#c0c0c0] rounded-[20px] mt-[20px] shadow-[rgba(0,_0,_0,_0.80)_0px_3px_8px] md:mx-auto"
        ></img>
        <img
          src={otdr}
          className="hidden md:block w-fit h-[400px] bg-[#c0c0c0] rounded-[20px] mt-[20px] shadow-[rgba(0,_0,_0,_0.80)_0px_3px_8px] md:mx-auto"
        ></img>
      </div>
    </div>
  );
};

export default Hero;

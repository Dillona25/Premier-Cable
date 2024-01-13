import splice from "../../images/Splice.jpeg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Hero = () => {
  return (
    <div className="mx-[30px] my-[100px] md:flex md:justify-center md:gap-[100px] md:items-center">
      <div className="flex flex-col gap-[20px] md:gap-[50px]">
        <h1 className="hidden md:block font-[Poppins] font-semibold text-[40px] text-center text-[#757575] md:text-[75px] md:max-w-[700px] md:leading-[50px] md:text-left">
          Welcome
        </h1>
        <span className="hidden md:block font-[Poppins] font-semibold text-[40px] text-center text-[#757575] mt-[-40px] md:text-[40px] md:max-w-[700px] md:leading-[50px] md:text-left">
          We are Premier Cable Services
        </span>
        <span className="block md:hidden font-[Poppins] font-semibold text-[40px] text-center text-[#757575] mt-[-20px] md:text-[35px] md:max-w-[700px] md:leading-[50px] md:text-left">
          Premier Cable Services
        </span>
        <p className="font-[Poppins] text-[12px] text-center text-[#757575] md:max-w-[500px] md:text-[15px] md:text-left">
          Premier Cable Services: Serving anywhere in the Midwest, we are
          committed to providing reliable, precise, and personalized fiberoptic
          services that seamlessly connect communities, businesses, and
          individuals. We offer many services such as fiberoptic splicing,
          auditing, OTDR tracing, and FTTH servcies.
        </p>
        <div className="flex gap-[20px] mx-auto md:mx-0">
          <Link
            to="/about"
            className="bg-[#98c1ff] px-[20px] py-[10px] text-center rounded-[20px] text-[Poppins] text-black md:w-[200px]"
          >
            About us &#10148;
          </Link>
          <Link
            to="/contact"
            className="px-[20px] py-[10px] rounded-[20px] font-[Poppins] text-black text-center border-black border-[1px] md:w-[200px]"
          >
            Contact us
          </Link>
        </div>
      </div>
      <div className="md:flex md:gap-[10px] md:justify-center">
        <img
          src={splice}
          className="w-fit h-fit md:h-[400px] bg-[#c0c0c0] rounded-[20px] mt-[20px] shadow-[rgba(0,_0,_0,_0.80)_0px_3px_8px] "
        ></img>
      </div>
    </div>
  );
};

export default Hero;

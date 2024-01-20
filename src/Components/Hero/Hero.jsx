import splice from "../../images/Splice.jpeg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Hero = () => {
  return (
    <div className="mx-[30px] my-[100px] md:flex md:justify-center md:gap-[100px] md:items-center">
      <div className="flex flex-col gap-[10px] md:gap-[20px] text-[#757575] font-[Poppins]">
        <h1 className="text-[80px] font-bold">Premier Cable</h1>
        <span className="text-[80px] mt-[-50px] text-[#8cb8f9] font-bold">
          Services
        </span>
        <p className="md:max-w-[500px] md:text-[15px] md:text-left">
          Premier Cable Services: Serving anywhere in the Midwest, we are
          committed to providing reliable, precise, and personalized fiberoptic
          services that seamlessly connect communities, businesses, and
          individuals. We offer many services such as fiberoptic splicing,
          auditing, OTDR tracing, and FTTH servcies.
        </p>
        <div className="flex gap-[20px] mt-[20px] mx-auto md:mx-0">
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
          alt="image of splicing"
          className="h-[425px] w-fit rounded-[10px]"
        ></img>
      </div>
    </div>
  );
};

export default Hero;

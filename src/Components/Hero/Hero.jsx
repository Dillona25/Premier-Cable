const Hero = () => {
  return (
    <div className="mx-[30px] my-[50px]">
      <div className="flex flex-col gap-[20px]">
        <h1 className="font-[Poppins] font-semibold text-[35px] text-[#757575] text-center">
          A dedicated team here for all your fiber needs
        </h1>
        <p className="font-[Poppins] text-[15px] text-[#757575] text-center">
          Premier Cable Services: We are committed to providing reliable,
          precise, and personalized splicing services that seamlessly connect
          communities, businesses, and individuals.
        </p>
      </div>
      <div className="flex gap-[20px] justify-center mt-[20px]">
        <button className="bg-[#98c1ff] px-[20px] py-[10px] rounded-[20px] text-[Poppins] text-black">
          Get Started &#10148;
        </button>
        <button className="px-[20px] py-[10px] rounded-[20px] text-[Poppins] text-black border-black border-[1px]">
          Contact us
        </button>
      </div>
      <div className="w-[100%] h-[350px] bg-[#c0c0c0] rounded-[20px] mt-[20px]">
        <img></img>
      </div>
    </div>
  );
};

export default Hero;

const Contact = () => {
  return (
    <div className="md:h-[100vh] md:flex md:justify-center md:items-center">
      <div>
        <div className="flex flex-col md:flex-row gap-[50px] md:justify-center font-[Poppins] text-black">
          <div className="flex flex-col md:w-[600px]">
            <h1 className=" text-center md:text-left text-[30px] md:text-[50px] font-bold">
              Lets Connect
            </h1>
            <span className="mx-auto md:m-0 text-center md:text-left text-[12px] md:text-[15px] max-w-[300px] md:max-w-[500px] mt-[20px]">
              Do you have some fiberoptic work that needs done, or simply want
              to connect? We would love to connect and possibly contract for
              you.
            </span>
            <h1 className="text-center text-[30px] md:text-left font-[Poppins] text-black font-bold md:text-[40px] mt-[50px] md:mt-[70px]">
              Our Email
            </h1>
            <span className="text-center text-[12px] md:text-[15px] md:text-left mt-[20px]">
              billarnold@premiercableservices.com
            </span>
            <span className="text-center text-[12px] md:text-[15px] md:text-left mt-[20px]">
              (402)-750-9933
            </span>
            <h1 className="text-center text-[30px] md:text-left font-[Poppins] text-black font-bold md:text-[40px] mt-[50px] md:mt-[70px]">
              Socials
            </h1>
            <span className="text-center text-[12px] md:text-[15px] md:text-left mt-[20px]">
              LinkedIn
            </span>
            <span className="text-center text-[12px] md:text-[15px] md:text-left mt-[20px]">
              Facebook
            </span>
          </div>

          <div className="h-full w-full md:w-fit px-[40px] md:p-0">
            <form className="flex flex-col text-[12px] content-between font-[Poppins] md:w-[600px]">
              <label className="mb-[10px] md:text-[15px]">Your Name</label>
              <input
                placeholder="Your name"
                className="px-[5px] py-[5px] text-[15px] md:py-[15px] md:px-[10px] bg-white border-[1px] border-black rounded-[10px] w-full"
              ></input>
              <label className="mb-[10px] mt-[30px] md:text-[15px]">
                Service you are interested in
              </label>
              <input
                placeholder="Service you are interested in"
                className="px-[5px] py-[5px] text-[15px] md:py-[15px] md:px-[10px] bg-white border-[1px] border-black rounded-[10px] w-full"
              ></input>
              <label className="mb-[10px] mt-[30px] md:text-[15px]">
                Your email
              </label>
              <input
                placeholder="Your Email"
                className="px-[5px] py-[5px] text-[15px] md:py-[15px] md:px-[10px] bg-white border-[1px] border-black rounded-[10px] w-full"
              ></input>
              <label className="mb-[10px] mt-[30px] md:text-[15px]">
                Your message
              </label>
              <textarea
                placeholder="We cant wait to hear from you"
                className="py-[10px] px-[10px] text-[15px] bg-white border-[1px] border-black rounded-[10px] w-full h-[200px]"
              ></textarea>
              <button className="bg-black text-white font-[Poppins] rounded-[10px] py-[10px] w-[50%] mx-auto md:py-[20px] md:w-full mt-[30px] mb-[50px]">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

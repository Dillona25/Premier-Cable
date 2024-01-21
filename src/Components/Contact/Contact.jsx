import BillArnold from "../../images/Bill Arnold.jpeg";

const Contact = () => {
  return (
    <div className="md:h-[100vh] md:flex md:justify-center md:items-center">
      <div>
        <div className="flex flex-col md:flex-row gap-[50px] md:justify-center font-[Poppins] text-black">
          <div className="flex flex-col px-[40px] md:w-[600px] md:px-0">
            <h1 className="mt-[50px] text-center text-[#757575] text-[50px] md:text-[80px] md:mt-0 font-bold">
              Lets Connect
            </h1>
            <img
              src={BillArnold}
              alt="Owner Portrait"
              className=" h-[300px] md:h-[400px] w-fit rounded-[10px] mt-[20px] mx-auto"
            ></img>
            <span className="text-[12px] mt-[10px] text-center">
              William Arnold | Owner and Operator
            </span>
            <p className="text-center mt-[15px] text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
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

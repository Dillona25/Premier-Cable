const Contact = () => {
  return (
    <div className="bg-[#f4f4f4] w-[100%] h-fit p-[15px] mt-[-200px] rounded-[20px] shadow-[5px_5px_0px_0px_rgba(152,193,255)] ">
      <div className="w-[100%] flex flex-col gap-[10px] items-center">
        <h1 className="font-[Poppins] text-[20px] font-semibold text-black">
          Contact us
        </h1>
        <h2 className="font-[Poppins] text-[15px] font-semibold text-black mb-[30px]">
          We want to hear from you!
        </h2>
      </div>
      <form className="flex flex-col gap-[20px] w-[100%]">
        <input
          placeholder="Name"
          className="bg-white rounded-[20px] py-[10px] px-[10px] font-[Poppins]"
        ></input>
        <input
          placeholder="Email"
          className="bg-white rounded-[20px] py-[10px] px-[10px] font-[Poppins]"
        ></input>
        <textarea
          placeholder="Your message"
          className="bg-white rounded-[20px] py-[10px] px-[10px] font-[Poppins]"
        ></textarea>
        <button className="bg-black px-[20px] py-[10px] rounded-[20px] font-[Poppins] text-white">
          Send message
        </button>
        <h1 className="font-[Poppins] text-[20px] font-semibold text-black text-center">
          Other ways to reach us
        </h1>
      </form>
    </div>
  );
};

export default Contact;

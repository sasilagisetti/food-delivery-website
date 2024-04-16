import { useSelector } from "react-redux";

const ContactUs = () => {
  
  return (
    <div>
      <h1 className="text-center font-mono text-2xl my-6 underline font-semibold">
        Contact Us
      </h1>
      <form className="flex flex-col gap-y-3 w-[50%] m-auto">
        <input type="text" className="outline-dashed py-2 px-4" placeholder="Name" />
        <input type="text" className="outline-dashed py-2 px-4" placeholder="Message" />
        <button className="border border-black self-center px-6 py-2 text-lg font-semibold text-white bg-black w-fit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;

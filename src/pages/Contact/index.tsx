import Title from "@/shared/components/Title";
import { IoIosSend } from "react-icons/io";

function Contact() {
  return (
    <section>
      <Title title={"Contact"} />
      <form className="mt-6 space-y-4">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <input
            type="text"
            placeholder="Full name"
            className="w-full py-4 px-5 text-[#fafafa] border border-[#383838] placeholder:text-sm rounded-xl bg-transparent focus:outline-none focus:ring-1 focus:ring-[#ffdb70]"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full py-4 px-5 text-[#fafafa] border border-[#383838] placeholder:text-sm rounded-xl bg-transparent focus:outline-none focus:ring-1 focus:ring-[#ffdb70]"
          />
        </div>
        <textarea
          placeholder="Your message"
          className="w-full py-4 px-5 h-40 resize-none text-[#fafafa] border placeholder:text-sm border-[#383838] rounded-xl bg-transparent focus:outline-none focus:ring-1 focus:ring-[#ffdb70]"
        ></textarea>
        <div className="flex justify-end">
          <button className="flex items-center gap-1 py-3 px-5 text-primary-color  rounded-2xl  bg-[#202022] bg-custom-gradient shadow-custom">
            <IoIosSend className="text-primary-color text-xl" />
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;

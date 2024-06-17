import Title from "@/shared/components/Title";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef } from "react";
import { IoIosSend } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const SERVICE_ID = "service_lvybe2d";
  const TEMPLATE_ID = "template_myqvxph";
  const PUBLIC_KEY = "o7yhguot_66lj3O-F";

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (form.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
        () => {
          toast.success("Your message has been sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (error) => {
          toast.error(
            `There was an error sending your message: ${error.text}`,
            {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            }
          );
        }
      );
    }
  };
  return (
    <section>
      <Title title={"Contact"} />
      <form ref={form} onSubmit={sendEmail} className="mt-6 space-y-4">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <input
            type="text"
            placeholder="Full name"
            name="user_name"
            className="w-full py-4 px-5 text-[#fafafa] border border-[#383838] placeholder:text-sm rounded-xl bg-transparent focus:outline-none focus:ring-1 focus:ring-[#ffdb70]"
          />
          <input
            type="email"
            placeholder="Email address"
            name="user_email"
            className="w-full py-4 px-5 text-[#fafafa] border border-[#383838] placeholder:text-sm rounded-xl bg-transparent focus:outline-none focus:ring-1 focus:ring-[#ffdb70]"
          />
        </div>
        <textarea
          placeholder="Your message"
          name="message"
          className="w-full py-4 px-5 h-40 resize-none text-[#fafafa] border placeholder:text-sm border-[#383838] rounded-xl bg-transparent focus:outline-none focus:ring-1 focus:ring-[#ffdb70]"
        ></textarea>
        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-1 py-3 px-5 text-primary-color  rounded-2xl  bg-[#202022] bg-custom-gradient shadow-custom"
          >
            <IoIosSend className="text-primary-color text-xl" />
            Send Message
          </button>
        </div>
      </form>
      <ToastContainer/>
    </section>
  );
};

export default Contact;

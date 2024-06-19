import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { IoIosSend } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import Title from "@/shared/components/Title";

const Contact: React.FC = () => {
  const SERVICE_ID = "service_lvybe2d";
  const TEMPLATE_ID = "template_myqvxph";
  const PUBLIC_KEY = "o7yhguot_66lj3O-F";

  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object({
    user_name: Yup.string().required("Full name is required"),
    user_email: Yup.string()
      .email("Invalid email address")
      .required("Email address is required"),
    message: Yup.string().required("Message is required"),
  });

  const sendEmail = async (
    values: Record<string, unknown>,
    { resetForm }: { resetForm: () => void }
  ) => {
    setLoading(true);
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, values, PUBLIC_KEY);
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
      resetForm();
    } catch (error: any) {
      toast.error(`There was an error sending your message: ${error.text}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <Title title={"Contact"} />
      <Formik
        initialValues={{ user_name: "", user_email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={sendEmail}
      >
        {({ errors, touched, isSubmitting, values }) => (
          <Form className="mt-6 space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="w-full">
                <Field
                  type="text"
                  placeholder="Full name"
                  name="user_name"
                  className={`w-full py-4 px-5 text-[#fafafa] border placeholder:text-sm rounded-xl bg-transparent focus:outline-none  ${
                    errors.user_name && touched.user_name
                      ? "border-red-500"
                      : "border-[#383838] focus:ring-1 focus:ring-[#ffdb70]"
                  }`}
                />
              </div>
              <div className="w-full">
                <Field
                  type="email"
                  placeholder="Email address"
                  name="user_email"
                  className={`w-full py-4 px-5 text-[#fafafa] border placeholder:text-sm rounded-xl bg-transparent focus:outline-none  ${
                    errors.user_email && touched.user_email
                      ? "border-red-500"
                      : "border-[#383838] focus:ring-1 focus:ring-[#ffdb70]"
                  }`}
                />
              </div>
            </div>
            <div>
              <Field
                as="textarea"
                placeholder="Your message"
                name="message"
                className={`w-full py-4 px-5 h-40 resize-none text-[#fafafa] border placeholder:text-sm rounded-xl bg-transparent focus:outline-none  ${
                  errors.message && touched.message
                    ? "border-red-500"
                    : "border-[#383838] focus:ring-1 focus:ring-[#ffdb70]"
                }`}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className={`flex items-center gap-1 py-3 px-5 text-primary-color rounded-2xl bg-[#202022] bg-custom-gradient shadow-custom ${
                  isSubmitting ||
                  loading ||
                  !values.user_name ||
                  !values.user_email ||
                  !values.message
                    ? "cursor-not-allowed opacity-50"
                    : ""
                }`}
                disabled={
                  isSubmitting ||
                  loading ||
                  !values.user_name ||
                  !values.user_email ||
                  !values.message
                }
              >
                {loading ? (
                  <AiOutlineLoading3Quarters className="text-primary-color text-xl animate-spin" />
                ) : (
                  <IoIosSend className="text-primary-color text-xl" />
                )}
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </section>
  );
};

export default Contact;

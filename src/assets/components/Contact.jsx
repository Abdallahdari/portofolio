import { useState } from "react";
import Lottie from "lottie-react";
import Email from "../../../public/Animation/Animation - 1728923534383.json";
import { motion } from "framer-motion";
import Fadein from "../../variant";
function Contact() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(null);
  const [submit, setSubmit] = useState(false);

  const validateEmail = (value) => {
    // Regular expression for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(value));
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    setSubmit((submit) => !submit);
  };
  return (
    <motion.div
      id="contact"
      variants={Fadein("left", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.15 }}
      className="grid md:grid-cols-2 sm:justify-center items-center gap-12 py-2 border-b"
    >
      <form className="input flex flex-col gap-4">
        <input
          type="email"
          placeholder="example@gmail.com"
          required
          className={`${
            isValidEmail === null
              ? ""
              : isValidEmail
              ? "border border-green-500"
              : "border border-red-500"
          } w-[60%] py-3 px-4 rounded-md outline-none`}
          value={email}
          onChange={handleEmailChange}
        />
        <textarea
          placeholder="Enter your message"
          className="w-[60%] py-3 px-4 rounded-md outline-none"
        ></textarea>
        <button
          onClick={HandleSubmit}
          type="submit"
          to={"abdallahabdirisaaq@gmail.com"}
          disabled={submit}
          className="w-44 text-gray-500 py-3 hover:text-gray-200 transition-all duration-200 rounded-md bg-[#232423]"
        >
          Submit
        </button>
        {submit && <h1>Thnaks for your Massage and am gonna answering you </h1>}
      </form>
      <div className="grow">
        <Lottie animationData={Email} />
      </div>
    </motion.div>
  );
}

export default Contact;

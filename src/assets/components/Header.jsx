import { MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import Lottie from "lottie-react";
import LaptopAn from "../../../public/Animation/Animation - 1728842574290.json";
import { motion } from "framer-motion";
import Fadein from "../../variant";
function Header() {
  return (
    <>
      <section
        id="about"
        className="grid  md:grid-cols-2 gap-4 py-20 mb-10 mt-20 px-4  z-0 border-b border-gray-500"
      >
        <div className="px-4">
          <motion.div
            variants={Fadein("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.15 }}
            className="flex items-center mb-4 z-0 gap-2"
          >
            <img
              src="profile.png"
              className="border-2 border-orange-400 w-20 rounded-full overflow-hidden"
            />
            <MdVerified className="text-blue-700" />
          </motion.div>

          <motion.h1
            variants={Fadein("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.15 }}
            className="text-5xl  font-bold mt-4 "
          >
            Software Engineer and Web Devloper
          </motion.h1>
          <motion.p
            variants={Fadein("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.15 }}
            className="my-7 text-slate-500"
          >
            I am Abdullahi Abdirizak, a Software Engineer and Web Developer
            currently in my fourth year at Üsküdar University. I am also the
            founder of the Dari E-commerce website, where I apply my technical
            skills and business insights to create innovative online shopping
            experiences
          </motion.p>
          <motion.div
            variants={Fadein("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.15 }}
            className="flex items-center gap-4 mb-4 "
          >
            <Link to={"https://github.com/Abdallahdari"}>
              <FaGithub
                size={32}
                className="hover:text-slate-500 transition duration-300"
              />
            </Link>
            <Link
              to={
                "https://www.linkedin.com/in/abdullahi-abdirizak-mohamed-96b5a4253/"
              }
            >
              <CiLinkedin
                size={32}
                className="hover:text-slate-500 transition duration-300"
              />
            </Link>
            <Link to={"https://www.instagram.com/dhere_coder_/"}>
              <FaInstagram
                size={32}
                className="hover:text-slate-500 transition duration-300"
              />
            </Link>
            <Link to={""}>
              <CiFacebook
                size={32}
                className="hover:text-slate-500 transition duration-300"
              />
            </Link>
          </motion.div>
        </div>
        <motion.div
          variants={Fadein("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.15 }}
          className="self-center justify-self-center"
        >
          <Lottie animationData={LaptopAn} />
        </motion.div>
      </section>
    </>
  );
}

export default Header;

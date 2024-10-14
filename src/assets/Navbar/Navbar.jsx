import { Link } from "react-router-dom";
import "./Navbar.css";
import { CiMenuBurger } from "react-icons/ci";
import { motion } from "framer-motion";
import Fadein from "../../variant";
function Navbar({ theme, show, Setshow }) {
  return (
    <motion.div
      variants={Fadein("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.3 }}
      className="z-10"
    >
      <div className="desktop">
        <div className=" flex items-center justify-center ">
          <ul
            className={`${
              theme === "Night" ? "bg-[#292c2e] text-white" : "bg-slate-200"
            } flex items-center  justify-center gap-8  rounded-full py-4 px-9 transition duration-300 `}
          >
            <a
              href="#about"
              className="hover:text-zinc-500 transition duration-200"
            >
              About
            </a>
            <a
              href="#project"
              className="hover:text-zinc-500 transition duration-200"
            >
              Project
            </a>

            <a
              href="#contact"
              className="hover:text-zinc-500 transition duration-200"
            >
              Contact
            </a>
          </ul>
        </div>
      </div>
      <CiMenuBurger
        className={`${
          show === true ? "blur-sm" : ""
        } icon relative left-5 top-4 cursor-pointer transition-all duration-200`}
        onClick={() => Setshow(!show)}
      />
      {show && (
        <div className={`mobile fixed top-0 left-0 right-0 z-50`}>
          <div className="flex absolute items-center justify-center w-full">
            <ul className="flex flex-col w-[250px] bg-slate-900 rounded-md relative mt-12 px-4">
              {/* Your links */}
              <Link
                to="#about"
                className="px-2 py-2 w-max hover:px-4 hover:text-gray-300 transition-all duration-300 ease-in-out"
              >
                About
              </Link>
              <Link
                to="#project"
                className="px-2 py-2 w-max hover:px-4 hover:text-gray-300 transition-all duration-300 ease-in-out"
              >
                Project
              </Link>
              <Link
                to="/contact"
                className="px-2 py-2 w-max hover:px-4 hover:text-gray-300 transition-all duration-300 ease-in-out"
              >
                Contact
              </Link>
              <button
                onClick={() => Setshow(false)}
                className="absolute top-2 text-xl font-semibold right-3 hover:text-red-500 hover:rotate-180 transition-all duration-300"
              >
                x
              </button>
            </ul>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default Navbar;

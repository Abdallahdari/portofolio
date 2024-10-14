import { useState } from "react";
import "./Project.css";
import Data from "../../data";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Fadein from "../../variant";
const Btnitmes = ["All Projects", "Html,Css,Script", "Reacnt and Redux"];

function Poroject() {
  const [active, Setactive] = useState("All Projects");
  const [Arr, SetArry] = useState(Data);
  return (
    <div>
      <motion.h1
        variants={Fadein("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.4 }}
        className="text-4xl font-bold text-center"
      >
        Finished Projects
      </motion.h1>
      <motion.section
        variants={Fadein("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.2 }}
        id="project"
        className="smallpone md:flex sm:items-center md:items-start gap-24 border-b py-12 border-gray-500"
      >
        <div className="left-section   ">
          <ul className="flex flex-col justify-center w-max gap-3 ">
            {Btnitmes.map((btn, i) => (
              <button
                onClick={() => {
                  Setactive(btn);
                  if (btn === "All Projects") {
                    SetArry(Data); // Show all items
                  } else {
                    const Newarry = Data.filter(
                      (item) => item.Catogary === btn
                    );
                    SetArry(Newarry);
                  }
                }}
                className={`${
                  active === btn
                    ? "border text-gray-50 border-slate-200"
                    : "border border-transparent"
                } w-44 text-gray-500 py-3 hover:text-gray-200 transition-all duration-200 rounded-md  bg-[#232423]`}
                key={i}
              >
                {btn}
              </button>
            ))}
          </ul>
        </div>
        <div className="right-section grow">
          <ul className="grid place-items-center md:grid-cols-2 gap-4 lg:grid-cols-4 gap-y-10">
            {Arr.map((item, i) => (
              <Itmes
                key={i}
                title={item.TItle}
                phote={item.photo}
                about={item.About}
                path={item.path}
              />
            ))}
          </ul>
        </div>
      </motion.section>
    </div>
  );
}
function Itmes({ about, title, phote, path }) {
  return (
    <>
      <article className=" h-min group rounded-md w-fit overflow-hidden border border-slate-700 hover:rotate-1 hover:border-slate-900 bg-[#292c2e]  hover:bg-[#292c2e] transition-all duration-300  ">
        <Link to={path}>
          {" "}
          <img src={phote} className="w-96  " />
        </Link>
        <div className="px-2 py-3">
          <div className="text-wrap mt-7 ">
            <p className="font-bold mb-2">{title}</p>

            <p className="text-gray-400 mb-3">{about}</p>
          </div>
          <div className="flex items-center justify-between w-full  ">
            <Link className="flex items-center gap-2">
              <FaGithub
                size={20}
                className="group-hover:text-orange-800 transition duration-300"
              />
            </Link>
            <div className="flex items-center gap-2">
              <FaArrowRight />
              <Link className="text-blue-900 group-hover:text-gray-400 transition-all duration-300">
                More
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default Poroject;

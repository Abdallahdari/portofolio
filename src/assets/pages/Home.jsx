import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../Navbar/Navbar";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { IoMoonSharp } from "react-icons/io5";
import { useState } from "react";
import { MdWbSunny } from "react-icons/md";
import Poroject from "../components/Poroject";
import "./Home.css";
function Home() {
  const [theme, setTheme] = useState("Day");
  const [show, Setshow] = useState(false);

  const Icons = {
    Day: <MdWbSunny size={20} className="text-orange-400" />,
    Night: <IoMoonSharp size={20} />,
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "Day" ? "Night" : "Day"));
  };

  return (
    <div
      className={` ${
        theme === "Night" ? "bg-[#181a1b] text-white" : "text-black"
      }`}
    >
      <div className="container mx-auto xl:max-w-[1200px] py-4 relative">
        <Navbar theme={theme} show={show} Setshow={Setshow} />
        <div className={`${show === true ? "blur-sm" : ""}`}>
          <Header />
          <Poroject />
          <Contact />
          <Footer />
        </div>

        <div
          className={`${
            show === true ? "blur-sm" : ""
          } absolute right-3 top-4 flex items-center transition-all duration-200`}
        >
          <button
            className={`px-3 py-3 ${
              theme === "Night" ? "bg-[#292c2e] " : "border"
            } rounded-full`}
            onClick={toggleTheme}
          >
            {Icons[theme]}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

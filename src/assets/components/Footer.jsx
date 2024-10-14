import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="flex items-center justify-center gap-5 place-items-center py-6">
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
    </div>
  );
}

export default Footer;

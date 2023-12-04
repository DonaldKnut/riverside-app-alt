import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.span>
        <div className="logo">
          <img
            src="../../../public/riverside_logo.png"
            alt="logo"
            width={86}
            height={70}
          />
        </div>
        <div className="social">
          <a href="#">
            <FaFacebookSquare />
          </a>
          <a href="#">
            <RiInstagramFill />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

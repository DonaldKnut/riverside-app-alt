import "./hero.scss";
import { motion } from "framer-motion";
import { RiLiveFill } from "react-icons/ri";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            variants={textVariants}
            // style={{ marginTop: "44px" }}
          ></motion.h2>
          <motion.h1 variants={textVariants}>
            Riverside Victory Church International Ministry
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>Stream Live</motion.button>
            <motion.button variants={textVariants}>Reach Out</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Halelujah Worship
      </motion.div>
      <div className="imageContainer">
        <img src="../../../public/riverside_.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;

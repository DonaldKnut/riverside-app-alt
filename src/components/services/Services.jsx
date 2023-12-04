import { useRef } from "react";
import "../portfolio/portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { MdCastConnected } from "react-icons/md";

const items = [
  {
    id: 1,
    title: "Discover and Build with Us",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Discover the vibrant ministries at Riverside Victory Church International Ministry where you can get involved, serve, and connect with others. Our youth ministry provides a space for young people to grow in their faith, build relationships, and have fun. Engage in our community outreach programs, charity events, and service projects to make a positive impact on our community.",
  },
  {
    id: 2,
    title: "Explore & Grow",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Explore our upcoming events, including our Sunday services and community Bible study. Join us for fellowship, worship, and community-building. Dive into our sermons section to listen to the latest messages and be inspired by the Word of God.",
  },
  {
    id: 3,
    title: "Take Advantage of the Love",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Engage in our community outreach programs, charity events, and service projects to make a positive impact on our community. Experience the power of worship with our talented and passionate worship team, as we join together in lifting our voices in praise",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Feel the love, grow in faith, and journey with us at Riverside Victory Church International Ministry . We look forward to welcoming you into our community.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button
              style={{
                background: "linear-gradient(69deg, #cca00e, #ee844b)",
                color: "white",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#45a049";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#4CAF50";
              }}
            >
              Let's Connect <MdCastConnected />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;

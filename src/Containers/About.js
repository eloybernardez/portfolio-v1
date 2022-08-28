import React from "react";
import { motion } from "framer-motion";
import "../styles/About.scss";
import TechCarousel from "../Components/TechCarousel";

function About({ children }) {
  return (
    <section id="about me" className="py-5 h-auto">
      <motion.h3
        initial={{ y: -15, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="pb-5 fw-bolder display-5 text-center "
      >
        Abou
        <span className="border-bottom border-2 border-secondary">t me</span>
      </motion.h3>
      <motion.div
        id="container-about"
        initial={{ x: 15, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>

      <motion.h4
        initial={{ x: -15, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="fw-bold fs-2 text-center my-4"
      >
        <motion.span
          initial={{ color: "#000", scale: 1 }}
          whileInView={{ color: "#cd5334", scale: 1.2 }}
          transition={{ duration: 1 }}
        >
          Tech{" "}
        </motion.span>
        Stack
      </motion.h4>

      <TechCarousel />
    </section>
  );
}

export { About };

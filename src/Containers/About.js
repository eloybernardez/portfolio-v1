import React from "react";
import { motion } from "framer-motion";
import "../styles/About.scss";

function About({ children }) {
  return (
    <section id="about me" className="py-5 vh-100">
      <motion.h3
        initial={{ y: -15, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="pb-5 fw-bolder display-5 text-center "
      >
        Abou
        <span className="border-bottom border-2 border-secondary">t me</span>
      </motion.h3>
      <div
        id="container-about"
        className="fadeUpAnimation opacityAnimation hide show"
      >
        {children}
      </div>
    </section>
  );
}

export { About };

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  const container = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.175,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      ref={ref}
      className="max-w-[45rem] text-center leading-8 scroll-mt-28"
      initial="hidden"
      animate="visible"
      variants={container}
      id="about"
    >
      <SectionHeading>About This App</SectionHeading>
      <motion.p className="mb-5 text-lg hover:text-sky-400 cursor-pointer" variants={item}>
        Attuned is a voice training application that severs the need for trans
        and non-binary individuals to have to rely on expensive voice therapy
        sessions. The app is designed to be a free and accessible resource for
        the community.
      </motion.p>
      <motion.p className=" text-lg hover:text-green-500 cursor-pointer" variants={item}>
        The app was developed by a team of professionals from Weill Cornell
        Medicine and artists with a shared goal of improving access to voice
        modification.
      </motion.p>
    </motion.section>
  );
}

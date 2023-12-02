"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium text-blue-600">Chemical Engineering</span>, I decided to combine my
        background with programming in <span className="text-blue-600 font-medium">Health Tech Software Development</span> . I self-learned{" "}
        <span className="font-medium text-blue-600">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium text-xl text-blue-600">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also studying <span className="text-blue-600"> Docker and Kubernetes</span>. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="text-xl font-medium text-blue-600">2024 summer internship</span> as a software
        development engineer.
      </p>

      <p>
        <span className="italic">When I'm not studying</span>, I enjoy watching movies, and playing with my <span className="text-amber-500 text-xl">cats</span>, all of them are rescued stray cats during my undergrad.
      </p>
    </motion.section>
  );
}

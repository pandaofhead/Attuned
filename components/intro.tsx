"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaAppStore } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { LuGithub } from "react-icons/lu";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { ReactTyped } from "react-typed";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] mx-auto sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex flex-col sm:flex-row items-start justify-between">
        <div className="sm:w-1/2 text-left">
          <h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
            <div className="font-bold mb-4 ">Attuned</div>
            <div className="font-bold text-2xl">
              <ReactTyped
                strings={["A mobile application designed for LGBTQ+ community"]}
                typeSpeed={50}
                backSpeed={50}
                startDelay={500}
                showCursor={true}
              />
            </div>
            <div className="italic mt-4">
              <ReactTyped
                strings={["Find your true voice here"]}
                typeSpeed={40}
                startDelay={1000}
                showCursor={false}
              />
            </div>
          </h1>
        </div>
        <div className="sm:w-1/2 flex justify-center sm:justify-end mt-10 sm:mt-0">
          <Image
            src="/app-logo.png"
            alt="Photo"
            width="200"
            height="200"
            quality="100"
            priority={true}
            className="h-30 w-30 rounded-full object-cover bg-white dark:bg-black"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium mt-10">
        <Link
          href="#contact"
          className="group bg-sky-500 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-blue-600 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact Us{" "}
          <BsArrowRight className="opacity-100 group-hover:translate-x-1 transition" />
        </Link>

        <Link
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href=""
          download
        >
          <FaAppStore />
          App Store{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </Link>
        <Link
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href=""
          download
        >
          <FaGooglePlay />
          Google Play{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </Link>
        <Link
          className="group bg-white p-5 flex items-center rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="https://github.com/pandaofhead/Attuned"
          download
        >
          <LuGithub />
        </Link>
      </div>
    </section>
  );
}

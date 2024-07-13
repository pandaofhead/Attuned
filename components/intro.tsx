"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaAppStore } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
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
      className="mb-28 max-w-[50rem] mx-auto sm:mb-0 scroll-mt-[100rem] mt-10"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between sm:items-center sm:justify-center">
        <div className="sm:w-1/2 text-left mb-10 sm:mb-0 flex flex-col justify-center items-center sm:items-start">
          <div className="mb-8 font-bold text-5xl">
            <ReactTyped
              strings={["Attuned"]}
              typeSpeed={150}
              startDelay={1000}
              showCursor={true}
            />
          </div>
          <div className="flex justify-center items-center">
            <p className="text-2xl flex justify-center items-center">
              A voice training application designed for LGBTQ+ community
            </p>
          </div>
        </div>

        <div className="sm:w-1/2 flex justify-center items-center sm:justify-end">
          <Image
            src="/app-logo.png"
            alt="Photo"
            width="240"
            height="240"
            quality="100"
            priority={true}
            className="h-30 w-30 rounded-full object-cover bg-white dark:bg-transparent"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium mt-20">
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
        >
          <FaGooglePlay />
          Google Play{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </Link>
      </div>
    </section>
  );
}

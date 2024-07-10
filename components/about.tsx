"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  const cardList = [
    {
      title: "Find your true voice",
      description: "Discover your true self with our expert coaches.",
    },
    {
      title: "Join a community of experts",
      description:
        "Connect with a community of experts and like-minded individuals who are here to support you.",
    },
    {
      title: "Train on your own schedule",
      description:
        "Our app is available on both iOS and Android, so you can train on your own schedule.",
    },
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="flex flex-col justify-center items-center py-12 bg-secondary"
    >
      <div className="max-w-6xl mx-auto text-center">
        <SectionHeading>about attunedvoice</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 ">
          {cardList.map((card, index) => (
            <div
              key={index}
              className="scale-90 p-6 bg-gray-100 rounded-lg shadow-md hover:scale-105 sm:scale-100 dark:bg-white/10 dark:hover:bg-white/20"
            >
              <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

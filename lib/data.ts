import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/messenger.png";
import rmtdevImg from "@/public/HealthApp_2.png";
import wordanalyticsImg from "@/public/Home.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Technion - Israel Institute of Technology",
    location: "Shantou, China",
    description:
      "Bachelor of Science in Chemical Engineering with GPA 3.8/4.0",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2019 - Aug 2023",
  },
  {
    title: "Frontend Development Intern",
    location: "Hubu Techology, Shanghai",
    description:
      "Spearheaded the design and implementation of an AI photo-generating and sharing website.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2022 - Aug 2022",
  },
  {
    title: "Cornell Tech",
    location: "New York, NY",
    description:
      "Jacobs Technion-Cornell Dual Master of Science Degrees – Information Technology",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2023 - Present",
  },
  {
    title: "Full-Stack Development Intern",
    location: "Scholarship Auditions, Remote",
    description:
      "Led the development of the AmericanBandDad website from scratch at a startup.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2023 - Nov 2023",
  },
  {
    title: "Software Development Intern",
    location: "Weill Cornell Medicine, New York",
    description:
      "Participate in the development of IOS application “Attuned”, which provides free lessons for LGBTQ+ users to transform their voices as desired.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Messenger",
    description:
      "A Full Stack Real-time messenger clone.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma", "Pusher"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Health App",
    description:
      "A Mobile Step Counter App integrated HealthKit APIs.",
    tags: ["React Native", "Java", "Apple Health API", "Google Fit API", "Firebase"],
    imageUrl: rmtdevImg,
  },
  {
    title: "American Band Dad",
    description:
      "A public website that aims to deliver music lessons for those dads who need it.",
    tags: ["React", "PostgreSQL", "AWS RDS"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Java",
  "Python",
  "C++",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  
  "Django",
  "Swift",
] as const;

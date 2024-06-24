import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import messenger from "@/public/messenger.png";
import Home from "@/public/Home.png";
import GeeCache from "@/public/GeeCache.jpg";
import account from "@/public/account.png";
import GeeDB from "@/public/golightdb.png";

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
    name: "Features",
    hash: "#features",
  },
  {
    name: "Team",
    hash: "#team",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Anaïs Rameau (she/her/hers)",
    location: "Weill Cornell Medicine",
    description:
      "An academic laryngologist with a background in the humanities and social sciences.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2019 - Aug 2023",
  },
  {
    title: "Mary Pitti",
    location: "Ithaca College",
    description:
      "M.S., CCC-SLP is the Clinic Director and a clinical faculty member in the Speech-Language Pathology and Audiology department at Ithaca College. ",
    icon: React.createElement(CgWorkAlt),
    date: "May 2022 - Aug 2022",
  },
  {
    title: "Keith Chadwick, MD, MS",
    location: "Cornell University",
    description:
      "Dr. Chadwickwas awarded a Cornell University Dean's Diversity and Healthcare Disparity Research Award to improve access to voice modification for transgender and non-binary people through the development of Attuned Voice.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2023 - Present",
  },
  {
    title: "KD York",
    location: "Portland OR",
    description:
      "a trans artist based in Portland OR. Excited to have such an amazing resource free and accessible to the community",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2023 - Dec 2023",
  },
  {
    title: "Tech team",
    location: "Cornell Tech",
    description:
      "Three grad students from Cornell Tech: Hongjin Quan, Yucan,  who are passionate about building a better world for the LGBTQ+ community.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "GoLightCache",
    description:
      "A standalone and HTTP-based distributed caching system, utilizing Go for efficient cache management and network communication.",
    tags: ["Go", "gRPC", "Consistence Hashing", "etcd", "Raft"],
    imageUrl: GeeCache,
    href: "https://github.com/pandaofhead/GoLightCache",
  },
  {
    title: "GoLightDB",
    description:
      "A lightweight KV storage based on Bitcask model, implemented in Go.",
    tags: ["Go", "Bitcask", "LSM Tree", "KV Database", "Redis"],
    imageUrl: GeeDB,
    href: "https://github.com/pandaofhead/GoLightDB",
  },
  {
    title: "AccountApp",
    description:
      "A Golang full-stack demo app for user authentication and file management. ",
    tags: [
      "Go",
      "PostgreSQL",
      "JWT",
      "Docker",
      "Redis",
      "Testify",
      "Gin",
      "Vue.js",
    ],
    imageUrl: account,
    href: "https://github.com/pandaofhead/AccountApp",
  },
  {
    title: "Messenger",
    description: "A Full Stack Real-time messenger clone.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma", "Pusher"],
    imageUrl: messenger,
    href: "https://messenger-clone-hongjin.vercel.app/",
  },
  {
    title: "American Band Dad",
    description:
      "A public website that aims to deliver music lessons for those dads who need it.",
    tags: ["React", "PostgreSQL", "AWS RDS"],
    imageUrl: Home,
    href: "https://github.com/pandaofhead/Health-APP",
  },
] as const;

export const skillsData = [
  "Go",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Vue.js",
  "Next.js",
  "Node.js",
  "Gin",
  "Tailwind CSS",
  "MongoDB",
  "MySQL",
  "Docker",
  "Redis",
  "PostgreSQL",
] as const;

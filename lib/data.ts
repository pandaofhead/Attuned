import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { CgGirl } from "react-icons/cg";
import { RiTeamFill } from "react-icons/ri";
import lessons from "@/public/lessons.jpg";
import voicetracker from "@/public/voicetracker.jpg";
import recordings from "@/public/recordings.jpg";
import settings from "@/public/settings.jpg";
import homework from "@/public/homework.jpg";

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
    icon: React.createElement(FaUserDoctor),
    date:"",
    href: "",
  },
  {
    title: "Mary Pitti",
    location: "Ithaca College",
    description:
      "M.S., CCC-SLP is the Clinic Director and a clinical faculty member in the Speech-Language Pathology and Audiology department at Ithaca College. ",
    icon: React.createElement(FaUserDoctor),
    href: "",
    date:"",
  },
  {
    title: "Keith Chadwick, MD, MS",
    location: "Cornell University",
    description:
      "Dr. Chadwickwas awarded a Cornell University Dean's Diversity and Healthcare Disparity Research Award to improve access to voice modification for transgender and non-binary people through the development of Attuned Voice.",
    icon: React.createElement(FaUserDoctor),
    href: "",
    date:"",
  },
  {
    title: "KD York",
    location: "Portland OR",
    description:
      "A trans artist based in Portland OR. Excited to have such an amazing resource free and accessible to the community",
    icon: React.createElement(CgGirl),
    href: "",
    date:"",
  },
  {
    title: "development team",
    location: "Cornell Tech",
    description:
      "A team of Cornell Tech students who are passionate about building a better world for the LGBTQ+ community.",
    icon: React.createElement(RiTeamFill),
    href: "",
    date:"",
  },
] as const;

export const projectsData = [
  {
    title: "Lessons",
    description:
      "Online learning lessons for LGBTQ+ voice training, customize your goal and gain different learning paths.",
    tags: ["Firebase", "Real-time Database", "Authentication"],
    imageUrl: lessons,
  },
  {
    title: "Homework",
    description:
      "Professionally designed homework assignments to help users practice their voice training, unlock the next assignment only after the previous one is completed.",
    tags: ["Async Storage", "Real-time Database"],
    imageUrl: homework,
  },
  {
    title: "VoiceTracker",
    description:
      "A voice detection and tracking system for real-time voice modification, providing instant feedback to users.",
    tags: ["Python", "FastAPI", "TensorFlow", "LSTM", "CONV1D"],
    imageUrl: voicetracker,
  },
  {
    title: "Recordings",
    description:
      "Save your voice recordings and track your progress over time.",
    tags: ["Async Storage", "Expo"],
    imageUrl: recordings,
  },
  {
    title: "Settings",
    description:
      "User settings and preferences for the app, allowing users to customize their username, reminders, and more.",
    tags: ["Clerk", "Notifications", "Firebase storage"],
    imageUrl: settings,
  },
] as const;

import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import movieImg from "@/public/movie.png";
import menuImg from "@/public/menu.png";


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
    name: "Experiences",
    hash: "#experiences",
  },
];

export const experiencesData = [
  {
    title: "Graduated University",
    location: "Halic University",
    description:
      "I graduated after 4 years of studying.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Stajyer Web Developer",
    location: "IBB , Istanbul",
    description:
      "I worked as a intern front-end developer for 2 months. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Istanbul , TR",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
];

export const projectsData = [
  {
    title: "Cafe Menu",
    description:
      "Its a app that you can reach with qr code in a cafe to look up menu.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: menuImg,
  },
  {
    title: "Random Movie",
    description:
      "Its a app that gets you a random movie based on your filters.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: movieImg,
  }
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "ShadcnUI",
];
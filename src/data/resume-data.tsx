import * as React from "react";
import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "FARDEEN S KHADRI",
  initials: "SK",
  location: "Bangalore, Karnataka, India",
  locationLink: "https://www.google.com/maps/place/Bangalore,+Karnataka",
  about:
    "Aspiring Embedded Engineer with a passion for electronics, automation, and innovative problem-solving.",
  summary: (
    
    <p className="text-lg">
      Electronics and Communication Engineering graduate with hands-on experience
      in embedded systems, Arduino, ESP boards, and sensor integration. 
      Eager to contribute to IoT and automation projects through a blend of hardware and software skills.
    </p>
  ),

  contact: {
    email: "fardeeninshakhadrii@gmail.com",
    tel: "+91 77951 64321",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/fardeenKhadri",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/fardeen-khadri-58a842220/",
        icon: LinkedInIcon,
      },
    ],
  },
  avatarUrl: "./images/me.jpg", 
  education: [
    {
      school: "Dr. Ambedkar Institute of Technology, Bengaluru",
      degree: "Bachelor of Engineering in Electronics and Communication",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Nanogram Student Technical Club",
      link: "https://nanogram-techhub.vercel.app/",
      badges: ["Club", "IoT", "Leadership"],
      title: "Legacy Sentinel",
      start: "2023",
      end: "Present",
      description: (
        <>
          Leading multidisciplinary tech initiatives with a focus on embedded systems, core electronics and AI.
          <ul className="list-inside list-disc">
            <li>Conducted sessions on Arduino and Linux </li>
            <li>Designed projects involving ESP boards</li>
            <li>Organized hackathons and hardware-based competitions</li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "Machine Learning",
    "Python",
    "Embedded Systems",
    "Arduino",
    "ESP32",
    "ESP8266",
    "C",
    "C++",
    "Computer Vision",
    "Flask",
    "IoT Integration",
    "Sensor Interfacing",
    "Linux",
    "Automation",
    "AI + Vision Systems",
    "Team Leadership",
  ],
  projects: [
    {
      title: "Visor Integrated System for Navigation",
      techStack: ["YOLO v10", "ESP8266", "IoT","Flask"],
      description:
        "Integrated sensors, data processing, augmented reality, GPS technology, and wearable devices to enhance navigation accuracy, safety features like crash detection, and user experience through optimized comfort and interactive rider assistance.",
      logo: ConsultlyLogo,

    },
    {
      title: "Dynamic AI for Real Time Sight Haptic and Navigation assistance.",
      techStack: ["Python", "OpenCV", "AI", "Thermal Imaging"],
      description:
        "Live depth estimation integrated with AI scene description for use in low or no-light environments.",
      logo: ParabolLogo,
      link: {
        label: "View on GitHub",
        href: "https://github.com/fardeenKhadri/DARSHAN.git",
      },
    },
    {
      title: "Optical Device For Intelligent Navigation",
      techStack: ["HTML/CSS", "OpenCV","PCM Processor","Web Sockets", "Python"],
      description:
        "Proect aims in integrating AI with the scene understanding using websockets for the purpose of communication",
      logo: ClevertechLogo,
      link: {
        label: "GitHub - ODIN",
        href: "https://github.com/fardeenKhadri/Odin.git",
      },
    },
    {
      title: "PySUMA - Python Summariser ",
      techStack: ["Python", "nltk", "AI", "Summariser"],
      description:
        "Library used for summarising PDFs into simple natural language, capable for both abstractive and extractive summary.",
      logo: ParabolLogo,
      link: {
        label: "View on GitHub",
        href: "https://github.com/fardeenKhadri/pysuma.git",
      },
    },
    
  ],
} as const;

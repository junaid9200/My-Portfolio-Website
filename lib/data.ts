import clone from "@/public/instagramclone.png";
import dash from "@/public/dashboard.jpeg";
import cal from "@/public/calculator.jpeg";
import iot from "@/public/cn.jpeg";
import flight from "@/public/flightreservationsystem.png"

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
    title: "Microsoft Learn Student Ambassadors (MLSA) | Community Member",
    location: "FAST-NUCES, Peshawar",
    description:
     "Engaged in hosting technical sessions and hackathons, fostering peer learning and tech community growth. Focused on empowering students through collaboration and innovation.",
    date: "2025-Present",
  },
  {
    title: "Theban Script AI Recognition | Research Contributor",
    location: "FAST-NUCES, Peshawar (On-campus)",
    description:
    "In my 6th semester, I co-authored a research paper focused on AI-based recognition of the ancient Theban script. I created a custom dataset, applied machine learning techniques, and contributed to model training and evaluation for symbol pattern recognition.",
    date: "2025",
  },
] as const;

export const projectsData = [
  {
    title: "Flight Reservation System",
    description:
     "I developed a flight reservation system using C++ and MySQL, where users can search, book, and manage flight bookings. The system includes features like booking, canceling, and checking flight availability.",
    tags: ["C++", "MySQL"],
    imageUrl: flight,
  },
  {
    title: "Instagram Clone",
    description:"I built a clone of Instagram implementing core features like user authentication, post creation, likes, and comments, with a responsive front-end and structured back-end storage.",
    tags: ["JavaScript", "CSS","MySQL"],
    imageUrl: clone,
  },
  {
    title: "See Sight Tour Analytics Dashboard",
    description:
     "I created an interactive analytics dashboard for See Sight Tours using Power BI, focusing on visualizing tour performance, revenue trends, and customer insights to support data-driven decision-making.",
    tags: ["Microsof Power Bi"],
    imageUrl: dash,
  },
  {
    title: "C# Calculator with Attached Database",
    description:"I developed a calculator application using C# and SQL Server, integrating a database to store the calculation history for users to review their previous operations and can also update the data .",
    tags: ["C#","MySQL"],
    imageUrl: cal,
  },
  {
    title: "Home IoT-Based Automation System",
    description:
     "Simulated a smart home automation system using Cisco Packet Tracer, where IoT devices like lights, motion sensors, and cameras were programmed for remote control and monitoring",
    tags: ["Cisco Packet Tracer","IoT Device Simulation"],
    imageUrl: iot,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Git",
  "MongoDB",
  "Python",
  "Google Carbon",
  "C",
  "C++",
  "Microsof Power Bi",

  
] as const;

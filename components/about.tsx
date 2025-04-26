"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center leading-8 sm:mb-40 scroll-mt-28 font-poppins font-normal"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
     <SectionHeading>About me</SectionHeading>
    <p className="mb-3 text-white">
      Hey there! <span className="font-bold">I'm Junaid Saeed</span>, a tech enthusiast, critical thinker, and team player currently pursuing my
      <span className="font-bold"> Bachelor's in Computer Science at FAST-NUCES</span>.
    </p>
    <p className="mb-3 text-white">
      My journey into tech began with a deep curiosity about how systems work—from low-level programming in C/C++ to building intelligent AI systems using Python.
      Over time, I’ve explored diverse fields such as <span className="font-bold">data science, software development, and networking</span>, constantly learning and applying my skills through real-world projects.
    </p>
    <p className="mb-3 text-white">
      I've developed several impactful projects like a <span className="font-bold">Flight Reservation System, AI-powered Theban Script Recognizer, Inventory & Billing System, and Power BI Dashboards</span>.
      I'm also a proud member of the <span className="font-bold">Microsoft Learn Student Ambassadors (MLSA)</span> where I engage in tech activities and peer learning.
    </p>
    <p className="mb-3 text-white">
      For me, it's simple: <span className="font-bold">Stay curious. Keep building. Keep evolving.</span>
      Technology is limitless, and I'm here to make the most of every opportunity to explore, create, and grow.
    </p>
<div className="mt-6 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-md text-center">
  <p className="mt-6 text-center text-lg text-cyan-400 italic font-semibold animate-pulse">
  "In the grand program of life, I'm here to debug the system and optimize the human experience."
</p>

</div>




    </motion.section>
  );
}

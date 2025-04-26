import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-bold capitalize mb-8 text-center text-[#d2ae3b] font-poppins">
      {children}
    </h2>
  );
}

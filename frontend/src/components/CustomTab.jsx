import React from "react";
import { Tab } from "@tremor/react";

const CustomTab = ({ value, iconSrc, altText, label }) => {
  return (
    <Tab
      value={value}
      className="hover:-translate-y-1 hover:border-none focus:border-none px-1 py-2"
    >
      <img
        src={iconSrc}
        alt={altText}
        className="inline-block max-w-[50px] h-auto rounded-xl"
      />
      <h1 className="text-center font-bold transition duration-200 sm:text-lg text-sm">
        {label}
      </h1>
    </Tab>
  );
};

export default CustomTab;

// w-full max-w-[105px] h-auto rounded-3xl border-4 border-white shadow-md

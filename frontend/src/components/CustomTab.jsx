import React from "react";
import { Tab } from "@tremor/react";

const CustomTab = ({ value, iconSrc, altText, label }) => {
  return (
    <Tab
      value={value}
      className="hover:-translate-y-1 hover:border-none focus:border-none"
    >
      <img src={iconSrc} alt={altText} className="inline-block w-7 h-7" />
      <h1 className="text-center font-bold transition duration-200 sm:text-xl text-md">
        {label}
      </h1>
    </Tab>
  );
};

export default CustomTab;

import React from "react";

const Days = ({ days }) => {
  const getDays = () => {
    if (days === 1) {
      return "src/images/1_dias.png";
    } else if (days === 2) {
      return "src/images/2_dias.png";
    } else if (days === 3) {
      return "src/images/3_dias.png";
    } else if (days === 4) {
      return "src/images/4_dias.png";
    } else if (days === 5) {
      return "src/images/5_dias.png";
    } else if (days === 6) {
      return "src/images/6_dias.png";
    } else {
      return "src/images/7_dias.png";
    }
  };

  return <img src={getDays()} className="w-[350px]"></img>;
};

export default Days;

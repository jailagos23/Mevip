import React from "react";

const StartLikert = ({ estrellas }) => {
  const getLikert = () => {
    if (estrellas === 0) {
      return "src/images/0_estrellas.png";
    } else if (estrellas === 1) {
      return "src/images/1_estrellas.png";
    } else if (estrellas === 2) {
      return "src/images/2_estrellas.png";
    } else if (estrellas === 3) {
      return "src/images/3_estrellas.png";
    } else if (estrellas === 4) {
      return "src/images/4_estrellas.png";
    } else {
      return "src/images/5_estrellas.png";
    }
  };

  return (
    <>
      <img src={getLikert()} className="w-[280px] mx-auto"></img>
    </>
  );
};

export default StartLikert;

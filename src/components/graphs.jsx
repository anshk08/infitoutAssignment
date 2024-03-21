import React from "react";
import Summary from "./summary";
import SupportResistance from "./supportResistance";
import MovingAverages from "./movingAverages";
import Oscillators from "./oscillators";

const Graphs = () => {
  return (
    <div className="w-auto mx-auto grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 p-5">
      <Summary />
      <SupportResistance />
      <MovingAverages />
      <Oscillators />
    </div>
  );
};

export default Graphs;

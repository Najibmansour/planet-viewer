import React from "react";
import { Planet } from "../../page";

type Props = {
  planet: Planet;
};

const SideLeft = ({ planet }: Props) => {
  return (
    <div className="z-50 col-span-1 col-start-1 row-span-4 row-start-2 mt-24 flex p-16">
      <div className="space-y-7 text-2xl leading-7">
        <h3 className="text-nowrap text-white/50 transition-all hover:text-3xl hover:text-white">
          {planet.description}
        </h3>
        <h3 className="text-nowrap text-white/50 transition-all hover:text-3xl hover:text-white">
          <span className="font-bold tracking-wider">Orbital Period: </span>
          {planet.orbitalPeriod}
        </h3>
        <h3 className="text-nowrap text-white/50 transition-all hover:text-3xl hover:text-white">
          <span className="font-bold tracking-wider">Gravity:</span>{" "}
          {planet.gravity}
        </h3>
        <h3 className="text-nowrap text-white/50 transition-all hover:text-3xl hover:text-white">
          <span className="font-bold tracking-wider">Radius:</span>{" "}
          {planet.radius}
        </h3>
        <h3 className="text-nowrap text-white/50 transition-all hover:text-3xl hover:text-white">
          <span className="font-bold tracking-wider">Distance From Sun: </span>
          {planet.distanceFromSun}
        </h3>
      </div>
    </div>
  );
};

export default SideLeft;

import React from "react";
import { Planet } from "../page";

type Props = {
  planet: Planet;
};

const TopMid = ({ planet }: Props) => {
  return (
    <div className="z-50 col-span-2 col-start-2 row-span-1 row-start-1">
      <div className="">
        <div className="flex flex-col items-center">
          <div className="">
            <h1 className="text-[10rem] font-bold tracking-wider italic font-stretch-expanded">
              {planet.name}
            </h1>
            <h4 className="-mt-12 -ml-1 italic">
              {planet.distanceFromSun} - Moons: {planet.moons}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMid;

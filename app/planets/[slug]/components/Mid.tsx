import React from "react";
import { Planet } from "../page";
import PlanetBackground from "@/components/planetbackground/planetBackground";

type Props = {
  planet: Planet;
};

const Mid = ({ planet }: Props) => {
  return (
    <div className="col-span-4 col-start-1 row-span-5 row-start-1">
      <PlanetBackground planet={planet} />
    </div>
  );
};

export default Mid;

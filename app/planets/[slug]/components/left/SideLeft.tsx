import React from "react";
import { Planet } from "../../page";

type Props = {
  planet: Planet;
};

const SideLeft = ({ planet }: Props) => {
  return (
    <div className="z-50 col-span-1 col-start-1 row-span-4 row-start-2"></div>
  );
};

export default SideLeft;

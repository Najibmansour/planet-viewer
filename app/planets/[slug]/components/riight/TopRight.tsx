import React from "react";
import { Planet } from "../../page";

type Props = {
  planet: Planet;
};

const TopRight = ({ planet }: Props) => {
  return (
    <div className="z-50 col-span-1 col-start-4 row-span-1 row-start-1"></div>
  );
};

export default TopRight;

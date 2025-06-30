"use  client";
import PlanetBackground from "@/components/planetbackground/planetBackground";
import React from "react";
import TopLeft from "./components/left/TopLeft";
import TopMid from "./components/TopMid";
import TopRight from "./components/riight/TopRight";
import SideLeft from "./components/left/SideLeft";
import Mid from "./components/Mid";
import SideRight from "./components/riight/SideRight";

type Props = {
  params: {
    slug: string;
  };
};

export type Planet = {
  name: string;
  slug: string;
  description: string;
  distanceFromSun: string;
  moons: number;
  radius: string;
  orbitalPeriod: string;
  three_config?: {
    scale: number;
  };
  gravity: string;
  image: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
  };
};
export default async function PlanetPage({ params }: Props) {
  // const planets = res.json();

  const res = await fetch(`http://localhost:3000/v1/planets/${params.slug}`, {
    cache: "no-store",
  });

  const planet: Planet = await res.json();

  return (
    <section className="grid h-[100vh] grid-cols-4 grid-rows-5">
      {/* // */}
      <TopLeft planet={planet} />
      <TopMid planet={planet} />
      <TopRight planet={planet} />
      {/* // */}
      <SideLeft planet={planet} />
      <Mid planet={planet} />
      <SideRight planet={planet} />
    </section>
  );
}

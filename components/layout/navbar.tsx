"use client";
import Link from "next/link";
import React, { useState } from "react";
import { SelectContent, SelectTrigger } from "@radix-ui/react-select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

const planets = [
  { name: "Mercury", slug: "mercury" },
  { name: "Venus", slug: "venus" },
  { name: "Earth", slug: "earth" },
  { name: "Mars", slug: "mars" },
  { name: "Jupiter", slug: "jupiter" },
  { name: "Saturn", slug: "saturn" },
  { name: "Uranus", slug: "uranus" },
  { name: "Neptune", slug: "neptune" },
];

const Navbar = () => {
  const [selectedPlanet, setSelectedPlanet] = useState();

  const onSelect = (value: any) => {
    console.log(value);
  };

  return (
    <div className="fixed top-2 z-50 flex h-[10vh] w-full justify-between px-[10vw]">
      <DropdownMenu>
        <DropdownMenuTrigger>Planet</DropdownMenuTrigger>

        <DropdownMenuContent>
          {planets.map((planet, index) => (
            <Link
              className="flex items-center justify-center rounded-2xl bg-indigo-950 px-4 py-1 tracking-widest hover:cursor-crosshair hover:bg-indigo-900"
              key={index}
              href={`/planets/` + planet.slug}
            >
              {planet.name}
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Navbar;

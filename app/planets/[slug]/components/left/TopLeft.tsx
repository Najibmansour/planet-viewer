"use client";

import React, { useState } from "react";

import { Planet } from "../../page";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Link } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  planet: Planet;
};

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

const TopLeft = ({ planet }: Props) => {
  const [selectedPlanet, setSelectedPlanet] = useState();

  const onSelect = (e: Event) => {
    console.log(e);
    // window.location.href = `/planets/` + value.slug;
  };
  return (
    <div className="z-50 col-span-1 col-start-1 row-span-1 row-start-1 p-16">
      <DropdownMenu>
        <DropdownMenuTrigger className="rounded-[0.4rem] bg-neutral-800/30 px-6 py-2 text-xl">
          Planet
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="animate-in w-56 bg-neutral-800/30 text-white"
          align="start"
        >
          <DropdownMenuGroup>
            {planets.map((planet_ref, index) => {
              return (
                <DropdownMenuItem
                  className="px-3 py-1"
                  key={index}
                  onSelect={() => {
                    window.location.href = `/planets/` + planet_ref.slug;
                  }}
                >
                  {planet_ref.name}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default TopLeft;

"use client";

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { LightsCard } from "@/components/cards/LightsCard";
import { WaterConsumptionCard } from "@/components/cards/WaterConsumptionCard";
import { CarbonIntensityCard } from "@/components/cards/CarbonIntensityCard";
import { EnergyConsumptionCard } from "@/components/cards/EnergyConsumptionCard";
import { FootfallCard } from "@/components/cards/FootfallCard";
import { useAtomValue } from "jotai";
import { activeCardsAtom, type CardId } from "@/store/dashboardStore";

export default function Home() {
  const activeCards = useAtomValue(activeCardsAtom);

  const cardMap: Record<CardId, React.ReactNode> = {
    lights: <LightsCard />,
    water: <WaterConsumptionCard />,
    carbon: <CarbonIntensityCard />,
    energy: <EnergyConsumptionCard />,
    footfall: <FootfallCard />
  };

  let gridColsClass = "lg:grid-cols-[1fr_1fr_1fr]";
  if (activeCards.length === 1) gridColsClass = "lg:grid-cols-1";
  else if (activeCards.length === 2 || activeCards.length === 4) gridColsClass = "lg:grid-cols-2";
  else if (activeCards.length === 3) gridColsClass = "lg:grid-cols-3";
  return (
    <div className="w-full h-screen overflow-x-hidden overflow-y-auto custom-scrollbar text-white font-sans relative">
      {/* 100% Full Width Topbar at the top */}
      <div className="w-full z-30 flex-shrink-0 bg-transparent px-8 pt-8 lg:px-12">
        <Topbar />
      </div>

      {/* Main Content Area (Sidebar + Grid) */}
      <div className="flex w-full pb-8 pr-4 lg:pr-10 min-h-max">

        {/* Sidebar Container - Sticky */}
        <div className="flex flex-col items-start pl-4 flex-shrink-0 relative">
          <div className="sticky top-8 h-[calc(100vh-6rem)] w-[90px]">
            <Sidebar />
          </div>
        </div>

        {/* Dashboard Grid Container */}
        <main className="flex-1 pl-8 w-full mt-2">
          <div className={`grid grid-cols-1 ${gridColsClass} gap-6 items-start transition-all duration-300`}>
            {activeCards.map((id, index) => {
              let colSpan = "";
              if (activeCards.length === 5 && index === 4) {
                colSpan = "lg:col-span-1";
              }
              return (
                <div key={id} className={`h-[380px] min-h-[380px] ${colSpan} transition-all`}>
                  {cardMap[id]}
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}

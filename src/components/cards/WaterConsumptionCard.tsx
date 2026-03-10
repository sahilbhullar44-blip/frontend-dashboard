"use client";

import { Card } from "../ui/Card";
import { Droplet, ArrowDown } from "lucide-react";

export function WaterConsumptionCard() {
    return (
        <Card className="h-full flex flex-col justify-between p-6">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="bg-white/5 p-[6px] rounded-full border border-white/5 flex items-center justify-center">
                        <img src="/images/drop.png" alt="icon" className="w-[14px] h-[14px] opacity-80" />
                    </div>
                    <h2 className="text-white/90 text-[15px] font-medium tracking-wide">Water Consumption</h2>
                </div>

                {/* Badge */}
                <div className="bg-white/5 border border-white/5 px-4 py-1.5 rounded-full text-white/50 text-[11px] font-medium tracking-wide whitespace-nowrap">
                    Yesterday
                </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center mt-4">
                <div className="mb-4 relative">
                    <div className="w-12 h-12 border-[2px] border-[var(--color-accent-cyan)] rounded-full flex items-center justify-center mx-auto text-[var(--color-accent-cyan)] bg-[var(--color-accent-cyan)]/5 relative z-10">
                        <img src="/images/Humid.png" className="w-[22px] h-[22px]" alt="Water Drop" />
                    </div>
                    {/* Glowing line connecting droplet to pill */}
                    <div className="absolute top-[80%] left-1/2 -translate-x-1/2 w-[1.5px] h-[30px] bg-gradient-to-b from-[var(--color-accent-cyan)] via-[var(--color-accent-cyan)] to-transparent opacity-80 z-0"></div>
                </div>

                <div className="bg-[#183935] rounded-[24px] px-10 py-3.5 w-max z-10 mt-1 border border-white/5">
                    <h3 className="text-[38px] text-white font-semibold flex items-baseline gap-1.5 tracking-tight">
                        8.42<span className="text-[20px] font-normal text-white/60">m³</span>
                    </h3>
                </div>
            </div>

            <div className="mt-8 flex justify-center pb-2">
                <div className="bg-[var(--color-pill-bg)] text-[var(--color-accent-cyan)] rounded-full px-5 py-2.5 flex items-center gap-2 text-[12px] font-medium whitespace-nowrap border border-white/5 w-full justify-center">
                    <ArrowDown size={14} strokeWidth={3} className="flex-shrink-0" />
                    <span className="tracking-wide text-[var(--color-accent-cyan)]/90">1.2m³ less water used compared to last tuesday</span>
                </div>
            </div>
        </Card>
    );
}

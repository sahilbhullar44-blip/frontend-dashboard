"use client";

import { Card } from "../ui/Card";
import { Wind } from "lucide-react";

export function LightsCard() {
    const radius = 105;
    const strokeWidth = 12;
    const cx = 150;
    const cy = 150;
    const startAngle = 0;
    const endAngle = 180;
    const percentage = 0.695; // (4300 - 2700) / (5000 - 2700) = 1600 / 2300 = approx 0.695
    const activeEndAngle = startAngle + (endAngle - startAngle) * percentage;

    const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
        var angleInRadians = (angleInDegrees - 180) * Math.PI / 180.0;
        return {
            x: centerX + (radius * Math.cos(angleInRadians)),
            y: centerY + (radius * Math.sin(angleInRadians))
        };
    }

    const describeArc = (x: number, y: number, radius: number, startAngle: number, endAngle: number) => {
        var start = polarToCartesian(x, y, radius, endAngle);
        var end = polarToCartesian(x, y, radius, startAngle);
        var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
        var d = [
            "M", start.x, start.y,
            "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
        ].join(" ");
        return d;
    }

    const thumbPos = polarToCartesian(cx, cy, radius, activeEndAngle);

    const ticks = [];
    for (let i = 0; i <= 30; i++) {
        const angle = 180 - (180 / 30) * i;
        const isMajor = i % 2 === 0;
        const innerRadius = radius + 22;
        const outerRadius = radius + (isMajor ? 32 : 28);
        const start = polarToCartesian(cx, cy, innerRadius, angle);
        const end = polarToCartesian(cx, cy, outerRadius, angle);
        ticks.push(
            <line
                key={i}
                x1={start.x} y1={start.y}
                x2={end.x} y2={end.y}
                stroke="rgba(255,255,255,0.4)"
                strokeWidth={isMajor ? "2" : "1.5"}
                strokeLinecap="round"
            />
        );
    }

    return (
        <Card className="h-full relative overflow-hidden flex flex-col justify-between p-6">
            <div className="flex justify-between items-center z-10 relative mb-4">
                <div className="flex items-center gap-3">
                    <div className="bg-white/5 p-[6px] rounded-full border border-white/5 flex items-center justify-center">
                        <img src="/images/air.png" alt="icon" className="w-[14px] h-[14px] opacity-80" />
                    </div>
                    <h2 className="text-white/90 text-[15px] font-medium tracking-wide">Lights</h2>
                </div>

                <div className="w-[42px] h-[22px] bg-white/10 rounded-full flex items-center p-1 cursor-pointer border border-white/5">
                    <div className="w-[14px] h-[14px] rounded-full bg-[var(--color-accent-cyan)] shadow-[0_0_10px_rgba(63,253,224,0.8)] transform translate-x-5 transition-transform"></div>
                </div>
            </div>

            <div className="flex-1 relative w-full h-full flex flex-col items-center justify-end mt-4">

                <div className="relative w-[300px] h-[180px]">
                    <svg width="300" height="180" viewBox="0 0 300 180">
                        {ticks}

                        <path
                            d={describeArc(cx, cy, radius, 0, 180)}
                            fill="none"
                            stroke="rgba(255,255,255,0.06)"
                            strokeWidth={strokeWidth}
                            strokeLinecap="round"
                        />

                        <path
                            d={describeArc(cx, cy, radius, 0, activeEndAngle)}
                            fill="none"
                            stroke="var(--color-accent-cyan)"
                            strokeWidth={strokeWidth}
                            strokeLinecap="round"
                            style={{ filter: 'drop-shadow(0px 0px 10px rgba(63,253,224,0.6))' }}
                        />

                        <circle
                            cx={thumbPos.x}
                            cy={thumbPos.y}
                            r="11"
                            fill="var(--color-background-start)"
                            stroke="var(--color-accent-cyan)"
                            strokeWidth="4"
                            className="shadow-2xl"
                        />
                        <circle
                            cx={thumbPos.x}
                            cy={thumbPos.y}
                            r="3.5"
                            fill="var(--color-accent-cyan)"
                        />
                    </svg>

                    <div className="absolute left-1/2 bottom-[15px] transform -translate-x-1/2 flex flex-col items-center mt-4">
                        <h3 className="text-[36px] font-semibold text-[var(--color-accent-cyan)] tracking-wide drop-shadow-[0_0_15px_rgba(63,253,224,0.3)]">4300k</h3>
                    </div>
                </div>

                <div className="flex justify-between w-[280px] text-[13px] text-white/70 font-medium translate-y-2 pb-2">
                    <span>2700k</span>
                    <span>5000k</span>
                </div>
            </div>
        </Card>
    );
}

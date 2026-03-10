"use client";

import { Card } from "../ui/Card";
import { Zap } from "lucide-react";
import ReactECharts from "echarts-for-react";

export function CarbonIntensityCard() {
    const option = {
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(10, 20, 22, 0.9)',
            borderColor: 'rgba(255,255,255,0.1)',
            textStyle: { color: '#FFFFFF' }
        },
        series: [
            {
                name: 'Carbon Intensity',
                type: 'pie',
                radius: ['52%', '80%'], /* Matches layout better */
                center: ['50%', '50%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 0, /* Reference doesn't have borderRadius between segments */
                    borderColor: 'rgba(255, 255, 255, 0.05)', /* Strict border format */
                    borderWidth: 2
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 15,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(255, 255, 255, 0.2)'
                    }
                },
                label: {
                    show: true,
                    position: 'inner',
                    formatter: '{percent|{c}%}\n{name|{b}}',
                    backgroundColor: '#FFFFFF',
                    borderRadius: 16,
                    padding: [5, 8],
                    rich: {
                        percent: {
                            fontSize: 11,
                            fontWeight: '900',
                            color: '#000000',
                            align: 'center',
                            lineHeight: 14
                        },
                        name: {
                            fontSize: 9,
                            color: '#333333',
                            align: 'center',
                            lineHeight: 10,
                            fontWeight: '600'
                        }
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 30, name: 'Coal', itemStyle: { color: '#A15949' } },
                    { value: 20, name: 'Hydro', itemStyle: { color: '#F0A75D' } },
                    { value: 20, name: 'Nuclear', itemStyle: { color: '#A563DE' } },
                    { value: 15, name: 'Wind', itemStyle: { color: '#3FFDE0' } },
                    { value: 15, name: 'Solar', itemStyle: { color: '#F15252' } }
                ]
            }
        ]
    };

    return (
        <Card className="h-full flex flex-col justify-between p-6 relative">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-3">
                    <div className="bg-white/5 p-[6px] rounded-full border border-white/5">
                        <img src="/images/air.png" alt="icon" className="w-[14px] h-[14px] opacity-80" />
                    </div>
                    <h2 className="text-white/90 text-[15px] font-medium tracking-wide">Carbon Intensity</h2>
                </div>

                {/* Badge */}
                <div className="bg-white/5 border border-white/5 px-4 py-1.5 rounded-full text-white/50 text-[11px] font-medium tracking-wide shadow-sm cursor-pointer hover:bg-white/10 transition">
                    Current
                </div>
            </div>

            <div className="flex-1 relative w-full h-full flex justify-center items-center mt-2">
                <div className="absolute inset-0">
                    <ReactECharts
                        option={option}
                        style={{ height: '100%', width: '100%' }}
                        opts={{ renderer: 'svg' }}
                    />
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none w-max flex justify-center">
                    <div className="bg-white/90 backdrop-blur-md rounded-[20px] px-2 py-2 shadow-[0_4px_30px_rgba(0,0,0,0.5)] flex items-center justify-center gap-2 border border-white/20">
                        <span className="text-[#000000] font-extrabold text-[18px] tracking-tight whitespace-nowrap">95gm</span>
                        <span className="text-[#6b7a78] text-[11px] font-bold tracking-wide whitespace-nowrap">CO2/kWh</span>
                    </div>
                </div>
            </div>
        </Card>
    );
}

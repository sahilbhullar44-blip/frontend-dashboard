"use client";

import { Card } from "../ui/Card";
import { Zap, MoreVertical } from "lucide-react";
import ReactECharts from "echarts-for-react";

export function EnergyConsumptionCard() {
    const option = {
        grid: {
            left: '0%',
            right: '0%',
            bottom: '5%',
            top: '15%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['M', 'T', 'W', 'T', 'F', 'S', 'Today'],
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: {
                interval: 0,
                color: 'var(--color-text-muted)',
                fontSize: 10,
                fontWeight: 600,
                margin: 20
            }
        },
        yAxis: {
            type: 'value',
            show: false,
            splitLine: { show: false }
        },
        series: [
            {
                data: [45, 65, 40, 85, 60, 35, 50],
                type: 'bar',
                barWidth: '55%',
                itemStyle: {
                    color: '#3FFDE0',
                    borderRadius: [8, 8, 8, 8]
                },
                emphasis: {
                    itemStyle: {
                        color: '#3FFDE0',
                        shadowBlur: 15,
                        shadowColor: 'rgba(63, 253, 224, 0.6)'
                    }
                }
            }
        ]
    };

    return (
        <Card className="h-full flex flex-col justify-between p-6">
            <div className="flex justify-between items-center mb-2 z-10 relative">
                <div className="flex items-center gap-3">
                    <div className="bg-white/5 p-[6px] rounded-full border border-white/5 flex items-center justify-center">
                        <img src="/images/flash.png" alt="icon" className="w-[14px] h-[14px] opacity-80" />
                    </div>
                    <h2 className="text-white/90 text-[15px] font-medium tracking-wide">Energy Consumption</h2>
                </div>

                <div className="flex items-center gap-2">
                    <div className="bg-white/5 border border-white/5 px-4 py-1.5 rounded-full text-white/50 text-[11px] font-medium tracking-wide shadow-sm cursor-pointer hover:bg-white/10 transition whitespace-nowrap">
                        Last 7 Day
                    </div>
                    <div className="w-[26px] h-[26px] rounded-full bg-white/5 border border-white/5 flex items-center justify-center cursor-pointer hover:bg-white/10 transition">
                        <MoreVertical size={14} className="text-white/50" />
                    </div>
                </div>
            </div>

            <div className="flex-1 w-full mt-2 relative">
                <div className="absolute inset-0 top-0">
                    <ReactECharts
                        option={option}
                        style={{ height: '240px', width: '100%' }}
                        opts={{ renderer: 'svg' }}
                    />
                </div>
            </div>
        </Card>
    );
}

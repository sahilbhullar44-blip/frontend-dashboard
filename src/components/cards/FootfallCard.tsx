"use client";

import { Card } from "../ui/Card";
import { Users } from "lucide-react";
import ReactECharts from "echarts-for-react";

export function FootfallCard() {
    const option = {
        grid: {
            left: '0%',
            right: '6%',
            bottom: '5%',
            top: '15%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
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
            min: 0,
            max: 150,
            interval: 25,
            axisLine: { show: false },
            axisTick: { show: false },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.04)'
                }
            },
            axisLabel: {
                color: 'var(--color-text-muted)',
                fontSize: 10,
                fontWeight: 500,
                margin: 12
            }
        },
        series: [
            {
                data: [125, 110, 120, 100, 128, 95, 105],
                type: 'line',
                smooth: 0.4,
                symbol: 'circle',
                symbolSize: 6,
                showSymbol: false,
                lineStyle: {
                    color: '#3FFDE0',
                    width: 2.5,
                    shadowColor: 'rgba(63,253,224,0.4)',
                    shadowBlur: 10,
                    shadowOffsetY: 4
                },
                itemStyle: {
                    color: '#FFFFFF',
                    borderColor: '#3FFDE0',
                    borderWidth: 2
                },
                emphasis: {
                    scale: true,
                    itemStyle: {
                        color: '#FFFFFF',
                        borderColor: '#3FFDE0',
                        borderWidth: 3,
                        shadowBlur: 10,
                        shadowColor: 'rgba(63,253,224,0.8)'
                    }
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            { offset: 0, color: 'rgba(63,253,224,0.25)' },
                            { offset: 1, color: 'rgba(63,253,224,0.0)' }
                        ]
                    }
                },
                markPoint: {
                    data: [
                        {
                            coord: [6, 105],
                            symbol: 'circle',
                            symbolSize: 10,
                            itemStyle: { color: '#FFFFFF', borderColor: '#3FFDE0', borderWidth: 3 },
                            label: { show: false }
                        }
                    ]
                }
            }
        ]
    };

    return (
        <Card className="h-full flex flex-col justify-between p-6 relative">
            <div className="flex justify-between items-center mb-2 z-10 relative">
                <div className="flex items-center gap-3">
                    <div className="bg-white/5 p-[6px] rounded-full border border-white/5 flex items-center justify-center">
                        <img src="/images/users.png" alt="icon" className="w-[14px] h-[14px] opacity-80" />
                    </div>
                    <h2 className="text-white/90 text-[15px] font-medium tracking-wide">Footfall</h2>
                </div>

                <div className="bg-white/5 border border-white/5 px-4 py-1.5 rounded-full text-white/50 text-[11px] font-medium tracking-wide shadow-sm cursor-pointer hover:bg-white/10 transition whitespace-nowrap">
                    Last 7 Day
                </div>
            </div>

            <div className="flex-1 w-full mt-2 relative">
                <div className="absolute inset-0 top-0">
                    <ReactECharts
                        option={option}
                        style={{ height: '260px', width: '100%' }}
                        opts={{ renderer: 'svg' }}
                    />
                </div>
            </div>
        </Card>
    );
}

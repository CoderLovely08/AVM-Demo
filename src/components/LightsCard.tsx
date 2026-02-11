import React, { useState } from 'react'
import CardTitle from './custom/CardTitle'
import CardLayout from '../layout/CardLayout'
import { lightIcon } from '../data'
import ReactECharts from 'echarts-for-react'
import { useDispatch, useSelector } from 'react-redux'
import { selectLightsData, toggleLights } from '../store/slices/lights.slice'

const LightsCard = () => {
    const lightsData = useSelector(selectLightsData);
    const dispatch = useDispatch();

    const isOn = lightsData.lights.lightsOn;
    const handleToggle = () => {
        dispatch(toggleLights());
    }

    const getOption = () => ({
        series: [
            {
                type: "gauge",
                startAngle: 200,
                endAngle: -20,
                min: 2700,
                max: 5000,
                splitNumber: 8,
                axisLine: {
                    roundCap: true,
                    lineStyle: {
                        width: 10,
                        color: [
                            [1, "#E6EAF5"],
                        ],
                    },
                },
                progress: {
                    show: true,
                    roundCap: true,
                    width: 12,
                    itemStyle: {
                        color: "#3FFDE0",
                    },
                },
                pointer: {
                    icon: "circle",
                    length: "20%",
                    width: 20,
                    offsetCenter: [0, "-85%"],
                    itemStyle: {
                        color: "#3FFDE0",
                        shadowBlur: 20,
                        borderColor: "#fff",
                        borderWidth: 2,
                    },
                },
                axisTick: {
                    length: 8,
                    lineStyle: {
                        color: "#3FFDE0",
                        width: 1,
                    },
                    distance: -25,
                },
                splitLine: {
                    length: 0,
                    lineStyle: {
                        color: "#3FFDE0",
                        width: 2,
                    },
                    distance: -16,
                },
                axisLabel: {
                    color: "#E6EAF5",
                    fontSize: 14,
                    distance: -20,
                    formatter: function (value: number) {
                        if (value === 2700 || value === 5000) {
                            return value + "k";
                        }
                        return "";
                    },
                    padding: [14, 2, 0, 2]
                },
                detail: {
                    fontSize: 36,
                    fontWeight: 600,
                    offsetCenter: [0, "-5%"],
                    color: "#3FFDE0",
                    formatter: "{value}k",
                },
                data: [{
                    value:
                        lightsData.lights.lightsData.intensity
                }],
            },
        ],
    });

    return (
        <CardLayout isGradient>
            <div className="flex items-center justify-between mb-4">
                <CardTitle icon={lightIcon} label="Lights" />
                <button
                    onClick={handleToggle}
                    className={`w-14 h-7 rounded-full transition-colors duration-300 relative ${isOn ? "bg-primary  " : "bg-gray-600"
                        }`}
                >
                    <div
                        className={`absolute duration-300 top-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${isOn ? "right-0.5" : "left-0.5"
                            }`}
                    />
                </button>
            </div>

            <div className="h-72">
                <ReactECharts
                    option={getOption()}
                    style={{ height: "100%", width: "100%" }}
                />
            </div>
        </CardLayout>
    )
}

export default LightsCard
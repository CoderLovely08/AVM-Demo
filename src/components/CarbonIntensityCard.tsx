import React from 'react'
import CardLayout from '../layout/CardLayout'
import CardTitle from './custom/Cardtitle'
import { airIcon } from '../data'
import ReactECharts from 'echarts-for-react'

const CarbonIntensityCard = () => {
  const getOption = () => ({
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c}% ({d}%)",
    },
    legend: {
      show: false,
    },
    series: [
      {
        type: "pie",
        radius: ["65%", "85%"],
        center: ["50%", "50%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 0,
          borderColor: "#0f2f2f",
          borderWidth: 3,
        },
        label: {
          show: true,
          // position: "outer",
          alignTo: "edge",
          formatter: function (params: any) {
            return `{percent|${params.value}%}\n{name|${params.name}}`;
          },
          rich: {
            percent: {
              fontSize: 14,
              fontWeight: "bold",
              color: "#000",
              backgroundColor: "#fff",
              padding: [4, 8],
              borderRadius: 12,
              align: "center",
            },
            name: {
              fontSize: 11,
              color: "#fff",
              padding: [4, 0, 0, 0],
            },
          },
          distanceToLabelLine: 5,
        },
        labelLine: {
          show: false,
          length: 10,
          length2: 150,
          lineStyle: {
            color: "#3FFDE0",
          },
        },
        // emphasis: {
        //   scale: false,
        //   focus: "self",
        // },
        data: [
          { value: 30, name: "Coal", itemStyle: { color: "#a06060" } },
          { value: 20, name: "Hydro", itemStyle: { color: "#d89858" } },
          { value: 15, name: "Gas", itemStyle: { color: "#e84848" } },
          { value: 15, name: "Wind", itemStyle: { color: "#3FFDE0" } },
          { value: 20, name: "Nuclear", itemStyle: { color: "#b060d8" } },
        ],
      },
    ],
  });

  return (
    <CardLayout>
      <div className="flex items-center justify-between mb-8">
        <CardTitle icon={airIcon} label="Carbon Intensity" />
        <span className="px-4 py-1.5 bg-[#1a3f3f] text-white text-sm rounded-full">
          Yesterday
        </span>
      </div>

      <div className="relative h-72">
        <ReactECharts
          option={getOption()}
          style={{ height: "100%", width: "100%" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
          <div className="text-3xl font-semibold text-white">95gm</div>
          <div className="text-sm text-gray-400">CO2/kWh</div>
        </div>
      </div>
    </CardLayout>
  )
}

export default CarbonIntensityCard
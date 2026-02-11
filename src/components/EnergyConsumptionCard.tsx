import React from 'react'
import ReactECharts from 'echarts-for-react'
import CardLayout from '../layout/CardLayout'
import CardTitle from './custom/Cardtitle'
import { flashIcon } from '../data'
import { EllipsisVertical } from 'lucide-react'

const EnergyConsumptionCard = () => {

  const getOption = () => ({
    grid: {
      left: "5%",
      right: "5%",
      bottom: "15%",
      top: "10%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: ["M", "T", "W", "T", "F", "S", "Today"],
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "#fff",
        fontSize: 12,
        margin: 15,
      },
    },
    yAxis: {
      type: "value",
      show: false,
    },
    series: [
      {
        data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 100) + 20),
        type: "bar",
        barWidth: "80%",
        itemStyle: {
          color: "#3FFDE0",
          borderRadius: [8, 8, 0, 0],
        },
        emphasis: {
          itemStyle: {
            color: "#3FFDE0",
          },
        },
      },
    ],
  });

  return (
    <CardLayout>
      <div className="flex items-center justify-between mb-8">
        <CardTitle icon={flashIcon} label="Energy Consumption" />
        <div className="flex items-center gap-2">
          <span className="px-4 py-1.5 bg-gray-200/10 text-white text-sm rounded-full">
            Yesterday
          </span>
          <EllipsisVertical />
        </div>
      </div>
       <div className="h-64">
        <ReactECharts
          option={getOption()}
          style={{ height: "100%", width: "100%" }}
        />
      </div>
    </CardLayout>
  )
}

export default EnergyConsumptionCard
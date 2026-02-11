import React from 'react'
import CardLayout from '../layout/CardLayout'
import CardTitle from './custom/Cardtitle'
import { dropIcon, humidIcon } from '../data'

const WaterConsumptionCard = () => {
  return (
    <CardLayout>
      <div className="flex items-center justify-between">
        <CardTitle icon={dropIcon} label="Water Consumption" />
        <span className="px-4 py-1.5 bg-slate-600/30 text-white text-sm rounded-full">
          Yesterday
        </span>
      </div>
      <div className="flex flex-col items-center justify-center flex-1 gap-6">
        <img
          src={humidIcon}
          alt="Water"
          className="w-12 h-12"
          style={{
            filter:
              "brightness(0) saturate(100%) invert(85%) sepia(65%) saturate(548%) hue-rotate(115deg) brightness(103%) contrast(101%)",
          }}
        />

        <div className="relative">
          <div className="bg-primary/10 px-12 py-8 rounded-full">
            <span className="text-5xl font-semibold text-white">
              8.42m<sup className="text-3xl">3</sup>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-primary bg-primary/20 px-4 py-2 rounded-full text-sm">
          <span>
            <span className="font-semibold">1.2m³</span> less water used compare
            to last tuesday
          </span>
        </div>
      </div>
    </CardLayout>
  )
}

export default WaterConsumptionCard
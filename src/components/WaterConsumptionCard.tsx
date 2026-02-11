import React from 'react'
import CardLayout from '../layout/CardLayout'
import CardTitle from './custom/Cardtitle'
import { dropIcon } from '../data'

const WaterConsumptionCard = () => {
  return (
    <CardLayout>
      <div className="flex items-center justify-between">
        <CardTitle icon={dropIcon} label="Water Consumption" />
        <span className="px-4 py-1.5 bg-slate-600/30 text-white text-sm rounded-full">
          Yesterday
        </span>
      </div>
    </CardLayout>
  )
}

export default WaterConsumptionCard
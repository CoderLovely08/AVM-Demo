import React from 'react'
import CardLayout from '../layout/CardLayout'
import CardTitle from './custom/Cardtitle'
import { flashIcon } from '../data'

const EnergyConsumptionCard = () => {
  return (
    <CardLayout>
      <div className="flex items-center justify-between">
        <CardTitle icon={flashIcon} label="EnergyConsumptionCard" />
        <span className="px-4 py-1.5 bg-slate-600/30 text-white text-sm rounded-full">
          Yesterday
        </span>
      </div>
      <div>EnergyConsumptionCard</div>
    </CardLayout>
  )
}

export default EnergyConsumptionCard
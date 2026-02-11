import React from 'react'
import BaseLayout from '../layout/BaseLayout'
import LightsCard from '../components/LightsCard'
import WaterConsumptionCard from '../components/WaterConsumptionCard'
import CarbonIntensityCard from '../components/CarbonIntensityCard'
import EnergyConsumptionCard from '../components/EnergyConsumptionCard'
import FootfallCard from '../components/FootfallCard'

const Dashboard = () => {
  return (
    <BaseLayout>
      <div className="flex-1">
        <main className="px-8 grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-sm:grid-cols-1 gap-6">
          <div>
            <LightsCard />
          </div>
          <div>
            <WaterConsumptionCard />
          </div>
          <div>
            <CarbonIntensityCard />
          </div>
          <div>
            <EnergyConsumptionCard />
          </div>
          <div>
            <FootfallCard />
          </div>
        </main>
      </div>
    </BaseLayout>
  )
}

export default Dashboard
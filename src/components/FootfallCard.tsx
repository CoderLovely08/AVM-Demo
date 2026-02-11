import React from 'react'
import CardLayout from '../layout/CardLayout'
import CardTitle from './custom/Cardtitle'
import { usersIcon } from '../data'

const FootfallCard = () => {

  return (
    <CardLayout>
      <div className="flex items-center justify-between mb-8">
        <CardTitle icon={usersIcon} label="Footfall" />
        <span className="px-4 py-1.5 bg-[#1a3f3f] text-white text-sm rounded-full">
          Yesterday
        </span>
      </div>
    </CardLayout>
  )
}

export default FootfallCard
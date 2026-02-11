import React, { useState } from 'react'
import CardLayout from '../layout/CardLayout'
import CardTitle from './custom/Cardtitle'
import { lightIcon } from '../data'

const LightsCard = () => {
    const [isOn, setIsOn] = useState<boolean>(true)

    return (
        <CardLayout>
            <div className="flex items-center justify-between mb-4">
                <CardTitle icon={lightIcon} label="Lights" />
                <button
                    onClick={() => setIsOn(!isOn)}
                    className={`w-14 h-7 rounded-full transition-colors duration-300 relative ${isOn ? "bg-primary  " : "bg-gray-600"
                        }`}
                >
                    <div
                        className={`absolute duration-300 top-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${isOn ? "right-0.5" : "left-0.5"
                            }`}
                    />
                </button>
            </div>
        </CardLayout>
    )
}

export default LightsCard
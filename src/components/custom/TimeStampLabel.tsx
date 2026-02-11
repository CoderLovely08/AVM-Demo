import React from 'react'

const TimeStampLabel = ({ label }: { label: string }) => {
    return (
        <span className="px-4 py-1.5 bg-secondary/10 text-white text-sm rounded-full">
            {label}
        </span>
    )
}

export default TimeStampLabel
import React from 'react'
import ReactECharts from 'echarts-for-react'
import CardLayout from '../layout/CardLayout'
import CardTitle from './custom/CardTitle'
import { usersIcon } from '../data'

const FootfallCard = () => {

  const getOption = () => ({
    grid: {
      left: '8%',
      right: '5%',
      bottom: '15%',
      top: '10%',
      containLabel: false
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['M', 'T', 'W', 'T', 'F', 'S', 'Today'],
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#fff',
        fontSize: 12,
        margin: 15
      }
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 150,
      interval: 25,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#5a7a7a',
        fontSize: 11
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#1a3838',
          type: 'solid'
        }
      }
    },
    series: [
      {
        data: [100, 115, 95, 120, 105, 130, 115],
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          color: '#3FFDE0'
        },
        lineStyle: {
          color: '#3FFDE0',
          width: 2
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(63, 253, 224, 0.3)'
              },
              {
                offset: 1,
                color: 'rgba(63, 253, 224, 0)'
              }
            ]
          }
        },
        emphasis: {
          focus: 'series',
          itemStyle: {
            color: '#3FFDE0',
            borderColor: '#fff',
            borderWidth: 0,
          }
        }
      }
    ]
  });

  return (
    <CardLayout>
      <div className="flex items-center justify-between mb-8">
        <CardTitle icon={usersIcon} label="Footfall" />
        <span className="px-4 py-1.5 bg-[#1a3f3f] text-white text-sm rounded-full">
          Last 7 Day
        </span>
      </div>

       <div className="h-64">
        <ReactECharts option={getOption()} style={{ height: '100%', width: '100%' }} />
      </div>
    </CardLayout>
  )
}

export default FootfallCard
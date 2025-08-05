'use client'

import { useEffect, useState } from 'react'
import { LegendProps } from 'recharts'

import { ChartDataProps, RenderLabelProps } from './types'

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

export function ConvertDegree(degree: number): number {
  const clockwiseDegree = (90 - degree) % 360
  return clockwiseDegree < 0 ? clockwiseDegree + 360 : clockwiseDegree
}

export const CustomLegendContent = (props: LegendProps) => {
  const { payload } = props

  return (
    <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-8 sm:mt-4">
      {payload?.map((entry, index: number) => (
        <div key={`legend-${index}`} className="flex items-center gap-x-2">
          <div
            className="w-2 h-2 rounded-xs"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-white text-xs">{entry.value}</span>
        </div>
      ))}
    </div>
  )
}

export const RenderCustomizedLabel = (
  props: RenderLabelProps,
  chartData: ChartDataProps[]
) => {
  const { cx, cy, midAngle, outerRadius, index } = props
  const RADIAN = Math.PI / 180

  // Calculate position for the outer point
  const radius = outerRadius // Use the actual outerRadius
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  // Calculate position for the end of the straight segment
  const straightLength = 20
  const straightX =
    cx + (radius + straightLength) * Math.cos(-midAngle * RADIAN)
  const straightY =
    cy + (radius + straightLength) * Math.sin(-midAngle * RADIAN)

  // Calculate position for the end of the inclined segment
  const inclinedLength = 20
  const angleDirection = ConvertDegree(midAngle) > 180 ? -1 : 1
  const inclinedX = straightX + inclinedLength * angleDirection
  const inclinedY = straightY

  // Calculate text position (slightly offset from the inclined line)
  const textX = inclinedX + angleDirection * 5
  const textY = inclinedY

  const textAnchor = ConvertDegree(midAngle) > 180 ? 'end' : 'start'
  const label = chartData[index].label
  const value = chartData[index].value

  return (
    <g>
      {/* Straight line segment */}
      <line
        x1={x}
        y1={y}
        x2={straightX}
        y2={straightY}
        stroke={chartData[index].fill}
        strokeWidth={1}
      />

      {/* Inclined line segment */}
      <line
        x1={straightX}
        y1={straightY}
        x2={inclinedX}
        y2={inclinedY}
        stroke={chartData[index].fill}
        strokeWidth={1}
      />

      {/* Label text */}
      <text
        x={textX}
        y={textY}
        textAnchor={textAnchor}
        dominantBaseline="central"
        fill="white"
        fontSize={12}>
        <tspan x={textX} dy="-0.5em">
          {label}
        </tspan>
        <tspan
          x={textX}
          dy="1.2em"
          fontWeight="bold"
          fill={chartData[index].fill}>
          {value}%
        </tspan>
      </text>
    </g>
  )
}

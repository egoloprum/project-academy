'use client'

import { Label, Pie, PieChart } from 'recharts'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  ChartLegend
} from '@/shared/components'

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/shared/components'
import { useEffect, useMemo, useState } from 'react'

export const description = 'An interactive pie chart'

const chartData = [
  { direction: 'Frontend', value: 12, fill: '#c084fc' },
  { direction: 'Backend', value: 10, fill: '#fb7185' },
  { direction: 'QA', value: 21, fill: '#22d3ee' },
  { direction: 'UX/UI', value: 19, fill: '#fb923c' },
  { direction: 'PM', value: 17, fill: '#818cf8' },
  { direction: 'SA', value: 17, fill: '#4ade80' },
  { direction: 'CEO', value: 4, fill: '#facc15' }
]

const chartConfig = {
  frontend: {
    label: 'Frontend',
    color: 'var(--chart-1)'
  },
  backend: {
    label: 'Backend',
    color: 'var(--chart-2)'
  },
  qa: {
    label: 'QA',
    color: 'var(--chart-3)'
  },
  ui: {
    label: 'UX/UI',
    color: 'var(--chart-4)'
  },
  pm: {
    label: 'PM',
    color: 'var(--chart-5)'
  },
  sa: {
    label: 'SA',
    color: 'var(--chart-6)'
  },
  ceo: {
    label: 'CEO',
    color: 'var(--chart-7)'
  }
} satisfies ChartConfig

const CustomLegendContent = (props: any) => {
  const { payload } = props

  return (
    <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-8 sm:mt-4">
      {payload?.map((entry: any, index: number) => (
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

function convertDegree(degree: number): number {
  const clockwiseDegree = (90 - degree) % 360
  return clockwiseDegree < 0 ? clockwiseDegree + 360 : clockwiseDegree
}

const renderCustomizedLabel = (props: any) => {
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
  const angleDirection = convertDegree(midAngle) > 180 ? -1 : 1
  const inclinedX = straightX + inclinedLength * angleDirection
  const inclinedY = straightY

  // Calculate text position (slightly offset from the inclined line)
  const textX = inclinedX + angleDirection * 5
  const textY = inclinedY

  const textAnchor = convertDegree(midAngle) > 180 ? 'end' : 'start'
  const direction = chartData[index].direction
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
          {direction}
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

const useWindowSize = () => {
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

export function DashboardDistributionChart() {
  const totalPercent = 100

  const { width } = useWindowSize()

  const innerRadius = useMemo(() => {
    return width < 640 ? 40 : 60
  }, [width])

  return (
    <Card className="bg-transparent border-none text-white gap-2 sm:gap-4">
      <CardHeader className="p-0">
        <CardTitle className="text-xl sm:text-2xl text-white">
          Распределение по направлениям
        </CardTitle>
      </CardHeader>
      <CardContent className="bg-stone-900  rounded-md p-2 sm:p-4 relative">
        <ChartContainer
          config={chartConfig}
          className="rounded-sm aspect-[16/12] my-4 md:aspect-video">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <ChartLegend content={<CustomLegendContent />} />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="direction"
              innerRadius={innerRadius}
              strokeWidth={1}
              label={renderCustomizedLabel}
              labelLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle">
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-white text-xl font-bold">
                          {totalPercent.toLocaleString()}
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

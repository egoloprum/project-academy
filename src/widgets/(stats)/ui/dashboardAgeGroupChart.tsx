'use client'

import { Pie, PieChart } from 'recharts'
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

const chartData = [
  { age: '40+', value: 5, fill: '#4ade80' },
  { age: '35-40', value: 8, fill: '#fca5a5' },
  { age: '30-35', value: 7, fill: '#fed7aa' },
  { age: '18-21', value: 49, fill: '#60a5fa' },
  { age: '26-29', value: 10, fill: '#fef08a' },
  { age: '22-25', value: 21, fill: '#e879f9' }
]

const chartConfig = {
  '18-21': {
    label: '18-21',
    color: 'var(--chart-1)'
  },
  '22-25': {
    label: '22-25',
    color: 'var(--chart-2)'
  },
  '26-29': {
    label: '26-29',
    color: 'var(--chart-3)'
  },
  '30-35': {
    label: '30-35',
    color: 'var(--chart-4)'
  },
  '35-40': {
    label: '35-40',
    color: 'var(--chart-5)'
  },
  '40+': {
    label: '40+',
    color: 'var(--chart-6)'
  }
} satisfies ChartConfig

const CustomLegendContent = (props: any) => {
  const { payload } = props

  return (
    <div className="flex flex-wrap justify-center gap-x-4 mt-8 gap-y-1">
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
  const age = chartData[index].age
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
          {age}
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

export function DashboardAgeGroupChart() {
  const totalPercent = 100

  return (
    <Card className="bg-transparent border-none text-white gap-2 sm:gap-4 py-0">
      <CardHeader className="p-0">
        <CardTitle className="text-xl sm:text-2xl text-white">
          Возрастные группы в %
        </CardTitle>
      </CardHeader>
      <CardContent className="bg-stone-900 rounded-md p-2 sm:p-4 relative">
        <ChartContainer
          config={chartConfig}
          className="rounded-sm aspect-[16/14] mt-4 md:aspect-video">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <ChartLegend content={<CustomLegendContent />} />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="age"
              strokeWidth={1}
              label={renderCustomizedLabel}
              labelLine={false}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

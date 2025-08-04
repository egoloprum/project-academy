'use client'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from '@/shared/components'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'

const chartData = [
  { direction: 'Frontend', accepted: 36, rejected: 60 },
  { direction: 'Backend', accepted: 25, rejected: 25 },
  { direction: 'QA', accepted: 108, rejected: 42 },
  { direction: 'UX/UI', accepted: 121, rejected: 42 },
  { direction: 'PM', accepted: 61, rejected: 54 },
  { direction: 'SA', accepted: 58, rejected: 49 },
  { direction: 'CEO', accepted: 50, rejected: 125 }
]

const chartConfig = {
  accepted: {
    label: 'Принято',
    color: 'var(--chart-1)'
  },
  rejected: {
    label: 'Отклонено',
    color: 'var(--chart-2)'
  }
} satisfies ChartConfig

export const DashboardApplicationRatioChart = ({}) => {
  return (
    <Card className="bg-transparent border-none text-white gap-2 sm:gap-4">
      <CardHeader className="p-0">
        <CardTitle className="text-xl sm:text-2xl text-white">
          Соотношение принятых и отклоненных заявок
        </CardTitle>
      </CardHeader>
      <CardContent className="bg-stone-900 rounded-md p-2 sm:p-4">
        <ChartContainer
          config={chartConfig}
          className="bg-stone-800 rounded-sm">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{ right: 0, left: -30 }}
            className="">
            <CartesianGrid
              vertical={true}
              horizontal={true}
              stroke="oklch(14.7% 0.004 49.25)"
              strokeWidth={0.4}
              strokeDashoffset={10}
              strokeDasharray={5}
            />
            <XAxis
              dataKey="direction"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={value => value.slice(0, 3)}
            />
            <YAxis
              domain={[0, 250]}
              tickCount={5}
              tickLine={false}
              axisLine={false}
            />
            <ChartTooltip
              cursor={{
                opacity: 0.1
              }}
              content={<ChartTooltipContent hideLabel />}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="accepted"
              stackId="a"
              fill="oklch(79.2% 0.209 151.711)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="rejected"
              stackId="a"
              fill="oklch(67.3% 0.182 276.935)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

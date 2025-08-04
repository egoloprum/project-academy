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
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from 'recharts'

const chartData = [
  { direction: 'Frontend', averagePoint: 73 },
  { direction: 'Backend', averagePoint: 43.5 },
  { direction: 'QA', averagePoint: 83.5 },
  { direction: 'UX/UI', averagePoint: 80 },
  { direction: 'PM', averagePoint: 69 },
  { direction: 'SA', averagePoint: 75 },
  { direction: 'CEO', averagePoint: 64 }
]

const chartConfig = {
  averagePoint: {
    label: 'Средний балл в %',
    color: 'var(--chart-1)'
  }
} satisfies ChartConfig

export const DashboardTaskPointChart = ({}) => {
  return (
    <Card className="bg-transparent border-none text-white gap-2 sm:gap-4">
      <CardHeader className="p-0">
        <CardTitle className="text-xl sm:text-2xl text-white">
          Средний балл выполненных тестовых заданий
        </CardTitle>
      </CardHeader>
      <CardContent className="bg-stone-900 rounded-md p-2 sm:p-4">
        <ChartContainer
          config={chartConfig}
          className="bg-stone-800 rounded-sm pb-2">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{ right: 0, left: -30, top: 10 }}
            className="">
            <CartesianGrid
              vertical={false}
              horizontal={true}
              stroke="#fff"
              strokeWidth={0.5}
              strokeOpacity={0.2}
              strokeDasharray={0}
            />
            <XAxis
              dataKey="direction"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={value => value.slice(0, 3)}
            />
            <YAxis
              domain={[0, 100]}
              tickCount={6}
              tickLine={false}
              axisLine={false}
            />
            <ChartTooltip
              cursor={{
                opacity: 0.1
              }}
              content={<ChartTooltipContent hideLabel className="w-43" />}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="averagePoint"
              stackId="a"
              fill="oklch(79.2% 0.209 151.711)"
              radius={[4, 4, 4, 4]}>
              <LabelList
                position="top"
                offset={12}
                className="fill-white"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

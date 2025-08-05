'use client'

import { useMemo } from 'react'
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

import { ChartEmploymentTypeData } from '../helpers/data'
import {
  CustomLegendContent,
  RenderCustomizedLabel,
  useWindowSize
} from '../helpers/hooks'
import { RenderLabelProps } from '../helpers/types'

const chartConfig = {
  Учусь: {
    label: 'Учусь',
    color: 'var(--chart-1)'
  },
  Работаю: {
    label: 'Работаю',
    color: 'var(--chart-2)'
  }
} satisfies ChartConfig

export function DashboardEmploymentTypeChart() {
  const totalPercent = 150

  const { width } = useWindowSize()

  const innerRadius = useMemo(() => {
    return width < 640 ? 40 : 60
  }, [width])

  return (
    <Card className="bg-transparent border-none text-white gap-2 sm:gap-4 py-0">
      <CardHeader className="p-0">
        <CardTitle className="text-xl sm:text-2xl text-white">
          Тип занятости
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
              data={ChartEmploymentTypeData}
              dataKey="value"
              nameKey="label"
              strokeWidth={1}
              startAngle={-45}
              innerRadius={innerRadius}
              label={(props: RenderLabelProps) =>
                RenderCustomizedLabel(props, ChartEmploymentTypeData)
              }
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

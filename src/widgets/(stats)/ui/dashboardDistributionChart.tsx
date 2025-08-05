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

import { ChartDistributionData } from '../helpers/data'
import {
  CustomLegendContent,
  RenderCustomizedLabel,
  useWindowSize
} from '../helpers/hooks'
import { RenderLabelProps } from '../helpers/types'

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

export function DashboardDistributionChart() {
  const totalPercent = 100

  const { width } = useWindowSize()

  const innerRadius = useMemo(() => {
    return width < 640 ? 30 : 60
  }, [width])

  return (
    <Card className="bg-transparent border-none text-white gap-2 sm:gap-4 py-0">
      <CardHeader className="p-0">
        <CardTitle className="text-xl sm:text-2xl text-white">
          Распределение по направлениям
        </CardTitle>
      </CardHeader>
      <CardContent className="bg-stone-900  rounded-md p-2 sm:p-4 relative">
        <ChartContainer
          config={chartConfig}
          className="rounded-sm aspect-[16/12] mt-4 md:aspect-video">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <ChartLegend content={<CustomLegendContent />} />
            <Pie
              data={ChartDistributionData}
              dataKey="value"
              nameKey="label"
              innerRadius={innerRadius}
              strokeWidth={1}
              label={(props: RenderLabelProps) =>
                RenderCustomizedLabel(props, ChartDistributionData)
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

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

import { ChartAgeGroupData } from '../helpers/data'
import { CustomLegendContent, RenderCustomizedLabel } from '../helpers/hooks'
import { RenderLabelProps } from '../helpers/types'

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

export function DashboardAgeGroupChart() {
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
              data={ChartAgeGroupData}
              dataKey="value"
              nameKey="label"
              strokeWidth={1}
              label={(props: RenderLabelProps) =>
                RenderCustomizedLabel(props, ChartAgeGroupData)
              }
              labelLine={false}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

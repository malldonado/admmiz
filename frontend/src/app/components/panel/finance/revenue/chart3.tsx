"use client"

import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart, Sector } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A donut chart with an active sector"

const chartData = [
  { browser: "ferramentas", visitors: 275, fill: "#192231" },
  { browser: "logística", visitors: 200, fill: "#354c72" },
  { browser: "colaboradores", visitors: 187, fill: "#3a5c95" },
  { browser: "materiais", visitors: 173, fill: "#2d61b8" },
  { browser: "outros", visitors: 90, fill: "#005fff" },
]

const chartConfig = {
  tools: {
    label: "Ferramentas",
  },
  logistics: {
    label: "Logística",
  },
  collaborators: {
    label: "Colaboradores",
  },
  materials: {
    label: "Materiais",
  },
  other: {
    label: "Outros",
  },
} satisfies ChartConfig

export function Chart3() {
  return (
    <Card className="flex flex-col border-none w-1/3">
      <CardHeader className="items-center pb-0">
        <CardTitle>Gasto mensais</CardTitle>
        <CardDescription>Últimos 30 dias</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={0}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <Sector {...props} outerRadius={outerRadius + 10} />
              )}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-lg">
          <div className="flex gap-2 font-medium leading-none">
            +9,23% em relação ao período de 6 meses
          </div>
      </CardFooter>
    </Card>
  )
}

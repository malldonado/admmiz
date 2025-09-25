"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A bar chart with a label";

const chartData = [
  { month: "Janeiro", desktop: 186 },
  { month: "Fevereiro", desktop: 305 },
  { month: "Março", desktop: 237 },
  { month: "Abril", desktop: 73 },
  { month: "Maio", desktop: 209 },
  { month: "Junho", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Receita Liquida: ",
    color: "#192231",
  },
} satisfies ChartConfig;

export function Chart2() {
  return (
    <div className="w-full shadow-none">
      <Card className="border-none shadow-none">
        <CardHeader>
          <CardTitle>Receita Liquida</CardTitle>
          <CardDescription>Janeiro - Junho 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={chartData}
              margin={{
                top: 20,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}>
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground"
                  fontSize={12}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-lg">
          <div className="flex gap-2 text-[16px] leading-none">
            +9,23% em relação ao período de 6 meses
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

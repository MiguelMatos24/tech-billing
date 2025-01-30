import { Bar, BarChart, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useState } from "react";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
} satisfies ChartConfig;

const monthNames: { [key: number]: string } = {
  1: "Jan",
  2: "Fev",
  3: "Mar",
  4: "Abr",
  5: "Mai",
  6: "Jun",
  7: "Jul",
  8: "Ago",
  9: "Set",
  10: "Out",
  11: "Nov",
  12: "Dez",
};

const MonthlyChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/mocks/revenue-monthly.json")
      .then((res) => res.json())
      .then(({ data }) => {
        const transformedData = data.map(
          (item: { month: number; revenue: number }) => ({
            monthName: monthNames[item.month],
            revenue: item.revenue,
          })
        );
        setData(transformedData);
      });
  }, []);

  return (
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer data={data}>
        <XAxis
          dataKey="monthName"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="revenue" fill="var(--color-desktop)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
};

export default MonthlyChart;

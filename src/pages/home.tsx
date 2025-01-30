import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import MonthlyChart from "../components/monthly-chart";
import YearlyChart from "../components/yearly-chart";
import { useEffect, useState } from "react";

export default function Home() {
  const [clientCount, setClientCount] = useState(null);
  const [invoiceCount, setInvoiceCount] = useState(null);

  useEffect(() => {
    fetch("/mocks/client-count.json")
      .then((res) => res.json())
      .then((data) => {
        setClientCount(data.count);
      });
    fetch("/mocks/invoice-count.json")
      .then((res) => res.json())
      .then((data) => {
        setInvoiceCount(data.count);
      });
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Número de faturas emitidas
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-6 w-6  text-blue-500"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{invoiceCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Clientes ativos
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-6 w-6  text-blue-500"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{clientCount}</div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Receita Mensal</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <MonthlyChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Receita Anual</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <YearlyChart />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

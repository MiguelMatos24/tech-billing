import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  CheckCircle,
  Circle,
  CircleOff,
  Timer,
} from "lucide-react";

export const labels = [
  {
    value: "irs",
    label: "Declaração de IRS",
  },
  {
    value: "irc",
    label: "IRC",
  },
  {
    value: "iva",
    label: "IVA",
  },
  {
    value: "afa",
    label: "Auditoria Financeira Anual:",
  },
  {
    value: "rai",
    label: "Relatório de Auditoria Interna",
  },
];

export const statuses = [
  {
    value: "todo",
    label: "Todo",
    icon: Circle,
  },
  {
    value: "in_progress",
    label: "Iniciada",
    icon: Timer,
  },
  {
    value: "done",
    label: "Completo",
    icon: CheckCircle,
  },
  {
    value: "canceled",
    label: "Cancelada",
    icon: CircleOff,
  },
];

export const priorities = [
  {
    label: "Baixa",
    value: "low",
    icon: ArrowDown,
  },
  {
    label: "Média",
    value: "medium",
    icon: ArrowRight,
  },
  {
    label: "Alta",
    value: "high",
    icon: ArrowUp,
  },
];

export const headers = [
  {
    label: "id",
    value: "Id",
  },
  {
    label: "title",
    value: "Título",
  },
  {
    label: "status",
    value: "Estado",
  },
  {
    label: "priority",
    value: "Prioridade",
  },
  {
    label: "date",
    value: "Data",
  },
];

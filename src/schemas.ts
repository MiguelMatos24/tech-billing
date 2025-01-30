import { z } from "zod";

export const invoiceFormSchema = z.object({
  companyName: z.string().optional(),
  companyVatNumber: z.string().optional(),
  companyAddress: z.string().optional(),
  currency: z.string().optional(),
  description: z.string().optional(),
  quantity: z.string().optional(),
  unitPrice: z.string().optional(),
  totalPrice: z.string().optional(),
});

export const requirementsSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
  date: z.string(),
});

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InvoiceForm from "@/components/invoices/form";
import InvoicePreview from "@/components/invoices/preview";
import { useState } from "react";
import { invoiceFormSchema } from "@/schemas";

export default function Invoices() {
  const [previewData, setPreviewData] = useState<z.infer<
    typeof invoiceFormSchema
  > | null>(null);
  const form = useForm<z.infer<typeof invoiceFormSchema>>({
    resolver: zodResolver(invoiceFormSchema),
    defaultValues: {
      companyName: "",
      companyVatNumber: "",
      companyAddress: "",
      description: "",
      quantity: "",
      unitPrice: "",
      totalPrice: "",
    },
  });

  const handleSubmit = () => {
    setPreviewData(form.getValues());
  };

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="w-full">
        <h2 className="text-3xl font-bold">Simulador de Faturas</h2>
        <InvoiceForm form={form} onSubmit={handleSubmit} />
      </div>
      <div className="w-full">
        {previewData && <InvoicePreview invoiceData={previewData} />}
      </div>
    </div>
  );
}

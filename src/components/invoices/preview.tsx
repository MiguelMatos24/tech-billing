import { invoiceFormSchema } from "@/schemas";
import {
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import { z } from "zod";

const styles = StyleSheet.create({
  layout: {
    height: "100vh",
  },
  page: {
    gap: "5px",
    padding: "20px",
  },
});

type InvoicePreviewProps = {
  invoiceData: z.infer<typeof invoiceFormSchema>;
};

const InvoicePreview = ({ invoiceData }: InvoicePreviewProps) => {
  return (
    <div className="block h-full min-h-[400px]">
      <PDFViewer className="h-full w-full" showToolbar={false}>
        <Document style={styles.layout}>
          <Page size="A4" style={styles.page}>
            <View>
              <Text>Nome da empresa: {invoiceData.companyName}</Text>
            </View>
            <View>
              <Text>NIF: {invoiceData.companyVatNumber}</Text>
            </View>
            <View>
              <Text>Morada: {invoiceData.companyAddress}</Text>
            </View>
            <View>
              <Text>Descrição: {invoiceData.description}</Text>
            </View>
            <View>
              <Text>Quantidade: {invoiceData.quantity}</Text>
            </View>
            <View>
              <Text>Preço por unidade: {invoiceData.unitPrice}</Text>
            </View>
            <View>
              <Text>Preço total: {invoiceData.totalPrice}</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};

export default InvoicePreview;

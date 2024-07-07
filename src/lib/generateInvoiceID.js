export default function generateInvoiceCode() {
  const date = new Date();
  const year = date.getFullYear().toString();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  const randomNumber = Math.floor(100000 + Math.random() * 900000);

  const invoiceCode = `INV-${year}${month}${day}-${randomNumber}`;

  return invoiceCode;
}
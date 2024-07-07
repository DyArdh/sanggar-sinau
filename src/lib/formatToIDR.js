export default function formatToIDR(number) {
  const formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
  });

  const parts = formatter.formatToParts(number);
  return parts.map(part => {
      if (part.type === 'currency') {
          return part.value + ' ';
      }
      return part.value;
  }).join('');
}
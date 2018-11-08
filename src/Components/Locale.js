export function formatPrice(dollar) {
  return dollar.toLocaleString("it-IT", {
    style: "currency",
    currency: "EUR"
  });
}

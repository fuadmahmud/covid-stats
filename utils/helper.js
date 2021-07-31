export function formatNumber(number) {
  if (!number) return "";
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatDate(date, format = "/") {
  if (!date) return "";
  const newDate = new Date(date || "");
  return `${newDate.getDate()}${format}${newDate.getMonth()}${format}${newDate.getFullYear()}`;
}

export function parseValue(value) {
  const newValue = parseInt(value.replace(/\,/g, ""));

  if (!value || Number.isNaN(newValue)) {
    return 0;
  }

  return newValue;
}

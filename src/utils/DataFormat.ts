export const FormatDate = (date: string | Date) => {
  const newDate = new Date(date);
  return newDate.toDateString();
}
export const FormatTime = (date: string | Date) => {
  const newDate = new Date(date);
  const shortTime = newDate.toLocaleTimeString().split(":");
  return shortTime;
}
export function FormatDateStringToHours(dateString: string): string {
  const date = new Date(dateString);
  const hours = date.getUTCHours(); // Usar getHours() si la fecha está en hora local
  const minutes = date.getUTCMinutes(); // Usar getMinutes() si la fecha está en hora local

  // Asegurarse de que las horas y minutos sean dos dígitos
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}hrs`;
}
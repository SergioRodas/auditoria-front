export const getCurrentDateInMexicoTimezone = (): string => {
  // Obtener la fecha actual en UTC
  const currentDateUTC = new Date();

  // Ajustar la fecha para la zona horaria de México (UTC-6)
  const offset = -6;
  const utcTime = currentDateUTC.getTime();
  const mexicoTime = utcTime + (offset * 60 * 60 * 1000);
  const currentDateMexico = new Date(mexicoTime);

  // Formatear la fecha en el formato deseado (YYYY-MM-DD)
  const formattedDate = currentDateMexico.toISOString().split('T')[0];

  return formattedDate;
};

export const getDateOfPreviousDay = () => {
  const currentDateMexico = getCurrentDateInMexicoTimezone();
  const previousDay = new Date(currentDateMexico);
  previousDay.setDate(previousDay.getDate() - 1);
  // Formatear la fecha en el formato deseado (YYYY-MM-DD)
  const formattedDate = previousDay.toISOString().split('T')[0];

  return formattedDate;
};

export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};



// Función para aplicar clases de estilo a las celdas de fecha
export const tileClassName = ({ date, view }: { date: Date; view: string }, isWeekly: boolean) => {
  if (isWeekly) {
    // Validación para búsqueda semanal
    if (view === "month" && date > new Date() || view === "month" && date.getDay() !== 1) {
      return "disabled-date";
    }
  } else {
    // Validación para búsqueda diaria
    if (view === "month" && date > new Date()) {
      return "disabled-date";
    }
  }
  return "";
};

export const findLastMonday = (selectedDate: string): Date => {
  const [year, month, day] = selectedDate.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  // Establecer la hora a medianoche para evitar problemas con la diferencia horaria
  date.setHours(0, 0, 0, 0);
  // Obtener el día de la semana (0 para domingo, 1 para lunes, etc.)
  const dayOfWeek = date.getDay();

  // Si el día es lunes, devolver la misma fecha
  if (dayOfWeek === 1) return date;

  // Calcular la diferencia para retroceder hasta el último lunes
  const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  // Ajustar la fecha
  date.setDate(date.getDate() + diff);

  return date;
};
export default function parseDate(
  date: Date | string | null | undefined,
): Date | null {
  if (!date) return null;

  if (date instanceof Date) return new Date(date);

  if (date.includes("/")) {
    const [day, month, year] = date.split("/");
    date = `${year}-${month}-${day}`;
  }

  if (!date.includes("T")) {
    date = date + "T12:00:00.000Z";
  }

  return new Date(date);
}

import parseDate from "@/utils/parseDate";

export default function sortByDate(
  arr: any[],
  dateField: string,
  direction: "asc" | "desc",
) {
  return arr.sort((a, b) => {
    const aDate = parseDate(a[dateField]);
    if (!aDate) return direction === "desc" ? 1 : -1;
    const bDate = parseDate(b[dateField]);
    if (!bDate) return direction === "desc" ? -1 : 1;
    return direction === "desc"
      ? bDate.getTime() - aDate.getTime()
      : aDate.getTime() - bDate.getTime();
  });
}

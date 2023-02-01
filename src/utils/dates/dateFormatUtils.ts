export const formatWorkDates = (dates: {
  start: string;
  end?: string | null;
}) => {
  const { start, end } = dates;
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : null;
  const startMonth = startDate.toLocaleString("default", { month: "long" });
  const endMonth = endDate
    ? endDate.toLocaleString("default", { month: "long" })
    : null;
  const startYear = startDate.getFullYear();
  const endYear = endDate ? endDate.getFullYear() : null;
  const startString = `${startMonth} ${startYear}`;
  const endString = endMonth ? `${endMonth} ${endYear}` : "Present";
  return `${startString} - ${endString}`;
};

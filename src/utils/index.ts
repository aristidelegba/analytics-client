import { TPeriod } from "@src/types";

export function normalizeDate(period: TPeriod) {
  checkPeriod(period);
  const { format, type, magicValue } = period;
  if (format === "magic") {
    return magicKeyword + magicValue + type;
  }
  if (format === "date") {
  }
}

const magicKeyword = "last";

export function checkPeriod(period: TPeriod) {
  const { format, type, value, magicValue } = period;
  if (!format) throw new Error("period format is required");
  if (format === "magic") {
    if (typeof magicValue !== "string" || typeof magicValue !== "number")
      throw new Error(
        " unexpected Period value for format magic. Must be string|number"
      );
  }
  if (format === "date") {
    if (typeof value !== "object" || !value.start)
      throw new Error(
        " unexpected period value for format date. must be of type {start:string, end:string}"
      );
  }

  // TODO:: check if is valid date
}
function isMagicDate(date: string) {
  return date.includes(magicKeyword);
}

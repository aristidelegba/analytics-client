import { TPeriod } from "@src/types";

export function checkPeriod(period: TPeriod) {
  const { format, value, magicValue } = period;
  if (!format) throw new Error("period format is required");
  if (format === "magic") {
    // if (type !== "day") {
    //   throw new Error(
    //     "Unexpected Period type for format magic. only 'day' is suported"
    //   );
    // }
    if (typeof magicValue !== "string" && typeof magicValue !== "number") {
      throw new Error(
        " unexpected magicValue "+magicValue+" for format magic. Must be string|number"
      );
    }
  }
  if (format === "range") {
    if (typeof value !== "object" || !value.start)
      throw new Error(
        " unexpected period value for format date. must be of type {start:string, end:string}"
      );
  }

  // TODO:: check if is valid date
}

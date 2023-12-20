export type TMatomoConfig = {
  baseUrl: string;
  idSite: number;
  tokenAuth: string;
};

export interface EventCategory {
  // label: string;
  nb_visits: number;
  nb_events: number;
  [key: string]: any;
  // Add other properties here if needed
}

export type Period = "day" | "week" | "month" | "year";
type DateString = string; // Assuming date string format is used

export type MatomoAPIResponse = {
  [key: string]: any;
}; // Adjust the type according to your API response structure

export type MatomoMethodParams = {
  period: Period;
  date: DateString;
  segment?: string;
  [key: string]: any;
};

export type MatomoMethod = (
  params: MatomoMethodParams
) => Promise<MatomoAPIResponse>;

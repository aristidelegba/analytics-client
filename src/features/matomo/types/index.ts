export type TMatomoConfig = {
    baseUrl: string;
    idSite: number;
    tokenAuth: string;
}


export type Period = 'day' | 'week' | 'month' | 'year';
type DateString = string; // Assuming date string format is used

type MatomoAPIResponse = {
  [key: string]: any
}; // Adjust the type according to your API response structure

export type MatomoMethodParams = {
  period: Period;
  date: DateString;
  [key: string]: any;
};

export type MatomoMethod = (params: MatomoMethodParams) => Promise<MatomoAPIResponse>;

/* eslint-disable no-unused-vars */
import axios from "axios";

export const serverUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000"
    : "https://bot.shopinzen.com";

const headers = { Accept: "application/json" };

// auth
export const signInWithGoogle = ({
  requestCode = false,
  clientId,
  scope,
}: {
  clientId: string;
  scope: string[];
  requestCode: boolean;
}) => {
  //   console.log("object :>> ", googleAuthScopes);
  if (window && window.google) {
    return new Promise((resolve, reject) => {
      const googleAccounts = window.google.accounts;
      const client = googleAccounts.oauth2.initCodeClient({
        client_id: clientId,
        scope: scope,
        ux_mode: "popup",
        include_granted_scopes: true,
        access_type: "offline",
        callback: async (response) => {
          console.log("response", response);
          await getAccessTokenFromServer(response)
            .then((e) => resolve(e.data))
            .catch((e) => reject(e));
        },
      });
      if (requestCode) client.requestCode();
    });
  }
};

async function getAccessTokenFromServer({ code }) {
  const serverResponse = await axios.post(
    serverUrl + "/google/auth/get-tokens-from-code",
    {
      code,
      redirectUri: window.location.protocol + "//" + window.location.host,
    },
    { headers }
  );

  return serverResponse as { data: any };
}

// reports
function preParseReportRequestResult(result) {
  let {
    result: { metricHeaders = [], dimensionHeaders = [], rows = [], totals },
  } = result[0];
  //   dimensionHeaders = dimensionHeaders.map((e) => replaceInString(e, "ga:", ""));
  //   metricHeaders = metricHeaders.map((e) => {
  //     return {
  //       ...e,
  //       name: replaceInString(e.name, "ga:", ""),
  //     };
  //   });

  const preCleanedRows = rows.map((row) => {
    let { dimensionValues = [], metricValues = [] } = row;
    dimensionValues = dimensionValues.map((e, i) => ({
      ...dimensionHeaders[i],
      ...e,
    }));
    metricValues = metricValues.map((e, i) => ({
      ...metricHeaders[i],
      ...e,
    }));
    return { dimensionValues, metricValues };
    // return { [dimensions[]]: dimensions[0], value: metrics[0].values[0] };
  });

  const metricsTotals = metricHeaders.reduce((acc, curr, currentIndex) => {
    return {
      ...acc,
      [curr.name]: totals[0]?.metricValues[currentIndex]?.value || 0,
    };
  }, {});
  return {
    metrics: metricHeaders,
    dimensions: dimensionHeaders,
    rows: preCleanedRows,
    metricsTotals: metricsTotals,
  };
  //   console.log("dimensions", preCleanedRows);
}

function getChartDataPerDimensions(options) {
  const { data: providedData, dimension } = options;
  const { rows, dimensions, metrics, metricsTotals } = providedData;
  if (!dimensions.includes(dimension)) return providedData;
  const dimensionIndex = dimensions.indexOf(dimension);

  const data = rows.map((row) => {
    const { dimensionValues, metricValues } = row;
    const values = metricValues.reduce((result, current) => {
      return { ...result, [current.name]: current.value };
    }, {});
    return { name: dimensionValues[dimensionIndex].value, ...values };
  });

  //   console.log('metricsTotals :>> ', metricsTotals);
  let totals = {};
  metrics.forEach(({ name }, i) => {
    // totals[name] = metricsTotals[i]?.value
    totals[name] = data.reduce((acc, curr) => {
      let output = acc;
      //    console.log('curr[key]', name,curr[name])
      if (curr[name]) output += parseInt(curr[name]);
      return output;
    }, 0);
  });
  return { data, totals };
}

export function parseReportAsChartData(reports) {
  const preParsedData = preParseReportRequestResult(reports);
  //   console.log('preParsedData', preParsedData)
  let { rows, dimensions, metricsTotals } = preParsedData;

  dimensions = dimensions.reduce((acc, item) => {
    return {
      ...acc,
      [item.name]: getChartDataPerDimensions({
        data: preParsedData,
        dimension: item,
      }),
    };
  }, {});

  return { dimensions, metricsTotals };
}

// others
function replaceInString(str, replace, by) {
  return str.replace(replace, by);
}
function removePartOfString(str, toBeRemoved) {
  return str.replace(toBeRemoved, "");
}

// date
export function gaDateToJSDate(date, configs = { toLocaleDateString: null }) {
  const { toLocaleDateString } = configs;
  if (!date || date.length < 8) return date;

  const year = date.slice(0, 4);
  const month = date.slice(4, 6);
  const day = date.slice(6, 8);

  const jsDate = new Date(`${year}/${month}/${day}`);

  if (toLocaleDateString) {
    const { locale, options } = toLocaleDateString;
    return jsDate.toLocaleDateString(locale, options);
  }

  return jsDate;
}

export default {
  serverUrl,
  signInWithGoogle,
  getAccessTokenFromServer,
  parseReportAsChartData,
  gaDateToJSDate,
};

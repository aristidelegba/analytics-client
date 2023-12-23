import axios from "axios";

const httpClient: { get: any; post: any } = {
  get: (url: string, { params }: { params: {} }): Promise<any> => {
    return axios.get(url, { params });
  },
  post: (
    url: string,
    body: { [key: string]: any } = {},
    options: { headers?: any } = {}
  ): Promise<any> => {
    return axios.post(url, body, options);
  },
};
// const httpClient = {
//   get: (
//     url: string,
//     { params }: { params: Record<string, any> }
//   ): Promise<any> => {
//     return fetch(`${url}?${new URLSearchParams(params).toString()}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Origin": "*",
//       },
//     }).then((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return response.json();
//     });
//   },
//   post: (
//     url: string,
//     body: { [key: string]: any } = {},
//     options: { headers?: any } = {}
//   ): Promise<any> => {
//     return fetch(`${url}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(body),
//     }).then((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return response.json();
//     });
//   },
// };

export default httpClient;



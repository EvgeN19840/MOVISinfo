import axios, { AxiosResponse } from "axios";

const getNews = (): Promise<AxiosResponse> => {
  const requestUrl = "https://api.tvmaze.com/search/shows?q=boy";
  return axios.get(requestUrl);
};
export default getNews;

import { IApi } from "../models/api.interface";

const API_KEY = process.env.REACT_APP_API_KEY;
const ROOT_URL = process.env.REACT_APP_SERVER_URL;
const DISCOVER_URL = `${ROOT_URL}discover/movie`;
const SEARCH_URL = `${ROOT_URL}search/movie`;
const DETAILS_URL = `${ROOT_URL}movie/`;

const getMovieIdUrl = (movieId: number) => `${DETAILS_URL}${movieId}`;

type SearchParam = {
  query: string
}

type CustomParams = SearchParam | undefined;

const getParms: (customParams?: CustomParams) => URLSearchParams = (customParams: CustomParams) => {
  const params = new URLSearchParams({
    'api_key': API_KEY!,
    'include_adult': 'false'
  });

  if (customParams) {
    Object.entries(customParams).forEach(pair => params.set(pair[0], encodeURIComponent(pair[1])))
  }

  return params;
}

export const Api:IApi = {
  discover: async () => {
    const response = await fetch(`${DISCOVER_URL}?${ getParms().toString() }`);
    return response.json();
  },
  search: async (query) => {
    const response = await fetch(SEARCH_URL, { body: getParms({ query }) });
    return response.json();
  },
  getById: async (id: number) => {
    const response = await fetch(`${getMovieIdUrl(id)}?${getParms().toString()}`);
    return response.json();
  }
};

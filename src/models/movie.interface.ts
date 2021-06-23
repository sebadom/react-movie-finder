export type MovieStatus = 'Rumored' | 'Planned' | 'In Production' | 'Post Production' | 'Released' | 'Canceled';

interface IBaseMovieDTO {
  adult: boolean,
  backdrop_path?: string,
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  title: string,
  video: boolean,
  release_date: string, //2013-08-3,
  vote_average: number
  vote_count: number,
}

export interface IMovie extends IBaseMovieDTO {
  genre_id: number[],
}

export interface IMovieDetails extends IBaseMovieDTO {
  belongs_to_collection?: {} | null,
  budget?: number,
  genres?: { id?: number, name?: string }[],
  name?: string,
  homepage?: string | null,
  imdb_id: string | null,
  production_companies: { id?: number, name?: string, logo_path?: string, origin_country?: string }[],
  production_countries: {iso_3166_1: string, name: string}[],
  revenue?: number,
  runtime: string | null,
  spoken_languages: { iso_639_1: string, name: string}[],
  status: MovieStatus,
  tagline: string
}

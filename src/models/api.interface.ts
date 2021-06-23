import { ApiResponse } from "./api-response.interface";
import { IMovie, IMovieDetails } from "./movie.interface";

export interface IApi {
  discover: () => Promise<ApiResponse<IMovie>>,
  search: (query: string) => Promise<ApiResponse<IMovie>>,
  getById: (id: number) => Promise<IMovieDetails>
}

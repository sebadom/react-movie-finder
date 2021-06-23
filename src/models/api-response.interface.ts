export interface ApiResponse<K> {
  page: number,
  results: K[],
  total_results: number,
  total_pages: number
}

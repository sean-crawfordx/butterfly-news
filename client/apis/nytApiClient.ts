// Front end api call functions for nytimes
// Make a request to the server's proxy route, NOT the external api directly.

import request from 'superagent'
import { News } from '../../models/news'

const rootURL = new URL(`/api/v1`, document.baseURI)

export async function getMovies() {
  const response = await request.get(`${rootURL}/movies`)
  return response.body as News
}

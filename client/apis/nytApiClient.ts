// Front end api call functions for nytimes
// Make a request to the server's proxy route, NOT the external api directly.

import request from 'superagent'
import { News } from '../../models/news'

const rootURL = new URL(`/api/v1`, document.baseURI)

export async function getNews() {
  console.log(`getnewscalled ${rootURL}/proxy/news/test`)
  const response = await request.get(`${rootURL}/proxy/news/test`)
  return response.body as News
}

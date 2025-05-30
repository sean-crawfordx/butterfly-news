// Front end api call functions for nytimes
// Make a request to the server's proxy route, NOT the external api directly.

import request from 'superagent'
// import { News } from '../../models/news'

const rootURL = new URL(`/api/v1`, document.baseURI)

export async function getNews() {
  console.log(`getnewscalled ${rootURL}/proxy/news`)
  const response = await request.get(`${rootURL}/proxy/news`)
  console.log('FULL RESPONSE: ', response)
  console.log(
    'TEST: navigating to relevant data: ',
    response.body.response.docs,
  )

  const articleArray = response.body.response.docs

  const articleObjArr = []

  const maxArticleCount = 10
  let count = 0

  for (const article of articleArray) {
    if (count >= maxArticleCount) break
    const newArticleObi = {
      heading: article.headline.main,
      body: article.snippet,
    }
    articleObjArr.push(newArticleObi)
    count++
  }

  return articleObjArr
}

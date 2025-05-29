// --- gemeniApiClient.ts --- //
// Front end api client functions for google ai
// Make a request to the server's proxy route, NOT the external api directly.
// We may need to import node:path here but I'm still not really sure how/when to be using that.
// Still need to go through this stuff and add typeScript types/interfaces. (e.g. in returning response.body)

// --- AVAILABLE FUNCTIONS --- //
// getAIStory() - RETURNS AN OBJECT WITH TWO PROPERTIES:{heading: THE STORY'S HEADING, body: THE STORY'S BODY}.

import request from 'superagent'
import { isNonNullObject } from '../modules/util'
import { News } from '../../models/news'

const rootURL = new URL('/api/v1', document.baseURI)

export async function getAIStory(date: string, input: string) {
  try {
    const defaultDate = 'today'
    const defaultInput = 'any random event occurring'

    const response = await request.get(
      `${rootURL}/proxy/gemini?date=${date || defaultDate}&input=${input || defaultInput}`,
    )

    return response.body
  } catch (error) {
    let errorLogged: boolean = false

    if (error instanceof Error) {
      if (isNonNullObject(error) && 'response' in error) {
        if (isNonNullObject(error.response) && 'body' in error.response) {
          if (
            isNonNullObject(error.response.body) &&
            'error' in error.response.body
          ) {
            console.error(error.response.body.error)
            errorLogged = true
            throw new Error(`${error.response.body.error}`)
          }
        }
      }
    }

    if (!errorLogged) {
      console.error('Unknown error calling AI API')
      errorLogged = true
      throw new Error('Unknown error calling AI API')
    }
  }
}

export async function getNews() {
  const response = await request.get(`${rootURL}`)
  return response.body as News
}

// Displays a preview for a story
// Will need to take props which we can later use to .map a number of these components with different data from the api.

import { getNews } from '../apis/geminiApiClient'
import { useQuery } from '@tanstack/react-query'

export default function News() {
  const { data, isPending, error } = useQuery({
    queryKey: ['news'],
    queryFn: () => getNews(),
  })

  if (isPending) {
    return <span>Loading...</span>
  }

  if (error) {
    return <span>Error: {error.message}</span>
  }

  return (
    <>
      <h2>News!</h2>
    </>
  )
}

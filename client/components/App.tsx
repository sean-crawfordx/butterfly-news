// All other components will be exported into this component in some way - make use of react routing and <Outlet /> s.

// import FrontEndTesting from './FrontEndTesting'
// import News from './StoryPreviewBox'

import { getNews } from '../apis/nytApiClient'
import { useQuery } from '@tanstack/react-query'

function App() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['news'],
    queryFn: () => getNews(),
  })

  if (isPending) {
    return <p>Loading NYT...</p>
  }

  if (isError) {
    return <p>{error.message}</p>
  }

  console.log('All objects have been returned in an array: ', data)

  return (
    <>
      <div className="app">
        <p>{`${data}`}</p>
      </div>
    </>
  )
}

export default App

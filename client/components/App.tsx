// All other components will be exported into this component in some way - make use of react routing and <Outlet /> s.
import { useState } from 'react'
import FrontEndTesting from './FrontEndTesting'
import News from './StoryPreviewBox'
import Nav from './Nav'
import { useQuery } from '@tanstack/react-query'
import { getNews } from '../apis/nytApiClient'

function App() {
  const [selectedDate, setSelectedDate] = useState('')
  function handleDateChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectedDate(event.target.value)
  }

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
      <hr className="line" />
      <header className="header">
        <div className="headline">
          <div className="icon-left">☰</div>
          <h1>Butterfly News</h1>
        </div>
        <hr className="line" />
        <hr className="line" />
      </header>

      <Nav selectedDate={selectedDate} onDateChange={handleDateChange} />

      <main className="content">
        <section className="featured"></section>

        <section className="grid" id="news-grid">
          {/* News articles will be inserted here */}
        </section>
      </main>

      <div className="app">
        <FrontEndTesting />
        {/* <News /> */}
      </div>
    </>
  )
}

export default App

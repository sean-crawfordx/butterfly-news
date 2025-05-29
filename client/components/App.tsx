// All other components will be exported into this component in some way - make use of react routing and <Outlet /> s.

import FrontEndTesting from './FrontEndTesting'
import News from './StoryPreviewBox'


function App() {
  return (
    <>
    <input className="date" type="date" id="date-input" />

    <main className="content">
      <section className="featured">
        <p className="lead" id="lead">
          Please wait while we fetch the latest news...
        </p>
      </section>

      <section className="grid" id="news-grid">
        {/* <!-- News articles will be inserted here --> */}
      </section>
    </main>
    
      <div className="app">
        <FrontEndTesting />
        <News />
      </div>
    </>
  )
}

export default App


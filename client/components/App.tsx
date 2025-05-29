// All other components will be exported into this component in some way - make use of react routing and <Outlet /> s.

// import FrontEndTesting from './FrontEndTesting'
import News from './StoryPreviewBox'

function App() {
  return (
    <>
      <div className="app">
        {/* <FrontEndTesting /> */}
        <News />
      </div>
    </>
  )
}

export default App

import { useQuery } from '@tanstack/react-query'
import { getAIStory } from '../apis/geminiApiClient'

function FrontEndTesting() {
  const { data, isPending, isError } = useQuery({
    queryKey: ['getAIStory'],
    queryFn: () => getAIStory('test date', 'Any topic'),
  })

  if (isPending) {
    return <p>Pending AI response</p>
  }

  if (isError) {
    return <p>There was an error loading data.</p>
  }

  return (
    <>
      <div className="app">
        <h2>{data.heading}</h2>
        {data.body.split('\n').map((line, i) => {
          return <p key={i}>{line}</p>
        })}
      </div>
    </>
  )
}

export default FrontEndTesting

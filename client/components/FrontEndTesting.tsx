import { useQuery } from '@tanstack/react-query'
import { getAIStory } from '../apis/geminiApiClient'

function FrontEndTesting() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['getAIStory'],
    queryFn: () => getAIStory('test date', 'Any topic'),
  })

  if (isPending) {
    return <p>Pending AI response</p>
  }

  if (isError) {
    return <p>{`Error: ${error.message}`}</p>
  }

  return (
    <>
      <div className="app">
        <p>{`Ai response is ${data}`}</p>
      </div>
    </>
  )
}

export default FrontEndTesting

import { usePlaceholderdata } from '../apis/use-placeholderdata'
import FEInterface from './FEInterface'

function App() {
  const { data, isPending, isError } = usePlaceholderdata()

  if (isPending) return <p>Fetching data from database...</p>

  if (isError)
    return <p>There was an error fetching the data from the database.</p>

  return <FEInterface data={data} />
}

export default App

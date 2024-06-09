import { Data, ValueObject } from '../../models/models'
import ControlPanel from './ControlPanel'
import TableConstructor from './TableConstructor'
import { useState } from 'react'

function App() {
  // use static test data for now - this data will eventually be replaced by data retrieved via custom hook
  const testData: Data = [
    { col1: 'col1val1', col2: 'col2val1', col3: 'col3val1' },
    { col1: 'col1val2', col2: 'col2val2', col3: 'col3val2' },
    { col1: 'col1val3', col2: 'col2val3', col3: 'col3val3' },
  ]

  const allValues: ValueObject = {}

  Object.keys(testData[0]).forEach((key) => {
    allValues[key] = testData.map((tableEntry) => tableEntry[key])
  })

  const [allowedFields, setAllowedFields] = useState(Object.keys(testData[0]))

  const [allowedValues, setAllowedValues] = useState(allValues)

  return (
    <>
      <ControlPanel
        allowedValues={allowedValues}
        setAllowedValues={setAllowedValues}
      />
      <TableConstructor
        data={testData}
        allowedValues={allowedValues}
        allowedFields={allowedFields}
      />
    </>
  )
}

export default App

// return (
//   <>
//     <div>
//       <label>
//         What do we eat?
//         <select>
//           <option value="fruit">Fruit</option>

//           <option value="vegetable">Vegetable</option>

//           <option value="meat">Meat</option>
//         </select>
//       </label>
//     </div>
//   </>
// )

{
  /* <div>
<label>
  What do we eat?
  <select>
    <option value="fruit">Fruit</option>

    <option value="vegetable">Vegetable</option>

    <option value="meat">Meat</option>
  </select>
</label>
</div> */
}

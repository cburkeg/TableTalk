import { Data, ValueObject } from '../../models/models'
import ControlPanel from './ControlPanel'
import TableConstructor from './TableConstructor'
import { useState } from 'react'

function App() {
  // use static test data for now - this data will eventually be replaced by data retrieved via custom hook
  const testData: Data = [
    { fruit: 'banana', meat: 'duck', colour: 'black' },
    { fruit: 'pear', meat: 'duck', colour: 'orange' },
    { fruit: 'orange', meat: 'duck', colour: 'white' },
    { fruit: 'mangosteen', meat: 'duck', colour: 'orange' },
  ]

  const allValues: ValueObject = {}

  Object.keys(testData[0]).forEach((key) => {
    allValues[key] = testData.map((tableEntry) => tableEntry[key])
  })

  const allFields = Object.keys(allValues)

  Object.keys(testData[0]).forEach((key) => {
    allValues[key] = []
    testData.forEach((tableEntry) => {
      if (allValues[key].includes(tableEntry[key]) == false) {
        allValues[key].push(tableEntry[key])
      }
    })
  })

  const [allowedFields, setAllowedFields] = useState(allFields)

  const [allowedValues, setAllowedValues] = useState(allValues)

  const [searchQuery, setSearchQuery] = useState<string>('')
  const [searchField, setSearchField] = useState<string>('')

  return (
    <>
      <ControlPanel
        allowedValues={allowedValues}
        allowedFields={allowedFields}
        setAllowedValues={setAllowedValues}
        setAllowedFields={setAllowedFields}
        setSearchQuery={setSearchQuery}
        setSearchField={setSearchField}
        allValues={allValues}
      />
      <TableConstructor
        data={testData}
        allowedValues={allowedValues}
        allowedFields={allowedFields}
        searchQuery={searchQuery}
        searchField={searchField}
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

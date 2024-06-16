import { FEInterfaceProps, ValueObject } from '../../models/models'
import ControlPanel from './ControlPanel'
import TableConstructor from './TableConstructor'
import { useState } from 'react'

function FEInterface({ data }: FEInterfaceProps) {
  const allValues: ValueObject = {}

  const allFields = Object.keys(data[0])

  allFields.forEach((field) => {
    allValues[field] = []
    data.forEach((tableEntry) => {
      if (allValues[field].includes(tableEntry[field]) == false) {
        allValues[field].push(tableEntry[field])
      }
    })
  })

  const [allowedFields, setAllowedFields] = useState(allFields)

  const [allowedValues, setAllowedValues] = useState(allValues)

  const [searchQuery, setSearchQuery] = useState<string>('')
  const [searchField, setSearchField] = useState<string>(allFields[1])

  return (
    <div className="appcontainer">
      <div className="controlpanelcolumn">
        <ControlPanel
          allowedValues={allowedValues}
          allowedFields={allowedFields}
          setAllowedValues={setAllowedValues}
          setAllowedFields={setAllowedFields}
          setSearchQuery={setSearchQuery}
          setSearchField={setSearchField}
          allValues={allValues}
        />
      </div>
      <div className="tablecolumn">
        <TableConstructor
          data={data}
          allowedValues={allowedValues}
          allowedFields={allowedFields}
          searchQuery={searchQuery}
          searchField={searchField}
        />
      </div>
    </div>
  )
}

export default FEInterface

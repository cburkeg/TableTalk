import { FEInterfaceProps, ValueObject } from '../../models/models'
import ControlPanel from './ControlPanel'
import { EditPanel } from './EditPanel'
import TableConstructor from './TableConstructor'
import { useEffect, useState } from 'react'

function FEInterface({ data }: FEInterfaceProps) {
  const allValues: ValueObject = {}

  const allFields = Object.keys(data[0])

  allFields.forEach((field) => {
    allValues[field] = []
    data.forEach((tableEntry) => {
      if (allValues[field].includes(String(tableEntry[field])) == false) {
        allValues[field].push(String(tableEntry[field]))
      }
    })
  })

  const [allowedFields, setAllowedFields] = useState(allFields)

  const [allowedValues, setAllowedValues] = useState(allValues)

  const [searchQuery, setSearchQuery] = useState<string>('')
  const [searchField, setSearchField] = useState<string>(allFields[1])

  useEffect(() => {
    console.log(allowedValues)
  }, [allowedValues])

  return (
    <div className="appcontainer">
      <h1>Filterable database interface</h1>
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
        <div className="editpanel">
          <EditPanel
            allValues={allValues}
            allowedValues={allowedValues}
            setAllowedValues={setAllowedValues}
            data={data}
          />
        </div>
      </div>
    </div>
  )
}

export default FEInterface

import { useState } from 'react'
import { Data, ValueObject } from '../../models/models'

// editPanelProps: EditPanelProps

interface EditPanelProps {
  allValues: ValueObject
}

export function EditPanel({ allValues }: EditPanelProps) {
  const [displayForm, setDisplayForm] = useState<boolean | string>(false)
  const [id, setID] = useState(Object.keys(allValues)[0])

  function handleEditClick() {
    if (displayForm == 'edit') {
      setDisplayForm(false)
    } else {
      setDisplayForm('edit')
    }
  }

  function handleNewClick() {
    if (displayForm == 'new') {
      setDisplayForm(false)
    } else {
      setDisplayForm('new')
    }
  }

  function handleDeleteClick() {
    console.log('delete stuff')
  }

  return (
    <>
      <select
        key={'editpanelidselect'}
        name="editpanelidselect"
        defaultValue={Object.keys(allValues)[0]}
        onChange={(event) => setID(event.target.value)}
      >
        {allValues[Object.keys(allValues)[0]].map((value) => (
          <option value={value} key={`editpanelidselect` + value}>
            {value}
          </option>
        ))}
      </select>
      <button onClick={handleEditClick}>Edit entry</button>
      <button onClick={handleDeleteClick}>Delete entry</button>
      <button onClick={handleNewClick}>New entry</button>
      <p>{displayForm}</p>
    </>
  )
}

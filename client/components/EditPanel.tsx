import { FormEvent, useState } from 'react'
import { Data, TableEntry, ValueObject } from '../../models/models'
import { useUpdatePlaceholderdata } from '../apis/use-placeholderdata'

// editPanelProps: EditPanelProps

interface EditPanelProps {
  allValues: ValueObject
  data: Data
}

export function EditPanel({ allValues, data }: EditPanelProps) {
  const [displayForm, setDisplayForm] = useState<boolean | string>(false)
  const [id, setID] = useState(allValues[Object.keys(allValues)[0]][0])
  const [editFormData, setEditFormData] = useState<TableEntry>({})
  const updatePlaceholderdata = useUpdatePlaceholderdata()

  function handleEditClick() {
    if (displayForm == 'edit') {
      setDisplayForm(false)
    } else {
      setDisplayForm('edit')
      const dataEntry = data.find(
        (entry) => entry[Object.keys(allValues)[0]] == id,
      )
      setEditFormData({ ...dataEntry })
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

  async function handleMutate(tableEntry: TableEntry) {
    updatePlaceholderdata.mutateAsync(tableEntry)
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    handleMutate(editFormData)
  }

  return (
    <>
      <select
        key={'editpanelidselect'}
        name="editpanelidselect"
        defaultValue={allValues[Object.keys(allValues)[0]][0]}
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
      <form onSubmit={handleSubmit} className="form">
        {displayForm == 'edit' && (
          <>
            <p>The display form state is edit, if you can see this!</p>
            {Object.keys(allValues).map((field) =>
              Object.keys(allValues).indexOf(field) != 0 ? (
                <input
                  key={`editdatafield:${field}`}
                  type="text"
                  name={`editdatafield:${field}`}
                  defaultValue={editFormData[field]}
                  onChange={(event) => {
                    setEditFormData({
                      ...editFormData,
                      [field]: event.target.value,
                    })
                  }}
                />
              ) : (
                <input
                  key={`editdatafield:${field}`}
                  type="text"
                  name={`editdatafield:${field}`}
                  value={editFormData[field]}
                />
              ),
            )}
            <button>Update entry</button>
          </>
        )}
      </form>
    </>
  )
}

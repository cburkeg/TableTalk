import { FormEvent, useState } from 'react'
import {
  Data,
  EditPanelProps,
  TableEntry,
  ValueObject,
} from '../../models/models'
import {
  useDeletePlaceholderdata,
  useUpdatePlaceholderdata,
} from '../apis/use-placeholderdata'

// editPanelProps: EditPanelProps

export function EditPanel({
  allValues,
  allowedValues,
  setAllowedValues,
  data,
}: EditPanelProps) {
  const [displayForm, setDisplayForm] = useState<boolean | string>(false)
  const [id, setID] = useState(allValues[Object.keys(allValues)[0]][0])
  const [editFormData, setEditFormData] = useState<TableEntry>({})
  const updatePlaceholderdata = useUpdatePlaceholderdata()
  const deletePlaceholderdata = useDeletePlaceholderdata()

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
    if (displayForm == 'delete') {
      setDisplayForm(false)
    } else {
      setDisplayForm('delete')
    }
  }

  function handleDeleteSubmit(event: FormEvent) {
    event.preventDefault()
    handleDeleteMutate(id)
    setID([Object.keys(allValues)[0]][0])
  }

  async function handleEditMutate(tableEntry: TableEntry) {
    updatePlaceholderdata.mutateAsync(tableEntry)
  }

  async function handleDeleteMutate(id: number | string) {
    deletePlaceholderdata.mutateAsync(id)
  }

  function handleEditSubmit(event: FormEvent) {
    event.preventDefault()
    handleEditMutate(editFormData)
    const updatedAllowedValues = { ...allowedValues }
    Object.keys(editFormData).forEach((field) => {
      if (!allValues[field].includes(String(editFormData[field]))) {
        updatedAllowedValues[field].push(String(editFormData[field]))
        setAllowedValues(updatedAllowedValues)
      }
    })
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
      <form onSubmit={handleEditSubmit} className="form">
        {displayForm == 'edit' && (
          <>
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
      <form onSubmit={handleDeleteSubmit} className="form">
        {displayForm == 'delete' && (
          <>
            <p>
              Are you sure you would like to delete entry{' '}
              {Object.keys(allValues)[0]}: {id} from the database?
            </p>

            <button>
              Delete entry {Object.keys(allValues)[0]}: {id}
            </button>
          </>
        )}
      </form>
    </>
  )
}

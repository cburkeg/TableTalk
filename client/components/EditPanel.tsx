import { FormEvent, useState } from 'react'
import { EditPanelProps, TableEntry } from '../../models/models'
import {
  useAddPlaceholderdata,
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

  const emptyForm: TableEntry = {}
  Object.keys(allValues).forEach((field, index) => {
    if (index != 0) {
      emptyForm[field] = ''
    }
  })
  const [editFormData, setEditFormData] = useState({})
  const [newFormData, setNewFormData] = useState(emptyForm)
  const updatePlaceholderdata = useUpdatePlaceholderdata()
  const deletePlaceholderdata = useDeletePlaceholderdata()
  const addPlaceholderdata = useAddPlaceholderdata()

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

  function handleDeleteSubmit(event: FormEvent) {
    event.preventDefault()
    handleDeleteMutate(id)
    setID([Object.keys(allValues)[0]][1])
  }

  function handleAddSubmit(event: FormEvent) {
    event.preventDefault()
    handleAddMutate(newFormData)
    const updatedAllowedValues = { ...allowedValues }
    Object.keys(newFormData).forEach((field, index) => {
      if (index != 0) {
        if (!allValues[field].includes(String(newFormData[field]))) {
          updatedAllowedValues[field].push(String(newFormData[field]))
          setAllowedValues(updatedAllowedValues)
        }
      }
    })
  }

  async function handleEditMutate(tableEntry: TableEntry) {
    updatePlaceholderdata.mutateAsync(tableEntry)
  }

  async function handleDeleteMutate(id: number | string) {
    deletePlaceholderdata.mutateAsync(id)
  }

  async function handleAddMutate(newEntry: TableEntry) {
    try {
      const newID = await addPlaceholderdata.mutateAsync(newEntry)
      const updatedAllowedValues = { ...allowedValues }
      Object.keys(newID).forEach((field) => {
        updatedAllowedValues[field].push(String(newID[field]))
      })
      Object.keys(newEntry).forEach((field) => {
        updatedAllowedValues[field].push(String(newEntry[field]))
      })
      setAllowedValues(updatedAllowedValues)
      console.log('THE NEW ID IS: ', newID)
    } catch (error) {
      throw new Error()
    }
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
      <form onSubmit={handleAddSubmit} className="form">
        {displayForm == 'new' && (
          <>
            {Object.keys(allValues).map((field) =>
              Object.keys(allValues).indexOf(field) != 0 ? (
                <input
                  key={`newdatafield:${field}`}
                  type="text"
                  name={`newdatafield:${field}`}
                  defaultValue={field}
                  onChange={(event) => {
                    setNewFormData({
                      ...newFormData,
                      [field]: event.target.value,
                    })
                  }}
                />
              ) : null,
            )}
            <button>Add new entry</button>
          </>
        )}
      </form>
    </>
  )
}

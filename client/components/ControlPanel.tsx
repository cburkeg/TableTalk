import { CheckboxState, ControlPanelProps } from '../../models/models'
import { useState } from 'react'

function ControlPanel({
  allowedValues,
  allowedFields,
  setAllowedValues,
  setAllowedFields,
  setSearchQuery,
  setSearchField,
  allValues,
}: ControlPanelProps) {
  const [valueCheckedboxes, setValueCheckedboxes] = useState<CheckboxState>({})
  const [fieldCheckedboxes, setFieldCheckedboxes] = useState<CheckboxState>({})

  function handleValueCheckboxChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const { name, checked } = event.target

    const [field, value] = name.split(',')

    const updatedValueCheckedboxes = { ...valueCheckedboxes, [name]: checked }
    setValueCheckedboxes(updatedValueCheckedboxes)

    const updatedAllowedValues = { ...allowedValues }
    if (checked == false) {
      const valueIndex = updatedAllowedValues[field].indexOf(value)
      updatedAllowedValues[field].splice(valueIndex, 1)
      setAllowedValues(updatedAllowedValues)
    } else {
      updatedAllowedValues[field].push(value)
      setAllowedValues(updatedAllowedValues)
    }
  }

  function handleFieldCheckboxChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const { name, checked } = event.target

    const field = name.split(',')[1]
    console.log(checked)

    const updatedFieldCheckedboxes = { ...fieldCheckedboxes, [name]: checked }
    setFieldCheckedboxes(updatedFieldCheckedboxes)

    const updatedAllowedFields = [...allowedFields]

    if (checked == false) {
      const fieldIndex = updatedAllowedFields.indexOf(field)
      updatedAllowedFields.splice(fieldIndex, 1)
      setAllowedFields(updatedAllowedFields)
    } else {
      updatedAllowedFields.push(field)
      updatedAllowedFields.sort((field1, field2) => {
        if (
          Object.keys(allValues).indexOf(field1) >
          Object.keys(allValues).indexOf(field2)
        ) {
          return 1
        } else if (
          Object.keys(allValues).indexOf(field1) <
          Object.keys(allValues).indexOf(field2)
        ) {
          return -1
        } else {
          return 0
        }
      })
      setAllowedFields(updatedAllowedFields)
    }
  }

  return (
    <div className="controlpanel">
      {' '}
      <div className="controlpanelsearch">
        <h2>Search</h2>
        <input
          key={'searchqueryinput'}
          type="text"
          name="searchqueryinput"
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <select
          key={'searchfieldinput'}
          name="searchfieldinput"
          onChange={(event) => setSearchField(event.target.value)}
        >
          {Object.keys(allValues).map((key) => (
            <option value={key} key={`searchfieldoption` + key}>
              {key}
            </option>
          ))}
        </select>
      </div>
      <div className="controlpanelfilterbyfield">
        <h2>Display fields</h2>
        {Object.keys(allValues).map((key) => (
          <p key={'fieldpara' + key}>
            {key}
            <input
              key={'fieldcheckbox' + key}
              type="checkbox"
              name={`fieldcheckbox,${key}`}
              checked={
                fieldCheckedboxes[`fieldcheckbox,${key}`] !== undefined
                  ? fieldCheckedboxes[`fieldcheckbox,${key}`]
                  : true
              }
              onChange={handleFieldCheckboxChange}
            />
          </p>
        ))}
      </div>
      <div className="controlpanelfilterbyvaluecontainer">
        <h2>Filter by value</h2>
        {Object.keys(allValues).map((key) => (
          <div
            key={'controlpaneldiv' + key}
            className="controlpanelfilterbyvalue"
          >
            <h3 key={'controlpanelheading' + key}>{key}</h3>
            {allValues[key].map((value) => {
              console.log(`${key},${value}`, valueCheckedboxes)
              return (
                <>
                  <p key={'valuepara' + key + value}>
                    {value != '' ? value : 'Null'}
                    <input
                      key={'valuecheckbox' + key + value}
                      type="checkbox"
                      name={`${key},${value}`}
                      checked={
                        valueCheckedboxes[`${key},${value}`] !== undefined
                          ? valueCheckedboxes[`${key},${value}`]
                          : true
                      }
                      onChange={handleValueCheckboxChange}
                    />
                  </p>
                </>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ControlPanel

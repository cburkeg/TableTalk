import { CheckboxState, ControlPanelProps } from '../../models/models'
import { useState, useEffect } from 'react'

function ControlPanel({
  allowedValues,
  allowedFields,
  setAllowedValues,
  setAllowedFields,
  allValues,
}: ControlPanelProps) {
  const [valueCheckedboxes, setValueCheckedboxes] = useState<CheckboxState>({})
  const [fieldCheckedboxes, setFieldCheckedboxes] = useState<CheckboxState>({})
  useEffect(() => {
    console.log(valueCheckedboxes)
  }, [valueCheckedboxes])

  function handleValueCheckboxChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const { name, checked } = event.target

    const [field, value] = name.split(',')
    console.log(checked)

    const updatedValueCheckedboxes = { ...valueCheckedboxes, [name]: checked }
    setValueCheckedboxes(updatedValueCheckedboxes)

    // console.log(checkedBoxes)

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

    // console.log(checkedBoxes)

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
    <>
      {' '}
      <div>
        <h2>Filter by field</h2>
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
      {Object.keys(allValues).map((key) => (
        <div key={'controlpaneldiv' + key}>
          <h1 key={'controlpanelheading' + key}>{key}</h1>
          {allValues[key].map((value) => {
            console.log(`${key},${value}`, valueCheckedboxes)
            return (
              <>
                <p key={'valuepara' + key + value}>
                  {value}
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
    </>
  )
}

export default ControlPanel

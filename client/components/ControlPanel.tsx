import { CheckboxState, ControlPanelProps } from '../../models/models'
import { useState, useEffect } from 'react'

function ControlPanel({
  allowedValues,
  setAllowedValues,
  allValues,
}: ControlPanelProps) {
  const [checkedBoxes, setCheckedBoxes] = useState<CheckboxState>({})
  useEffect(() => {
    console.log(checkedBoxes)
  }, [checkedBoxes])

  function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, checked } = event.target

    const [field, value] = name.split(',')
    console.log(checked)

    const updatedCheckedBoxes = { ...checkedBoxes, [name]: checked }
    setCheckedBoxes(updatedCheckedBoxes)

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
  return (
    <>
      {Object.keys(allValues).map((key) => (
        <div key={'controlpaneldiv' + key}>
          <h1 key={'controlpanelheading' + key}>{key}</h1>
          {allValues[key].map((value) => {
            console.log(`${key},${value}`, checkedBoxes)
            return (
              <>
                <p key={'valuepara' + key + value}>
                  {value}
                  <input
                    key={'checkbox' + key + value}
                    type="checkbox"
                    name={`${key},${value}`}
                    checked={
                      checkedBoxes[`${key},${value}`] !== undefined
                        ? checkedBoxes[`${key},${value}`]
                        : true
                    }
                    onChange={handleCheckboxChange}
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

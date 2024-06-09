import { ControlPanelProps } from '../../models/models'

function ControlPanel({ allowedValues, setAllowedValues }: ControlPanelProps) {
  return (
    <>
      {Object.keys(allowedValues).map((key) => (
        <div key={'controlpaneldiv' + key}>
          <h1 key={'controlpanelheading' + key}>{key}</h1>
          {allowedValues[key].map((value) => (
            <p key={'valuepara' + key + value}>{value}</p>
          ))}
        </div>
      ))}
    </>
  )
}

export default ControlPanel

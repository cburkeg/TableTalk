import {
  TableConstructorProps,
  TableEntry,
  ValueObject,
} from '../../models/models'
import Row from './Row'

function TableConstructor({
  data,
  allowedFields,
  allowedValues,
}: TableConstructorProps) {
  // Helper fn to check if row should be conditionally rendered
  function showRow(tableEntry: TableEntry, allowedValues: ValueObject) {
    let result = true

    Object.keys(tableEntry).forEach((key) => {
      if (allowedValues[key].includes(tableEntry[key]) == false) {
        result = false
      }
    })

    return result
  }

  if (data && allowedValues && allowedFields.length != 0) {
    return (
      <div>
        <table>
          <thead>
            <tr>
              {allowedFields.map((field) => (
                <th key={'tableheader' + field}>{field}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(
              (tableEntry, index) =>
                showRow(tableEntry, allowedValues) && (
                  <Row
                    key={'rowentry' + index}
                    tableEntry={tableEntry}
                    allowedFields={allowedFields}
                  />
                ),
            )}
          </tbody>
        </table>
      </div>
    )
  } else {
    return <p>No data or values to display - check filter settings</p>
  }
}

export default TableConstructor

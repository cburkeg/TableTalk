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
  searchQuery,
  searchField,
}: TableConstructorProps) {
  // Helper fn to check if row should be conditionally rendered
  function showRow(
    tableEntry: TableEntry,
    allowedValues: ValueObject,
    searchQuery: string,
    searchField: string,
  ) {
    let result = true
    const regex = RegExp(`^${searchQuery}`, 'i')

    Object.keys(tableEntry).forEach((key) => {
      if (allowedValues[key].includes(String(tableEntry[key])) == false) {
        result = false
      }

      if (searchQuery.length != 0) {
        if (!regex.test(String(tableEntry[searchField]))) {
          result = false
        }
      }
    })

    return result
  }

  if (data && allowedValues && allowedFields.length != 0) {
    return (
      <div className="datatablecontainer">
        <table className="datatable">
          <thead className="datatablehead">
            <tr>
              {allowedFields.map((field) => (
                <th key={'tableheader' + field}>{field}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(
              (tableEntry, index) =>
                showRow(
                  tableEntry,
                  allowedValues,
                  searchQuery,
                  searchField,
                ) && (
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

import { RowProps } from '../../models/models'

function Row({ tableEntry, allowedFields }: RowProps) {
  return (
    <tr>
      {allowedFields.map((field: string, index) => (
        <td key={'rowentry' + field + index}>{tableEntry[field]}</td>
      ))}
    </tr>
  )
}

export default Row

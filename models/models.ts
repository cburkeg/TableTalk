export interface TableEntry {
  [key: string]: string
}

export type Data = TableEntry[]

export interface ValueObject {
  [key: string]: string[]
}

export interface ControlPanelProps {
  allowedValues: ValueObject
  setAllowedValues: React.Dispatch<React.SetStateAction<ValueObject>>
}

export interface TableConstructorProps {
  data: Data
  allowedValues: ValueObject
  allowedFields: string[]
}

export interface RowProps {
  tableEntry: TableEntry
  allowedFields: string[]
}

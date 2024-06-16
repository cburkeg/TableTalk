export interface TableEntry {
  [key: string]: string
}

export type Data = TableEntry[]

export interface FEInterfaceProps {
  data: Data
}

export interface ValueObject {
  [key: string]: string[]
}

export interface ControlPanelProps {
  allowedValues: ValueObject
  allowedFields: string[]
  setAllowedValues: React.Dispatch<React.SetStateAction<ValueObject>>
  setAllowedFields: React.Dispatch<React.SetStateAction<string[]>>
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
  setSearchField: React.Dispatch<React.SetStateAction<string>>
  allValues: ValueObject
}

export interface TableConstructorProps {
  data: Data
  allowedValues: ValueObject
  allowedFields: string[]
  searchQuery: string
  searchField: string
}

export interface RowProps {
  tableEntry: TableEntry
  allowedFields: string[]
}

export interface CheckboxState {
  [key: string]: boolean
}

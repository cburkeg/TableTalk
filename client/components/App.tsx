import { Data, ValueObject } from '../../models/models'
import ControlPanel from './ControlPanel'
import TableConstructor from './TableConstructor'
import { useState } from 'react'

function App() {
  // use static test data for now - this data will eventually be replaced by data retrieved via custom hook

  // const testData: Data = [
  //   {
  //     Type: 'ECC81',
  //     Section1: 'Triode (signal)',
  //     Section2: 'Triode (signal)',
  //     FilamentV: '6.3',
  //     FilamentA: '0.3',
  //     Location: 'Box 1',
  //   },
  //   {
  //     Type: 'ECC82',
  //     Section1: 'Triode (signal)',
  //     Section2: 'Triode (signal)',
  //     FilamentV: '6.3',
  //     FilamentA: '0.3',
  //     Location: 'Box 1',
  //   },
  //   {
  //     Type: 'ECC83',
  //     Section1: 'Triode (signal)',
  //     Section2: 'Triode (signal)',
  //     FilamentV: '6.3',
  //     FilamentA: '0.3',
  //     Location: 'Box 1',
  //   },
  //   {
  //     Type: 'ECF200',
  //     Section1: 'Triode (signal)',
  //     Section2: 'Pentode (signal)',
  //     FilamentV: '6.3',
  //     FilamentA: '0.4',
  //     Location: 'Box 2',
  //   },
  //   {
  //     Type: 'ECC88',
  //     Section1: 'Triode (signal)',
  //     Section2: 'Triode (signal)',
  //     FilamentV: '6.3',
  //     FilamentA: '0.4',
  //     Location: 'Box 2',
  //   },
  //   {
  //     Type: 'PFL200',
  //     Section1: 'Pentode (signal)',
  //     Section2: 'Pentode (output)',
  //     FilamentV: '10',
  //     FilamentA: '0.3',
  //     Location: 'Box 2',
  //   },
  //   {
  //     Type: 'PC97',
  //     Section1: 'Triode (signal)',
  //     Section2: '',
  //     FilamentV: '4.5',
  //     FilamentA: '0.3',
  //     Location: 'Box 1',
  //   },
  //   {
  //     Type: 'PL86',
  //     Section1: 'Pentode (output)',
  //     Section2: '',
  //     FilamentV: '15',
  //     FilamentA: '0.3',
  //     Location: 'Box 3',
  //   },
  //   {
  //     Type: 'EL84',
  //     Section1: 'Pentode (output)',
  //     Section2: '',
  //     FilamentV: '6.3',
  //     FilamentA: '0.75',
  //     Location: 'Box 3',
  //   },
  // ]

  const testData: Data = [
    {
      Country: 'Japan',
      City: 'Tokyo',
      Attraction: 'Shibuya Crossing',
      Cuisine: 'Sushi',
      Climate: 'Temperate',
    },
    {
      Country: 'Japan',
      City: 'Kyoto',
      Attraction: 'Fushimi Inari Shrine',
      Cuisine: 'Tempura',
      Climate: 'Temperate',
    },
    {
      Country: 'France',
      City: 'Paris',
      Attraction: 'Eiffel Tower',
      Cuisine: 'Croissant',
      Climate: 'Mild',
    },
    {
      Country: 'France',
      City: 'Nice',
      Attraction: 'Promenade des Anglais',
      Cuisine: 'Bouillabaisse',
      Climate: 'Mediterranean',
    },
    {
      Country: 'USA',
      City: 'New York',
      Attraction: 'Statue of Liberty',
      Cuisine: 'Hot Dog',
      Climate: 'Seasonal',
    },
    {
      Country: 'USA',
      City: 'Los Angeles',
      Attraction: 'Hollywood Sign',
      Cuisine: 'Tacos',
      Climate: 'Mediterranean',
    },
    {
      Country: 'Italy',
      City: 'Rome',
      Attraction: 'Colosseum',
      Cuisine: 'Pasta',
      Climate: 'Mediterranean',
    },
    {
      Country: 'Italy',
      City: 'Venice',
      Attraction: 'Grand Canal',
      Cuisine: 'Seafood',
      Climate: 'Mediterranean',
    },
    {
      Country: 'Brazil',
      City: 'Rio de Janeiro',
      Attraction: 'Christ the Redeemer',
      Cuisine: 'Feijoada',
      Climate: 'Tropical',
    },
    {
      Country: 'Brazil',
      City: 'Sao Paulo',
      Attraction: 'Ibirapuera Park',
      Cuisine: 'Coxinha',
      Climate: 'Tropical',
    },
    {
      Country: 'Australia',
      City: 'Sydney',
      Attraction: 'Sydney Opera House',
      Cuisine: 'Barbecue',
      Climate: 'Subtropical',
    },
    {
      Country: 'Australia',
      City: 'Melbourne',
      Attraction: 'Great Ocean Road',
      Cuisine: 'Meat Pie',
      Climate: 'Temperate',
    },
    {
      Country: 'India',
      City: 'New Delhi',
      Attraction: 'Taj Mahal',
      Cuisine: 'Curry',
      Climate: 'Varied',
    },
    {
      Country: 'India',
      City: 'Mumbai',
      Attraction: 'Gateway of India',
      Cuisine: 'Vada Pav',
      Climate: 'Tropical',
    },
    {
      Country: 'Egypt',
      City: 'Cairo',
      Attraction: 'Pyramids of Giza',
      Cuisine: 'Koshari',
      Climate: 'Arid',
    },
    {
      Country: 'Egypt',
      City: 'Luxor',
      Attraction: 'Valley of the Kings',
      Cuisine: 'Ful Medames',
      Climate: 'Arid',
    },
    {
      Country: 'Spain',
      City: 'Barcelona',
      Attraction: 'Sagrada Familia',
      Cuisine: 'Tapas',
      Climate: 'Mediterranean',
    },
    {
      Country: 'Spain',
      City: 'Madrid',
      Attraction: 'Royal Palace',
      Cuisine: 'Paella',
      Climate: 'Continental',
    },
    {
      Country: 'Canada',
      City: 'Toronto',
      Attraction: 'CN Tower',
      Cuisine: 'Poutine',
      Climate: 'Seasonal',
    },
    {
      Country: 'Canada',
      City: 'Vancouver',
      Attraction: 'Stanley Park',
      Cuisine: 'Sushi',
      Climate: 'Oceanic',
    },
  ]

  const allValues: ValueObject = {}

  const allFields = Object.keys(allValues)

  Object.keys(testData[0]).forEach((key) => {
    allValues[key] = []
    testData.forEach((tableEntry) => {
      if (allValues[key].includes(tableEntry[key]) == false) {
        allValues[key].push(tableEntry[key])
      }
    })
  })

  const [allowedFields, setAllowedFields] = useState(allFields)

  const [allowedValues, setAllowedValues] = useState(allValues)

  const [searchQuery, setSearchQuery] = useState<string>('')
  const [searchField, setSearchField] = useState<string>(
    Object.keys(allValues)[0],
  )

  return (
    <div className="appcontainer">
      <div className="controlpanelcolumn">
        <ControlPanel
          allowedValues={allowedValues}
          allowedFields={allowedFields}
          setAllowedValues={setAllowedValues}
          setAllowedFields={setAllowedFields}
          setSearchQuery={setSearchQuery}
          setSearchField={setSearchField}
          allValues={allValues}
        />
      </div>
      <div className="tablecolumn">
        <TableConstructor
          data={testData}
          allowedValues={allowedValues}
          allowedFields={allowedFields}
          searchQuery={searchQuery}
          searchField={searchField}
        />
      </div>
    </div>
  )
}

export default App

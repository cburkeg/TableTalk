# TableTalk

TableTalk is a front-end web interface for viewing and interacting with data retrieved from a back-end database. It was originally created to categorise and track electronic components in my collection, but it can be used with JSON data of any shape.

The interface is built using TypeScript and React. TanStack Query is used for retrieving and mutating the data from the back-end (implemented using SQLite3 and knex.js in this example.)

## Features at a Glance

- Displays back-end data in an easy-to-read front-end table.
- Individual fields can be hidden or revealed to customise how the data is shown.
- Displayed data can be filtered by value and by field to quickly find the entries you need.
- Includes Regex search functionality to match entries with specific values in specific fields.
- Fully supports Create, Update, and Delete operations.

## How It Works

The front-end interface includes a table that displays the data, a control panel with tools to show/hide fields and filter the displayed data, and an edit panel used to perform CRUD operations on the data. 

The interface is dynamically generated based on the keys and values within the data received from the back-end. This is assumed to be an array of objects (e.g. JSON objects) which all have identical keys. 

The fields used within the interface are extracted from the keys of the first object within the array. The order of these keys determines the ordering of the columns that are displayed in the table of the interface. It is also assumed that the first of these keys is the primary key used in the back-end database. 

The program then loops through each object in data array to extract all possible values that occur for each field. These values are provided to the control panel to dynamically generate a set of checkboxes that are used to filter by value or show/hide fields. 

## Future Improvements

- Enhance the user interface with better styling (e.g. collapsible elements within the control panel)
- Implement pagination of data to deal with larger datasets
- Expand on the Regex search functionality
- Develop an equivalent project where all the filtering and searching is performed on the back-end; contrast the performance for datasets of different sizes

## Getting Started

To get started with TableTalk:

1. clone the repository,
2. install the dependencies,
3. run the data migrations,
4. populate tables with seed data, and
5. run the dev script.

```
git clone https://github.com/yourusername/TableTalk.git
cd TableTalk
npm i
npm run knex migrate:latest
npm run knex seed:run
npm run dev
```

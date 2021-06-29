# 🎥 Cypher

## Intro

Parse and process data from Google Sheets API

## Usage

```js
import parseGoogleSheetsAPI from '@just-baiting/cypher';

const googleApiData = {
  "range": "Project!A1:Z1000",
  "majorDimension": "ROWS",
  "values": [
    ["Task", "Status", "Assignee", "Notes"],
    ["Create sample sheets", "In Progress", "Michael"],
    ["Make money", "In Progress", "Michael"],
  ]
}

const parsedData = parseGoogleSheetsAPI(googleApiData);

/**
 parsedData:
 [
    {
      Task: 'Create sample sheets',
      Status: 'In Progress',
      Assignee: 'Michael',
      Notes: null,
    },
    {
      Task: 'Make money',
      Status: 'In Progress',
      Assignee: 'Michael',
      Notes: null
    },
  ]
 * /
```

### Helpful Links

https://developers.google.com/sheets/api/samples/reading#read_a_single_range

import fs from 'fs';
import path from 'path';
import parseGoogleSheetsAPI from '../src/index';
const helperDir = path.join(__dirname, 'helpers');

describe('test', () => {
  it('sample project sheet', () => {
    const sampleProjectSheets = JSON.parse(
      fs.readFileSync(path.join(helperDir, 'sampleProjectSheets.json'), 'utf-8')
    );

    const expected = [
      {
        Task: 'Create sample sheets',
        Status: 'In Progress',
        Assignee: 'Michael',
        Notes: null
      },
      { Task: 'Make money', Status: 'In Progress', Assignee: 'Michael', Notes: null },
      { Task: 'Play Genshin Impact', Status: 'New', Assignee: 'Tuna', Notes: null },
      {
        Task: 'Stop sleeping early',
        Status: 'In Progress',
        Assignee: 'Tuna',
        Notes: null
      },
      { Task: 'Get a cat', Status: 'Complete', Assignee: 'Dennis', Notes: null },
      { Task: 'Buy a house', Status: 'Complete', Assignee: 'Dennis', Notes: null },
      { Task: 'Get a dog', Status: 'New', Assignee: 'Jeff', Notes: null },
      { Task: 'Learn to code', Status: 'New', Assignee: 'James', Notes: null },
      {
        Task: 'Connect to Google',
        Status: 'Complete',
        Assignee: 'Michael',
        Notes: null
      },
      { Task: 'Use WebAssembly', Status: 'New', Assignee: 'Dennis', Notes: null },
      { Task: 'Make Hung angry', Status: 'Complete', Assignee: 'Tuna', Notes: null },
      { Task: 'Get a job', Status: 'New', Assignee: 'James', Notes: null }
    ];

    const parsedData = parseGoogleSheetsAPI(sampleProjectSheets);

    expect(parsedData).toStrictEqual(expected);
  });
});

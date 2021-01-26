import fs from 'fs';
import path from 'path';
import parseGoogleSheetsAPI from '../src/index';
const helperDir = path.join(__dirname, 'helpers');

describe('test', () => {
  it('testing', () => {
    const sampleProjectSheets = JSON.parse(
      fs.readFileSync(path.join(helperDir, 'sampleProjectSheets.json'), 'utf-8')
    );

    const expected = [
      {
        Task: 'Create sample sheets',
        Status: 'In Progress',
        Assignee: 'Michael',
      },
      { Task: 'Make money', Status: 'In Progress', Assignee: 'Michael' },
      { Task: 'Play Genshin Impact', Status: 'New', Assignee: 'Tuna' },
      {
        Task: 'Stop sleeping early',
        Status: 'In Progress',
        Assignee: 'Tuna',
      },
      { Task: 'Get a cat', Status: 'Complete', Assignee: 'Dennis' },
      { Task: 'Buy a house', Status: 'Complete', Assignee: 'Dennis' },
      { Task: 'Get a dog', Status: 'New', Assignee: 'Jeff' },
      { Task: 'Learn to code', Status: 'New', Assignee: 'James' },
      {
        Task: 'Connect to Google',
        Status: 'Complete',
        Assignee: 'Michael',
      },
      { Task: 'Use WebAssembly', Status: 'New', Assignee: 'Dennis' },
      { Task: 'Make Hung angry', Status: 'Complete', Assignee: 'Tuna' },
      { Task: 'Get a job', Status: 'New', Assignee: 'James' },
    ];

    const parsedData = parseGoogleSheetsAPI(sampleProjectSheets);

    expect(parsedData).toStrictEqual(expected);
  });
});

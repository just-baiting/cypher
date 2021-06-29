interface GoogleSheets {
  range: string;
  majorDimension: string;
  values: any[];
}
interface ParsedData {
  [key: string]: any;
}

export default function parseGoogleSheetsAPI(data: GoogleSheets): ParsedData {
  const { values } = data;
  const headers = values[0];
  const parsedData: ParsedData = [];
  values.shift();

  values.forEach(data => {
    const dataSet: any = {};
    headers.forEach((key: any, index: number) => {
      const value = data[index] || null;
      dataSet[key] = value;
    });
    parsedData.push(dataSet);
  });

  return parsedData;
}

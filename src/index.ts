interface googleSheets {
  range: string;
  majorDimension: string;
  values: any[];
}
interface ParsedData {
  [key: string]: any;
}

export default function parseGoogleSheetsAPI(data: googleSheets): ParsedData {
  const { values } = data;
  const headers = values[0];
  const parsedData: ParsedData = [];
  values.shift();

  values.forEach((data) => {
    const dataSet: any = {};
    data.forEach((value: any, index: number) => {
      const key = headers[index];
      dataSet[key] = value;
    });
    parsedData.push(dataSet);
  });

  return parsedData;
}

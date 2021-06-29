interface GoogleSheets {
    range: string;
    majorDimension: string;
    values: any[];
}
interface ParsedData {
    [key: string]: any;
}
export default function parseGoogleSheetsAPI(data: GoogleSheets): ParsedData;
export {};

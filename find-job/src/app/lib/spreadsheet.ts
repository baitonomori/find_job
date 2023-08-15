// import { GoogleApis, google } from 'googleapis';
// import { Work } from './contents';


// const getSheets = () => {
//   const googleapis = new GoogleApis();
//   const scopes = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
//   const jwt = new googleapis.auth.JWT(
//     process.env.NEXT_PUBLIC_GCP_SERVICEACCOUNT_EMAIL,
//     undefined,
//     (process.env.NEXT_PUBLIC_GCP_SERVICEACCOUNT_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
//     scopes
//   );
//   return google.sheets({ version: 'v4', auth: jwt });
// };

// export const getContents = async (): Promise<Work[]> => {
//   const sheets = getSheets();
//   const response = await sheets.spreadsheets.values.get({
//     spreadsheetId: process.env.NEXT_PUBLIC_SPREADSHEET_ID,
//     range: 'contents',
//   });
//   const rows = response.data.values;
//   if (rows) {
//     return rows.slice(1).map((row) => {
//       return {
//         timestamp: row[0],
//         name: row[3],
//         Elements: row[4],
//         salary: row[5],
//         time: row[6],
//         people: row[7],
//         place: row[8],
//         require: row[9],
//       };
//     });
//   }
//   return [];
// };

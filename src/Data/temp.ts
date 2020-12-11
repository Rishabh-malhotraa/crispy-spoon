type ResultType = 'SummaryLevelResults';
type TestName = 'ModelLevelTest | FactorLevelResults';

type TestType = {
  value: string;
  color: string;
};

type options = 'Train' | 'Test';

type RecordType = {
  [key: string]: string;
  color: string;
}[];

// (Train) Object-of-Array-ofArray-ofObject
// "Records": {
//   "Train":
//   [
//     [
//       { "row_1_col_1_value": 786, "color": "" },
//     ],
//   ],
// }

type response = {
  [key in ResultType]: {
    [key in TestName]: {
      kpi_name: string;
      desc: string;
      summary: {
        [key in options]: TestType;
      };
      Details: {
        data: {
          ColDefinitions: {
            [key in options]: string[];
          };
        };
        Records: {
          [key in options]: Array<RecordType>;
        };
        graphs: string[];
      };
    };
  }[];
};

export default {
  SummaryLevelResults: {
    ModelLevelTests: [
      {
        kpi_name: 'abc',
        desc: 'pqr',
        summary: {
          Train: {
            value: '786',
            color: 'red',
          },
          Test: {
            value: '8976',
            color: 'green',
          },
        },
        Details: {
          data: {
            ColDefinitions: {
              Train: ['col_name', 'col_name2'],
              Test: ['col_name', 'col_name2', 'col_name3'],
            },
            Records: {
              Train: [
                [
                  { row_1_col_1_value: 786, color: '' },
                  { row_1_col_2_value: 786, color: '' },
                ],
                [{ row_2_col_1_value: 786, color: '' }],
              ],
              Test: [
                [
                  { row_1_col_1_value: 786, color: '' },
                  { row_1_col_2_value: 786, color: '' },
                ],
                [{ row_2_col_1_value: 786, color: '' }],
              ],
            },
          },
          graphs: ['/path/g1.png', '/patb/g2.png'],
        },
      },
    ],
  },
};

// "Train":[
//     {
//         [
//             {"row_1_col_1_value":786, "color":""},
//             {"row_1_col_2_value":786, "color":""}
//         ]
//     },
//     {
//         [
//             {"row_2_col_1_value":786, "color":""}
//         ]
//     }
// ],

// --------------------------------------------------------

// const data = {
//   "SummaryLevelResults": {
//     "ModelLevelTests": [
//       {
//         "kpi_name": "abc",
//         "desc": "pqr",
//         "summary": {
//           "Train": { "value": "786", "color": "red" },
//           "Test": { "value": "8976", "color": "green" }
//         },
//         "details": {
//           "data": {
//             "ColDefinitions": { "Train": ["col_name", "col_name2"], "Test": ["col_name", "col_name2", "col_name3"] },
//             "Records": {
//               "Train": [
//                 [{ "row_1_col_1_value": 786, "color": "" }, { "row_1_col_2_value": 786, "color": "" }],
//                 [{ "row_2_col_1_value": 786, "color": "" }]
//               ],
//               "Test": [

//                 [{ "row_1_col_1_value": 786, "color": "" }, { "row_1_col_2_value": 786, "color": "" }],
//                 [{ "row_2_col_1_value": 786, "color": "" }]
//               ]
//             }
//           },
//           "graphs": ["/path/g1.png", "/path/g2.png"]
//         }
//       }
//     ],
//     "FactorLevelTests": [
//       {
//         "kpi_name": "abc",
//         "desc": "pqr",
//         "summary": {
//           "Train": { "value": "786", "color": "red" },
//           "Test": { "value": "8976", "color": "green" }
//         },
//         "details": {
//           "data": {
//             "ColDefinitions": { "Train": ["col_name", "col_name2"], "Test": ["col_name", "col_name2", "col_name3"] },
//             "Records": {
//               "Train": [
//                 { [{ "row_1_col_1_value": 786, "color": "" }, { "row_1_col_2_value": 786, "color": "" }]},
//                 { [{ "row_2_col_1_value": 786, "color": "" }]}
//               ],
//               "Test": [
//                 {
//                   [{ "row_1_col_1_value": 786, "color": "" },
//                     { "row_1_col_2_value": 786, "color": "" }]},
//                 { [{ "row_2_col_1_value": 786, "color": "" }]}
//               ]
//             }
//           },
//           "graphs": ["/path/g1.png", "/path/g2.png"]
//         }
//       }
//     ]
//   }
// }

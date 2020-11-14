// heading of tables
export const heading = ['Section Name', 'KPI Name', 'Description', 'Train Data', 'Test Data'];
// table data-type this would be recieved as a response from the server
export const table = [
  {
    // the id is used as a key for the outer-loop; required by react when rendering a list
    id: '01',
    name: 'ModelLevelTests',
    data: [
      {
        id: '1',
        kpiName: 'Gini Coefficient',
        description: 'measure of statistical dispersion intended to represent the income inequality',
        trainData: {
          value: 36,
          color: '#8bc34a',
        },
        testData: {
          value: 98,
          color: '#e57373',
        },
      },
      {
        id: '2',
        kpiName: 'Gini Coefficient',
        description: 'measure of statistical dispersion intended to represent the income inequality',
        trainData: {
          value: 36,
          color: '#8bc34a',
        },
        testData: {
          value: 98,
          color: '#e57373',
        },
      },
    ],
  },
  {
    // the id is used as a key for the outer-loop; required by react when rendering a list
    id: '02',
    name: 'FactorLevelTest',
    data: [
      {
        id: '1',
        kpiName: 'Gini Coefficient',
        description: 'measure of statistical dispersion intended to represent the income inequality',
        trainData: {
          value: 36,
          color: '#8bc34a',
        },
        testData: {
          value: 98,
          color: '#e57373',
        },
      },
      {
        id: '2',
        kpiName: 'Gini Coefficient',
        description: 'measure of statistical dispersion intended to represent the income inequality',
        trainData: {
          value: 36,
          color: '#8bc34a',
        },
        testData: {
          value: 98,
          color: '#e57373',
        },
      },
    ],
  },
  {
    // the id is used as a key for the outer-loop; required by react when rendering a list
    id: '03',
    name: 'XYXX',
    data: [
      {
        id: '1',
        kpiName: 'Gini Coefficient',
        description: 'measure of statistical dispersion intended to represent the income inequality',
        trainData: {
          value: 36,
          color: '#8bc34a',
        },
        testData: {
          value: 98,
          color: '#e57373',
        },
      },
      {
        id: '2',
        kpiName: 'Gini Coefficient',
        description: 'measure of statistical dispersion intended to represent the income inequality',
        trainData: {
          value: 36,
          color: '#8bc34a',
        },
        testData: {
          value: 98,
          color: '#e57373',
        },
      },
    ],
  },
];

export type TableType = typeof table[0];

// ------------------------------------

// export const table = [
//   {
//     // the id is used as a key for the outer-loop; required by react when rendering a list
//     id: '01',
//     name: 'ModelLevelTests',
//     data: [
//       {
//         id: '1',
//         kpiName: 'Gini Coefficient',
//         description: 'measure of statistical dispersion intended to represent the income inequality',
//         trainData: {
//           value: 36,
//           color: '#8bc34a',
//         },
//         testData: {
//           value: 98,
//           color: '#e57373',
//         },
//       },
//       {
//         id: '2',
//         kpiName: 'Gini Coefficient',
//         description: 'measure of statistical dispersion intended to represent the income inequality',
//         trainData: {
//           value: 36,
//           color: '#8bc34a',
//         },
//         testData: {
//           value: 98,
//           color: '#e57373',
//         },
//       },
//     ],
//   },
// ]

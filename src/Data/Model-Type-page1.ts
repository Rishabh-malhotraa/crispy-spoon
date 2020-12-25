export interface ModelTypeInterface {
  modelType: string;
  function: string;
  outcomeType: string;
  modelUse: string[];
}

export const modelTypeData: ModelTypeInterface[] = [
  {
    modelType: 'Please Select Function First',
    function: '',
    outcomeType: 'Binary',
    modelUse: [''],
  },
  {
    modelType: 'Probability of Default',
    function: 'Risk',
    outcomeType: 'Binary',
    modelUse: [
      'Sustained Transfer Rate',
      'Instantaneous Wave Free Ratio',
      'Internal Rating Based Approach',
      'Suing Customers Operations',
    ],
  },
  {
    modelType: 'Loss of Given Default',
    function: 'Risk',
    outcomeType: 'Continuous',
    modelUse: [
      'Sustained Transfer Rate',
      'Instantaneous Wave Free Ratio',
      'Internal Rating Based Approach',
      'Suing Customers Operations',
    ],
  },
  {
    modelType: 'Transaction',
    function: 'Fraud',
    outcomeType: 'Binary',
    modelUse: ['Suing Customers Operations'],
  },
  {
    modelType: 'Transaction-II',
    function: 'Fraud',
    outcomeType: 'Conituous',
    modelUse: ['Others'],
  },
  {
    modelType: 'Market',
    function: 'Marketing',
    outcomeType: 'Binary',
    modelUse: ['Segmentation'],
  },
  {
    modelType: 'Exposure Of Default',
    function: 'Marketing',
    outcomeType: 'Continuous',
    modelUse: ['REC'],
  },
  {
    modelType: 'Revenue',
    function: 'OthersS',
    outcomeType: 'Continuous',
    modelUse: ['Preferred Provider Network'],
  },
  {
    modelType: 'Expenditure',
    function: 'OthersS',
    outcomeType: 'Binary',
    modelUse: ['Segmentation'],
  },
];

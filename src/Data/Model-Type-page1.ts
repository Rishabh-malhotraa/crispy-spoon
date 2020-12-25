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
    modelType: 'PD',
    function: 'Risk',
    outcomeType: 'Binary',
    modelUse: [
      'Sustained Transfer Rate',
      'Instantaneous Wave Free Ratio',
      'CEC',
      'Internal Rating Based Approach',
      'Suing Customers Operations',
      'OTH',
    ],
  },
  {
    modelType: 'LGD',
    function: 'Risk',
    outcomeType: 'Continuous',
    modelUse: [
      'Sustained Transfer Rate',
      'Instantaneous Wave Free Ratio',
      'CEC',
      'Internal Rating Based Approach',
      'Suing Customers Operations',
      'OTH',
    ],
  },
  {
    modelType: 'Trans',
    function: 'Fraud',
    outcomeType: 'Binary',
    modelUse: ['Suing Customers Operations'],
  },
  {
    modelType: 'Trans-II',
    function: 'Fraud',
    outcomeType: 'Conituous',
    modelUse: ['Others'],
  },
  {
    modelType: 'Marke',
    function: 'Marketing',
    outcomeType: 'Binary',
    modelUse: ['Segmentation'],
  },
  {
    modelType: 'Colla',
    function: 'Marketing',
    outcomeType: 'Continuous',
    modelUse: ['REC'],
  },
  {
    modelType: 'Reven',
    function: 'OthersS',
    outcomeType: 'Continuous',
    modelUse: ['Preferred Provider Network'],
  },
  {
    modelType: 'Expen',
    function: 'OthersS',
    outcomeType: 'Binary',
    modelUse: ['Segmentation'],
  },
];

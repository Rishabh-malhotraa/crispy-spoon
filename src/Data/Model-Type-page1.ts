export interface ModelTypeInterface {
  modelType: string;
  function: string;
  outcomeType: string;
  modelUse: string[];
}

export const modelTypeData: ModelTypeInterface[] = [
  {
    modelType: 'PD',
    function: 'Risk',
    outcomeType: 'Binary',
    modelUse: ['STR', 'IFR', 'CEC', 'ALL', 'IRB', 'SCO', 'OTH'],
  },
  {
    modelType: 'LGD',
    function: 'Risk',
    outcomeType: 'Continuous',
    modelUse: ['STR', 'IFR', 'CEC', 'ALL', 'IRB', 'SCO', 'OTH'],
  },
  {
    modelType: 'Trans',
    function: 'Fraud',
    outcomeType: 'Binary',
    modelUse: ['SCO'],
  },
  {
    modelType: 'Trans-II',
    function: 'Fraud',
    outcomeType: 'Conituous',
    modelUse: ['OTHERR'],
  },
  {
    modelType: 'Marke',
    function: 'Marketing',
    outcomeType: 'Binary',
    modelUse: ['SEG'],
  },
  {
    modelType: 'Colla',
    function: 'Marketing',
    outcomeType: 'Continuous',
    modelUse: ['REC'],
  },
  {
    modelType: 'Reven',
    function: 'Others',
    outcomeType: 'Continuous',
    modelUse: ['PPN'],
  },
  {
    modelType: 'Expen',
    function: 'Other',
    outcomeType: 'Binary',
    modelUse: ['SEG'],
  },
];
export interface Model {
  name: string;
  modelName: string;
  title: string;
  outcome: string;
  dataStructure: string;
  analyticTechnique: string;
  type: string;
}

export const data: Model[] = [
  {
    title: 'Model Level Test',
    name: 'Gini Coefficient',
    type: 'Model Level',
    outcome: 'binary',
    dataStructure: 'Cross Section',
    analyticTechnique: 'Logical Regression',
    modelName: 'PD Model',
  },
];

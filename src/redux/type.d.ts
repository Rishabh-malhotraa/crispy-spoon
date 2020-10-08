// follow CamelCASE strictly
export type Form = {
  function: string;
  outcomeType: string;
  dataStructure: string;
  analyticTechnique: string;
  modelUse: string;
  modelType: string;
  modelStructure: string;
  entity: string;
  businessUnit: string;
  modelTier: string;
  riskType: string;
  eventName: string;
  activityClassification: string;
  assetName: string;
  assetClass: string;
  country: string;
  eventDefination: string;
  modelName: string;
  productName: string;
  portfolio: string;
  developmentObservationMonth: Date;
  developmentObservationWindow: Date;
  developmentPerformanceWindow: Date;
  validationObservationMonth: Date;
  validationObservationWindow: Date;
  validationPerformanceWindow: Date;
};

export type Fields =
  | 'function'
  | 'outcomeType'
  | 'dataStructure'
  | 'analyticTechnique'
  | 'modelUse'
  | 'modelType'
  | 'modelStructure'
  | 'entity'
  | 'businessUnit'
  | 'modelTier'
  | 'riskType'
  | 'eventName'
  | 'activityClassification'
  | 'assetName'
  | 'assetClass'
  | 'country'
  | 'eventDefination'
  | 'modelName'
  | 'productName'
  | 'portfolio'
  | 'developmentObservationMonth'
  | 'developmentObservationWindow'
  | 'developmentPerformanceWindow'
  | 'validationObservationMonth'
  | 'validationObservationWindow'
  | 'validationPerformanceWindow';
export default interface StateInterface {
  formOption: Form;
  kpiOption: {
    value: string;
  };
}

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
  assetClass: string;
  country: string;
  lastValidationDate: string;
  lastMonitoredDate: string;
  productName: string;
  portfolio: string;
  developmentObservationMonth: string;
  developmentObservationWindow: string;
  developmentPerformanceWindow: string;
  validationObservationMonth: string;
  validationObservationWindow: string;
  validationPerformanceWindow: string;
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
  | 'assetClass'
  | 'country'
  | 'lastValidationDate'
  | 'lastMonitoredDate'
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
  eventDefinationOption: {
    eventDefination: string;
  };
  modeNameOption: {
    modeName: string;
  };
}

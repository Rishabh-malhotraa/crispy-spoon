// follow CamelCASE strictly
import { Data } from 'Data/KPI-page1';
import { CharacterDataType, NumericDataType } from 'Data/response';

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

export type KpiType = {
  'Model Level Test': Data[];
  'Factor Level Test': Data[];
  'Statistical Tests | Assumptions': Data[];
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
  eventDefinationOption: {
    eventDefination: string;
  };
  modelNameOption: {
    modelName: string;
  };
  uuidOption: {
    value: string;
  };
  kpiOption: KPIType;
  characterTableOption: {
    characterTableData: { name: string; selection: string }[];
    flag: boolean;
  };
  numericTableOption: {
    numericTableData: { name: string; selection: string }[];
  };
  responseDataOption: {
    characterTableData: CharacterDataType[];
    numericTableData: NumericDataType[];
  };
}

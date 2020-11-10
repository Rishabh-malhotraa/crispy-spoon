export type TestName = 'Model Level Test' | 'Factor Level Test' | 'Statistical Tests | Assumptions';

export interface Model {
  kpiName: string;
  dataStructure: string;
  analyticTechnique: string;
  outcomeType: string;
  modelUse: string;
  modelType: string;
}

export interface KPI {
  test: TestName;
  data: Model[];
}

export interface Data {
  testName: string;
  selected: boolean;
}

/** FORMAT OF ENTERTING ANY NEW KPI
 * KPI variable is an array of object each object containes
 * test name-> "Model level test etc.." & data which contains a list of all
 * the kpis
 * Format of entried in data variable:-
 * { kpiName: '', analyticTechnique: '', dataStructure: '', outcomeType: '' },
 */

// TODOS: add model use and model type to the filtering of kpi, ''
// display only when item type is selected


const Data: KPI[] = [
  {
    test: 'Model Level Test',
    data: [
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Regression', kpiName: 'Plot of Actual v. Predicted Results', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Regression', kpiName: 'ROC Curve', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Regression', kpiName: 'Gini Coefficient / Somers D (SAS)', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Regression', kpiName: 'Hosmer-Lemeshow Test', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Regression', kpiName: 'Conditional Information Entropy Ratio (CIER)', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Regression', kpiName: 'Rank Ordering', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Regression', kpiName: 'Ranking Decile', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Regression', kpiName: 'Maximum Kolmogorov–Smirnov (KS) Statistic', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Regression', kpiName: 'KS Decile', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Regression', kpiName: 'Concordance', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Regression', kpiName: 'Discordance', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Regression', kpiName: 'Ties', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Regression', kpiName: 'Divergence Index', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Regression', kpiName: 'Max Cluster Size of Predicted Score', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Panel', analyticTechnique: 'Regression', kpiName: 'Within R2', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Panel', analyticTechnique: 'Regression', kpiName: 'Between R2', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Panel', analyticTechnique: 'Regression', kpiName: 'Brier Score', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Panel', analyticTechnique: 'Regression', kpiName: 'Within R2', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Panel', analyticTechnique: 'Regression', kpiName: 'Between R2', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Panel', analyticTechnique: 'Regression', kpiName: 'Mean Absolute Percent Error', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Machine Learning', kpiName: 'Variable Importance - dev val comparison', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Machine Learning', kpiName: 'Partial Dependence Plot (PDP)', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Machine Learning', kpiName: 'Individual Conditional Expectation (ICE)', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Machine Learning', kpiName: 'Accumulated Local Effects (ALE) Plot', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Machine Learning', kpiName: 'Local Surrogate (LIME)', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Machine Learning', kpiName: 'SHAP (SHapley Additive exPlanations)', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Machine Learning', kpiName: 'Plot of Actual v. Predicted Results', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Machine Learning', kpiName: 'ROC Curve', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Machine Learning', kpiName: 'Gini Coefficient / Somers D (SAS)', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Machine Learning', kpiName: 'Hosmer-Lemeshow Test', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Machine Learning', kpiName: 'Conditional Information Entropy Ratio (CIER)', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Machine Learning', kpiName: 'Rank Ordering', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Machine Learning', kpiName: 'Ranking Decile', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Machine Learning', kpiName: 'Maximum Kolmogorov–Smirnov (KS) Statistic', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Machine Learning', kpiName: 'KS Decile', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Machine Learning', kpiName: 'Concordance', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Machine Learning', kpiName: 'Discordance', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Machine Learning', kpiName: 'Ties', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Machine Learning', kpiName: 'Divergence Index', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Machine Learning', kpiName: 'Max Cluster Size of Predicted Score', modelUse: '', modelType: ''},
    ],
  },
  {
    test: 'Factor Level Test',
    data: [
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Regression', kpiName: 'Information Value', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Regression', kpiName: 'Characterstics Analysis', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Machine Learning', kpiName: 'Information Value', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Machine Learning', kpiName: 'Characterstics Analysis', modelUse: '', modelType: ''},
    ],
  },
  {
    test: 'Statistical Tests | Assumptions',
    data: [
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Regression', kpiName: 'F/Chi-test on Added Powers of Regressors ', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Regression', kpiName: 'Kolmogorov-Smirnov Test (KS-test)', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Regression', kpiName: 'Correlation Matrix', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Regression', kpiName: 'Variance Inflation Factor (VIF)', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Panel', analyticTechnique: 'Regression', kpiName: 'Condition number', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Machine Learning', kpiName: 'F/Chi-test on Added Powers of Regressors ', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Machine Learning', kpiName: 'Kolmogorov-Smirnov Test (KS-test)', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Machine Learning', kpiName: 'Correlation Matrix', modelUse: '', modelType: ''},
      {outcomeType:'Binary',dataStructure: 'Cross Sectional', analyticTechnique: 'Machine Learning', kpiName: 'Variance Inflation Factor (VIF)', modelUse: '', modelType: ''},
    ],
  },
];

export default Data;
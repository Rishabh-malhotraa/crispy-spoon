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
      {
        kpiName: 'Gini Coefficient',
        analyticTechnique: 'Regression',
        dataStructure: 'Time Series',
        outcomeType: 'Binary',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Accuracy Ratio | F-Measure',
        analyticTechnique: 'Regression',
        dataStructure: 'Panel',
        outcomeType: 'Binary',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'False Positive Rate | True Positive Rate',
        analyticTechnique: 'Regression',
        dataStructure: 'Stacked Panel',
        outcomeType: 'Binary',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Specificity | Sensitivity',
        analyticTechnique: 'Regression',
        dataStructure: 'OTHERS',
        outcomeType: 'Binary',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Precision | Recall',
        analyticTechnique: 'Simulation',
        dataStructure: 'Time Series',
        outcomeType: 'Binary',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Conditional Information Entropy Ratio',
        analyticTechnique: 'Simulation',
        dataStructure: 'Time Series',
        outcomeType: 'Binary',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Hosmer Lemeshow Test',
        analyticTechnique: 'Simulation',
        dataStructure: 'Panel',
        outcomeType: 'Binary',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Breir Score',
        analyticTechnique: 'Regression',
        dataStructure: 'Stacked Panel',
        outcomeType: 'Binary',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Model Discriminatory Power',
        analyticTechnique: 'Simulation',
        dataStructure: 'OTHERS',
        outcomeType: 'Binary',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Rank Ordering',
        analyticTechnique: 'Regression',
        dataStructure: 'Time Series',
        outcomeType: 'Binary',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Rank Decile',
        analyticTechnique: 'Simulation',
        dataStructure: 'Time Series',
        outcomeType: 'Continuous',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Maximum KS',
        analyticTechnique: 'Simulation',
        dataStructure: 'Time Series',
        outcomeType: 'Continuous',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Maximum KS Decile',
        analyticTechnique: 'Simulation',
        dataStructure: 'Panel',
        outcomeType: 'Continuous',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Concordance | Discordance | Ties',
        analyticTechnique: 'Simulation',
        dataStructure: 'Stacked Panel',
        outcomeType: 'Continuous',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Divergence Index',
        analyticTechnique: 'Simulation',
        dataStructure: 'OTHERS',
        outcomeType: 'Continuous',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Population Stability Index',
        analyticTechnique: 'Machine Learning',
        dataStructure: 'Panel',
        outcomeType: 'Continuous',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Lift/Gain Chart',
        analyticTechnique: 'Machine Learning',
        dataStructure: 'Panel',
        outcomeType: 'OTHERS',
        modelUse: '',
        modelType: '',
      },
      // editied till here
      {
        kpiName: 'Adjusted R-Square',
        analyticTechnique: 'Machine Learning',
        dataStructure: 'Panel',
        outcomeType: 'OTHERS',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Mean Absolute Percentage Error(MAPE)',
        analyticTechnique: 'Machine Learning',
        dataStructure: 'Stacked Panel',
        outcomeType: 'OTHERS',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Loss Perecent Captue Ratio',
        analyticTechnique: 'Machine Learning',
        dataStructure: 'Stacked Panel',
        outcomeType: 'OTHERS',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Expected Loss Shortfall',
        analyticTechnique: 'Simulation',
        dataStructure: 'Stacked Panel',
        outcomeType: 'OTHERS',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Confusion Matrix by Count',
        analyticTechnique: 'Simulation',
        dataStructure: 'Stacked Panel',
        outcomeType: 'OTHERS',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Confusion Matrix by Exposure',
        analyticTechnique: 'Simulation',
        dataStructure: 'Stacked Panel',
        outcomeType: 'OTHERS',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Confusion Matrix by Loss',
        analyticTechnique: 'Simulation',
        dataStructure: 'Stacked Panel',
        outcomeType: 'OTHERS',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Augmented Dickey-Fuller (ADF) Test',
        analyticTechnique: 'Simulation',
        dataStructure: 'Stacked Panel',
        outcomeType: 'OTHERS',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Auto Correlation Function(ACF)',
        analyticTechnique: 'Simulation',
        dataStructure: 'Stacked Panel',
        outcomeType: 'OTHERS',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Partial Auto Correlation Funciton (PACF)',
        analyticTechnique: 'Machine Learning',
        dataStructure: 'Stacked Panel',
        outcomeType: 'Continuous',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Durbon Watson (DW) Test',
        analyticTechnique: 'Machine Learning',
        dataStructure: 'Stacked Panel',
        outcomeType: 'Continuous',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: "Peasrson's Linear Correlation Test",
        analyticTechnique: 'Machine Learning',
        dataStructure: 'OTHERS',
        outcomeType: 'Continuous',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Goodness of Fit Test (F-statistics)',
        analyticTechnique: 'Machine Learning',
        dataStructure: 'OTHERS',
        outcomeType: 'Continuous',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Actual vs Predicted Chart',
        analyticTechnique: 'Machine Learning',
        dataStructure: 'OTHERS',
        outcomeType: 'Continuous',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Mean Absolute Percentage Error(MAPE)',
        analyticTechnique: 'Machine Learning',
        dataStructure: 'OTHERS',
        outcomeType: 'Continuous',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Jarque-Bera Test',
        analyticTechnique: 'Machine Learning',
        dataStructure: 'OTHERS',
        outcomeType: 'Continuous',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Breush-Pagan (BP) Test',
        analyticTechnique: 'Machine Learning',
        dataStructure: 'OTHERS',
        outcomeType: 'Continuous',
        modelUse: '',
        modelType: '',
      },
    ],
  },
  {
    test: 'Factor Level Test',
    data: [
      {
        kpiName: 'Characteristic Analysis',
        analyticTechnique: 'Regression',
        dataStructure: 'Time Series',
        outcomeType: 'Binary',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Information Value',
        analyticTechnique: 'Regression',
        dataStructure: 'Time Series',
        outcomeType: 'Binary',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Varaince Inflation Factor(VIF)',
        analyticTechnique: 'Regression',
        dataStructure: 'Stacked Panel',
        outcomeType: 'Binary',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Augmented Dickey-Fuller (ADF) Test',
        analyticTechnique: 'Simulation',
        dataStructure: 'Stacked Panel',
        outcomeType: 'Continuous',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Auto Correlation Function(ACF)',
        analyticTechnique: 'Simulation',
        dataStructure: 'Panel',
        outcomeType: 'Continuous',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Partial Auto Correlation Function (PACF)',
        analyticTechnique: 'Machine Learning',
        dataStructure: 'Panel',
        outcomeType: 'Continuous',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: "Pearson's Linear Correlation Test",
        analyticTechnique: 'Machine Learning',
        dataStructure: 'OTHERS',
        outcomeType: 'OTHERS',
        modelUse: '',
        modelType: '',
      },
    ],
  },
  {
    test: 'Statistical Tests | Assumptions',
    data: [
      {
        kpiName: 'McNemar Test',
        analyticTechnique: 'Machine Learning',
        dataStructure: 'Panel',
        outcomeType: 'Binary',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Sign Test',
        analyticTechnique: 'Machine Learning',
        dataStructure: 'Panel',
        outcomeType: 'Binary',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Bowker Test',
        analyticTechnique: 'Machine Learning',
        dataStructure: 'Time Series',
        outcomeType: 'Binary',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Wilcoxon Test',
        analyticTechnique: 'Machine Learning',
        dataStructure: 'Time Series',
        outcomeType: 'Binary',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 't-Test',
        analyticTechnique: 'Regression',
        dataStructure: 'Time Series',
        outcomeType: 'Continuous',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Cochran Q-Test',
        analyticTechnique: 'Regression',
        dataStructure: 'Time Series',
        outcomeType: 'Continuous',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Fisher Test',
        analyticTechnique: 'Regression',
        dataStructure: 'OTHERS',
        outcomeType: 'Continuous',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Kruskal-Wallis Test',
        analyticTechnique: 'Regression',
        dataStructure: 'OTHERS',
        outcomeType: 'Continuous',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Spearman rank-test',
        analyticTechnique: 'Simulation',
        dataStructure: 'OTHERS',
        outcomeType: 'OTHERS',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Friedman-Test',
        analyticTechnique: 'Simulation',
        dataStructure: 'Stacked Panel',
        outcomeType: 'OTHERS',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Linear Model (ANOVA)',
        analyticTechnique: 'Simulation',
        dataStructure: 'Stacked Panel',
        outcomeType: 'OTHERS',
        modelUse: '',
        modelType: '',
      },
      {
        kpiName: 'Chi-Square test',
        analyticTechnique: 'Simulation',
        dataStructure: 'Stacked Panel',
        outcomeType: 'OTHERS',
        modelUse: '',
        modelType: '',
      },
    ],
  },
];

export default Data;

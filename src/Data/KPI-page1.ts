export type TestName = 'Model Level Test' | 'Factor Level Test' | 'Statistical Tests | Assumptions';

export interface Model {
  kpiName: string;
  dataStructure: string;
  analyticTechnique: string;
  outcomeType: string;
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

const Data: KPI[] = [
  {
    test: 'Model Level Test',
    data: [
      {
        kpiName: 'Gini Coefficient',
        analyticTechnique: 'Regression',
        dataStructure: 'Time Series',
        outcomeType: 'Binary',
      },
      {
        kpiName: 'Accuracy Ratio | F-Measure',
        analyticTechnique: 'Regression',
        dataStructure: 'Panel',
        outcomeType: 'Binary',
      },
      {
        kpiName: 'False Positive Rate | True Positive Rate',
        analyticTechnique: 'Regression',
        dataStructure: 'Stacked Panel',
        outcomeType: 'Binary',
      },
      {
        kpiName: 'Specificity | Sensitivity',
        analyticTechnique: 'Regression',
        dataStructure: 'OTHERS',
        outcomeType: 'Binary',
      },
      {
        kpiName: 'Precision | Recall',
        analyticTechnique: 'Simulation',
        dataStructure: 'Time Series',
        outcomeType: 'Binary',
      },
      {
        kpiName: 'Conditional Information Entropy Ratio',
        analyticTechnique: 'Simulation',
        dataStructure: 'Time Series',
        outcomeType: 'Binary',
      },
      {
        kpiName: 'Hosmer Lemeshow Test',
        analyticTechnique: 'Simulation',
        dataStructure: 'Panel',
        outcomeType: 'Binary',
      },
      {
        kpiName: 'Breir Score',
        analyticTechnique: 'Regression',
        dataStructure: 'Stacked Panel',
        outcomeType: 'Binary',
      },
      {
        kpiName: 'Model Discriminatory Power',
        analyticTechnique: 'Simulation',
        dataStructure: 'OTHERS',
        outcomeType: 'Binary',
      },
      {
        kpiName: 'Rank Ordering',
        analyticTechnique: 'Regression',
        dataStructure: 'Time Series',
        outcomeType: 'Binary',
      },
      {
        kpiName: 'Rank Decile',
        analyticTechnique: 'Simulation',
        dataStructure: 'Time Series',
        outcomeType: 'Continuous',
      },
      {
        kpiName: 'Maximum KS',
        analyticTechnique: 'Simulation',
        dataStructure: 'Time Series',
        outcomeType: 'Continuous',
      },
      {
        kpiName: 'Maximum KS Decile',
        analyticTechnique: 'Simulation',
        dataStructure: 'Panel',
        outcomeType: 'Continuous',
      },
      {
        kpiName: 'Concordance | Discordance | Ties',
        analyticTechnique: 'Simulation',
        dataStructure: 'Stacked Panel',
        outcomeType: 'Continuous',
      },
      {
        kpiName: 'Divergence Index',
        analyticTechnique: 'Simulation',
        dataStructure: 'OTHERS',
        outcomeType: 'Continuous',
      },
      {
        kpiName: 'Population Stability Index',
        analyticTechnique: 'Machine Learning',
        dataStructure: 'Panel',
        outcomeType: 'Continuous',
      },
      {
        kpiName: 'Lift/Gain Chart',
        analyticTechnique: 'Machine Learning',
        dataStructure: 'Panel',
        outcomeType: 'OTHERS',
      },
      // editied till here
      {
        kpiName: 'Adjusted R-Square',
        analyticTechnique: 'Machine Learning',
        dataStructure: 'Panel',
        outcomeType: 'OTHERS',
      },
      {
        kpiName: 'Mean Absolute Percentage Error(MAPE)',
        analyticTechnique: 'Machine Learning',
        dataStructure: 'Stacked Panel',
        outcomeType: 'OTHERS',
      },
      {
        kpiName: 'Loss Perecent Captue Ratio',
        analyticTechnique: 'Machine Learning',
        dataStructure: 'Stacked Panel',
        outcomeType: 'OTHERS',
      },
      {
        kpiName: 'Expected Loss Shortfall',
        analyticTechnique: 'Simulation',
        dataStructure: 'Stacked Panel',
        outcomeType: 'OTHERS',
      },
      {
        kpiName: 'Confusion Matrix by Count',
        analyticTechnique: 'Simulation',
        dataStructure: 'Stacked Panel',
        outcomeType: 'OTHERS',
      },
      {
        kpiName: 'Confusion Matrix by Exposure',
        analyticTechnique: 'Simulation',
        dataStructure: 'Stacked Panel',
        outcomeType: 'OTHERS',
      },
      {
        kpiName: 'Confusion Matrix by Loss',
        analyticTechnique: 'Simulation',
        dataStructure: 'Stacked Panel',
        outcomeType: 'OTHERS',
      },
      {
        kpiName: 'Augmented Dickey-Fuller (ADF) Test',
        analyticTechnique: 'Simulation',
        dataStructure: 'Stacked Panel',
        outcomeType: 'OTHERS',
      },
      {
        kpiName: 'Auto Correlation Function(ACF)',
        analyticTechnique: 'Simulation',
        dataStructure: 'Stacked Panel',
        outcomeType: 'OTHERS',
      },
      {
        kpiName: 'Partial Auto Correlation Funciton (PACF)',
        analyticTechnique: 'Machine Learning',
        dataStructure: 'Stacked Panel',
        outcomeType: 'Continuous',
      },
      {
        kpiName: 'Durbon Watson (DW) Test',
        analyticTechnique: 'Machine Learning',
        dataStructure: 'Stacked Panel',
        outcomeType: 'Continuous',
      },
      {
        kpiName: "Peasrson's Linear Correlation Test",
        analyticTechnique: 'Machine Learning',
        dataStructure: 'OTHERS',
        outcomeType: 'Continuous',
      },
      {
        kpiName: 'Goodness of Fit Test (F-statistics)',
        analyticTechnique: 'Machine Learning',
        dataStructure: 'OTHERS',
        outcomeType: 'Continuous',
      },
      {
        kpiName: 'Actual vs Predicted Chart',
        analyticTechnique: 'Machine Learning',
        dataStructure: 'OTHERS',
        outcomeType: 'Continuous',
      },
      {
        kpiName: 'Mean Absolute Percentage Error(MAPE)',
        analyticTechnique: 'Machine Learning',
        dataStructure: 'OTHERS',
        outcomeType: 'Continuous',
      },
      {
        kpiName: 'Jarque-Bera Test',
        analyticTechnique: 'Machine Learning',
        dataStructure: 'OTHERS',
        outcomeType: 'Continuous',
      },
      {
        kpiName: 'Breush-Pagan (BP) Test',
        analyticTechnique: 'Machine Learning',
        dataStructure: 'OTHERS',
        outcomeType: 'Continuous',
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
      },
      {
        kpiName: 'Information Value',
        analyticTechnique: 'Regression',
        dataStructure: 'Time Series',
        outcomeType: 'Binary',
      },
      {
        kpiName: 'Varaince Inflation Factor(VIF)',
        analyticTechnique: 'Regression',
        dataStructure: 'Stacked Panel',
        outcomeType: 'Binary',
      },
      {
        kpiName: 'Augmented Dickey-Fuller (ADF) Test',
        analyticTechnique: 'Simulation',
        dataStructure: 'Stacked Panel',
        outcomeType: 'Continuous',
      },
      {
        kpiName: 'Auto Correlation Function(ACF)',
        analyticTechnique: 'Simulation',
        dataStructure: 'Panel',
        outcomeType: 'Continuous',
      },
      {
        kpiName: 'Partial Auto Correlation Function (PACF)',
        analyticTechnique: 'Machine Learning',
        dataStructure: 'Panel',
        outcomeType: 'Continuous',
      },
      {
        kpiName: "Pearson's Linear Correlation Test",
        analyticTechnique: 'Machine Learning',
        dataStructure: 'OTHERS',
        outcomeType: 'OTHERS',
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
      },
      {
        kpiName: 'Sign Test',
        analyticTechnique: 'Machine Learning',
        dataStructure: 'Panel',
        outcomeType: 'Binary',
      },
      {
        kpiName: 'Bowker Test',
        analyticTechnique: 'Machine Learning',
        dataStructure: 'Time Series',
        outcomeType: 'Binary',
      },
      {
        kpiName: 'Wilcoxon Test',
        analyticTechnique: 'Machine Learning',
        dataStructure: 'Time Series',
        outcomeType: 'Binary',
      },
      {
        kpiName: 't-Test',
        analyticTechnique: 'Regression',
        dataStructure: 'Time Series',
        outcomeType: 'Continuous',
      },
      {
        kpiName: 'Cochran Q-Test',
        analyticTechnique: 'Regression',
        dataStructure: 'Time Series',
        outcomeType: 'Continuous',
      },
      {
        kpiName: 'Fisher Test',
        analyticTechnique: 'Regression',
        dataStructure: 'OTHERS',
        outcomeType: 'Continuous',
      },
      {
        kpiName: 'Kruskal-Wallis Test',
        analyticTechnique: 'Regression',
        dataStructure: 'OTHERS',
        outcomeType: 'Continuous',
      },
      {
        kpiName: 'Spearman rank-test',
        analyticTechnique: 'Simulation',
        dataStructure: 'OTHERS',
        outcomeType: 'OTHERS',
      },
      {
        kpiName: 'Friedman-Test',
        analyticTechnique: 'Simulation',
        dataStructure: 'Stacked Panel',
        outcomeType: 'OTHERS',
      },
      {
        kpiName: 'Linear Model (ANOVA)',
        analyticTechnique: 'Simulation',
        dataStructure: 'Stacked Panel',
        outcomeType: 'OTHERS',
      },
      {
        kpiName: 'Chi-Square test',
        analyticTechnique: 'Simulation',
        dataStructure: 'Stacked Panel',
        outcomeType: 'OTHERS',
      },
    ],
  },
];

export default Data;

export interface Model {
  modelName: string;
  data: {
    title: string;
    tests: string[];
  }[];
}

export const ModelType: string[] = ['PD Model', 'LGD Model', 'Stress Testing Model'];

/**
 * KPIDATA is an array of objects which containes MODEL TEST inforamation
 */
export const KPIData: Array<Model> = [
  {
    modelName: 'PD Model',
    data: [
      {
        title: 'Model Level Test',
        tests: [
          'Model Accuracy',
          'Gini Coefficient',
          'Accuracy Ratio | F-Measure',
          'False Positive Rate | True Positive Rate',
          'Specificity | Sensitiivity',
          'Precision | Recall',
          'Conditional Information Entropy Ratio',
          'Hosmer Lemeshow Test',
          'Breir Score',
          'Model Discriminatory Power',
          'Rank Ordering',
          'Ranking Decile',
          'Maximum KS',
          'Maximum KS Decile',
          'Concordance | Discordance | Ties',
          'Divergence Index',
        ],
      },
      {
        title: 'Factor Level Test',
        tests: ['Characteristic Analysis', 'Information Value'],
      },
      {
        title: 'Statistical Tests | Assumptions',
        tests: ['Test 1', 'Test 2', 'Test 3'],
      },
    ],
  },
  {
    modelName: 'LGD Model',
    data: [
      {
        title: 'Model Level Test',
        tests: [
          'Population Stability Index',
          'Lift/Gains Chart',
          'Gini Coefficient',
          'Adjusted R-Square',
          'Mean Absolute Percentage Error(MAPE)',
          'Loss Perecent Captue Ratio ',
          'Expected Loss Shortfall',
          'Confusion Matrix by Count',
          'Confusion Matrix by Exposure',
          'Confusion Matrix by Loss',
        ],
      },
      {
        title: 'Factor Level Test',
        tests: ['Characteristic Analysis'],
      },
      {
        title: 'Statistical Tests | Assumptions',
        tests: ['Test 1', 'Test 2', 'Test 3'],
      },
    ],
  },
  {
    modelName: 'Stress Testing Model',
    data: [
      {
        title: 'Model Level Test',
        tests: [
          'Augmented Dickey-Fuller (ADF) Test',
          'Auto Correlation Function(ACF)',
          'Partial Auto Correlation Funciton (PACF)',
          'Durbon Watson (DW) Test',
          "Peasrson's Linear Correlation Test",
          'Goodness of Fit Test (F-statistics)',
          'Actual vs Predicted Chart',
          'Mean Absolute Percentage Error(MAPE)',
          'Jarque-Bera Test',
          'Breusch=Pagan (BP) Test',
        ],
      },
      {
        title: 'Factor Level Test',
        tests: [
          'Varaince Inflation Factor(VIF)',
          'Augmented Dickey-Fuller (ADF) Test',
          'Auto Correlation Function(ACF)',
          'Partial Auto Correlation Function (PACF)',
          "Pearson's Linear Correlation Test",
        ],
      },
      {
        title: 'Statistical Tests | Assumptions',
        tests: ['Test 1', 'Test 2', 'Test 3'],
      },
    ],
  },
];

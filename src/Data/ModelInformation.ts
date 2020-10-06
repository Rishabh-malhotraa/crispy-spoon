export const modelDimension = {
  heading: 'Model Dimension',
  data: [
    {
      name: 'Function',
      options: ['Risk', 'Financial Crime', 'Fraud', 'Marketing', 'OTHERS'],
    },
    {
      name: 'Outcome Type',
      options: ['Binary', 'Continuous', 'OTHERS'],
    },
    {
      name: 'Data Structure',
      options: ['Time Series', 'Panel', 'Stacked Panel', 'OTHERS'],
    },

    {
      name: 'Analytic Technique',
      options: ['Regression', 'Simulation', 'Machine Learing'],
    },
  ],
};
/**
 * Dropdown information for Model Use -> if the function is Risk the options would be ['LOS','STR'...etc]
 */
export const modelUseData = {
  name: 'Model Use',
  collection: [
    {
      type: 'Risk',
      options: ['LOS', 'STR', 'IFR', 'CEC', 'ALL', 'IRB'],
    },
    {
      type: 'Financial Crime',
      options: ['FRA', 'AML', 'OTHERS'],
    },
    {
      type: 'Marketing',
      options: ['PRO', 'CRO', 'SEG', 'REC', 'OTHERS'],
    },
    {
      type: 'Fraud',
      options: ['SCO', 'OTHERS'],
    },
    {
      type: 'OTHERS',
      options: ['PPN', 'BAL', 'PRE', 'OTHERS'],
    },
  ],
};

export const modelSpecification = {
  heading: 'Model Specifics',
  data: [
    {
      name: 'Type of Model',
      options: ['Model 1', 'Model 2', 'Model 3', 'Model 4', 'Model 5'],
    },
    {
      name: 'Model Structure',
      options: ['1', '2', '3'],
    },
    {
      name: 'Entity',
      options: ['0', '1'],
    },
    {
      name: 'Business Unit',
      options: ['0', '1', '3'],
    },
    {
      name: 'Model Tier',
      options: ['0', '1', '2'],
    },
  ],
};
export const riskInfo = {
  data: [
    {
      name: 'Risk Type',
      options: ['PlaceHolder 1', '2'],
    },
    {
      name: 'Event Name',
      options: ['PlaceHolder 1', '2'],
    },
  ],
};

export default { modelDimension, modelSpecification, modelUseData, riskInfo };

/**
 * Details about the dropdown menu and its options
 * heading : Model Dimension | Model Specifics
 * name -> dropdown label
 * options-> options which can be selected in that dropdown
 * */
const modelDimension = {
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

const modelSpecification = {
  heading: 'Model Specifics',
  data: [
    {
      name: 'Model Type -II',
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
const modelInformation = {
  heading: 'Model Information',
  data: [
    {
      name: 'Activity Classification',
      options: ['1', '2', '3'],
    },
    {
      name: 'Asset Class',
      options: ['1', '2', '3'],
    },
    {
      name: 'Product Name',
      options: ['0', '1'],
    },
    {
      name: 'Protfolio',
      options: ['0', '1', '3'],
    },
  ],
};

/**
 * Dropdown information for Model Use
 * Show different options for different kind of function
 * eg: if the function is Risk the options would be ['LOS','STR'...etc]
 * Make sure options for modelUse in Model-Information.ts and Model-Type are same(check spelling)
 */
const modelUseData = {
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

export default { modelDimension, modelSpecification, modelUseData, modelInformation };

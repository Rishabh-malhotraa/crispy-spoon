/* eslint-disable @typescript-eslint/naming-convention */
const validation_data_label = [{ title: 'Last Validation Date' }, { title: 'Last Montiored Date' }];

const dropdowndata_model_related_information = [
  { title: 'Activity Classification', options: ['I', 'II', 'III'] },
  { title: 'Validation Frequency', options: ['Monthly', 'Quaterly', 'Yearly'] },
  {
    title: 'Monitoring  Frequency',
    options: ['Monthly', 'Quaterly', 'Yearly'],
  },
  { title: 'Composition', options: ['1', '2', '3'] },
  { title: 'Entity', options: ['1', '2', '3'] },
  { title: 'Buisness Unit', options: ['1', '2', '3'] },
  { title: 'Model Owner', options: ['1', '2', '3'] },
  { title: 'Validation Head', options: ['1', '2', '3'] },
  { title: 'Model Tier', options: ['1', '2', '3'] },
];
const dropdowndata_product_related_information = [
  { title: 'Asses Class', options: ['I', 'II', 'III'] },
  { title: 'Sub Asset Class', options: ['Monthly', 'Quaterly', 'Yearly'] },
  { title: 'Product Name', options: ['1', '2', '3'] },
  { title: 'Product Life Stage', options: ['1', '2', '3'] },
  { title: 'Geography', options: ['1', '2', '3'] },
  { title: 'Country', options: ['1', '2', '3'] },
  { title: 'Portfolio', options: ['1', '2', '3'] },
];
const dropdowndata_risk_related_information = [
  { title: 'Risk Type', options: ['I', 'II', 'III'] },
  { title: 'Buisness Outcome', options: ['Monthly', 'Quaterly', 'Yearly'] },
  { title: 'Event Name', options: ['1', '2', '3'] },
  { title: 'Analytical Technique', options: ['1', '2', '3'] },
];

const textfield_risk_related_information = ['Observation Month', 'Observation Window', 'Performance Window'];

export {
  validation_data_label,
  dropdowndata_model_related_information,
  dropdowndata_product_related_information,
  dropdowndata_risk_related_information,
  textfield_risk_related_information,
};

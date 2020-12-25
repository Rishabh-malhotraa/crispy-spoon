import React, { useState } from 'react';
import MultiSelect from 'react-multi-select-component';

const Example: React.FC = () => {
  const options = [
    { label: 'The website is not conenected with the backend api', value: 'strawberry', disabled: true },
    { label: 'Placeholder', value: 'grapes' },
    { label: 'Needs to be fetched from API', value: 'mango' },
    { label: 'Watermelon 🍉', value: 'watermelon' },
    { label: 'Placeholder', value: 'grapes' },
    { label: 'Placeholder', value: 'grapes' },
    { label: 'Placeholder', value: 'grapes' },
    { label: 'Placeholder', value: 'grapes' },
  ];

  const [selected, setSelected] = useState([]);

  return (
    <div style={{}}>
      <MultiSelect options={options} value={selected} onChange={setSelected} labelledBy="Select" />
    </div>
  );
};

export default Example;

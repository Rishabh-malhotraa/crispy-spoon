import React, { useState } from 'react';
import MultiSelect from 'react-multi-select-component';

const Example: React.FC = () => {
  const options = [
    { label: 'Grapes 🍇', value: 'grapes' },
    { label: 'Mango 🥭', value: 'mango' },
    { label: 'Strawberry 🍓', value: 'strawberry', disabled: true },
    { label: 'Watermelon 🍉', value: 'watermelon' },
    { label: 'Pear 🍐', value: 'pear' },
    { label: 'Apple 🍎', value: 'apple' },
    { label: 'Tangerine 🍊', value: 'tangerine' },
    { label: 'Pineapple 🍍', value: 'pineapple' },
    { label: 'Pineapple 🍍', value: 'pineapple' },
    { label: 'Pineapple 🍍', value: 'pineapple' },
    { label: 'Pineapple 🍍', value: 'pineapple' },
    { label: 'Pineapple 🍍', value: 'pineapple' },
    { label: 'Pineapple 🍍', value: 'pineapple' },
    { label: 'Pineapple 🍍', value: 'pineapple' },
    { label: 'Pineapple 🍍', value: 'pineapple' },
    { label: 'Pineapple 🍍', value: 'pineapple' },
    { label: 'Pineapple 🍍', value: 'pineapple' },
    { label: 'Pineapple 🍍', value: 'pineapple' },
    { label: 'Pineapple 🍍', value: 'pineapple' },
    { label: 'Peach 🍑', value: 'peach' },
  ];

  const [selected, setSelected] = useState([]);

  return (
    <div style={{}}>
      <MultiSelect options={options} value={selected} onChange={setSelected} labelledBy="Select" />
    </div>
  );
};

export default Example;

export interface TableModel {
  heading: string[];
  data: {
    variableName: string;
    train: {
      n: string;
      missing: string;
      option3: string;
      option4: string;
    };
    test: {
      n: string;
      missing: string;
      option3: string;
      option4: string;
    };
    role?: string;
  }[];
}

const numericVariable: TableModel = {
  heading: [
    'Variable',
    '#N',
    'Missing%',
    'Average',
    'Standard Deviation',
    '#N',
    'Missing%',
    'Average',
    'Standard Deviation',
    'Role',
  ],
  data: [
    {
      variableName: 'Variable 1',
      train: {
        n: '12',
        missing: '12%',
        option3: '12',
        option4: '123',
      },
      test: {
        n: '1',
        missing: '1%',
        option3: ' 123',
        option4: '1',
      },
      role: 'Segmentation Variable',
    },
    {
      variableName: 'Variable 1',
      train: {
        n: '12',
        missing: '12%',
        option3: '12',
        option4: '123',
      },
      test: {
        n: '1',
        missing: '1%',
        option3: ' 123',
        option4: '1',
      },
      role: 'Business Interested Segment',
    },
  ],
};
// TODOS: change avergae to distinct values
// TODOS: NO "standard deviation" and "top 3" values for character tabl

const characterVariable: TableModel = {
  heading: [
    'Variable',
    '#N',
    'Missing%',
    'Average',
    'Standard Deviation',
    '#N',
    'Missing%',
    '#Distinct Values',
    'Top 3 Values',
    'Role',
  ],
  data: [
    {
      variableName: 'Variable 1',
      train: {
        n: '12',
        missing: '12%',
        option3: '12',
        option4: '123',
      },
      test: {
        n: '1',
        missing: '1%',
        option3: ' 123',
        option4: '1',
      },
    },
    {
      variableName: 'Variable 1',
      train: {
        n: '12',
        missing: '12%',
        option3: '12',
        option4: '123',
      },
      test: {
        n: '1',
        missing: '1%',
        option3: ' 123',
        option4: '1',
      },
    },
  ],
};

export { characterVariable, numericVariable };

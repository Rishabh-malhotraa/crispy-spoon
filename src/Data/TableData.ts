// Type Casting
interface TableElement {
  variableName: string;
  variableData: {
    train: {
      n: number;
      missingPercentage: number;
      average: number;
      standardDeviation: number;
    };
    test: {
      missingPercentage: number;
      average: number;
      standardDeviation: number;
    };
  };
  role: string[];
}

// tableData is an array of type TableElement

const tableData: Array<TableElement> = [
  {
    variableName: 'variable 1',
    variableData: {
      train: {
        n: 1,
        missingPercentage: 5,
        average: 24,
        standardDeviation: 1,
      },
      test: {
        missingPercentage: 5,
        average: 24,
        standardDeviation: 1,
      },
    },
    role: ['role 1', 'role 2', 'role 3'],
  },
  {
    variableName: 'variable 2',
    variableData: {
      train: {
        n: 1,
        missingPercentage: 5,
        average: 24,
        standardDeviation: 1,
      },
      test: {
        missingPercentage: 5,
        average: 24,
        standardDeviation: 1,
      },
    },
    role: ['role 1', 'role 2', 'role 3'],
  },
];

export default tableData;

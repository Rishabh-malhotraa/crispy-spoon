// Type Casting
interface TableElement {
  variableName: string;
  variableData: {
    train: {
      n: number;
      missingPercentage: number;
      distinctValues: number;
      top3Values: number;
    };
    test: {
      n: number;
      missingPercentage: number;
      distinctValues: number;
      top3Values: number;
    };
  };
  role: string[];
}

// tableData is an array of type TableElement

const tableData: Array<TableElement> = [
  {
    variableName: "variable 1",
    variableData: {
      train: {
        n: 1,
        missingPercentage: 5,
        distinctValues: 1,
        top3Values: 1,
      },
      test: {
        n: 1,
        missingPercentage: 5,
        distinctValues: 1,
        top3Values: 1,
      },
    },
    role: ["role 1", "role 2", "role 3"],
  },
  {
    variableName: "variable 2",
    variableData: {
      train: {
        n: 1,
        missingPercentage: 5,
        distinctValues: 1,
        top3Values: 1,
      },
      test: {
        n: 1,
        missingPercentage: 5,
        distinctValues: 1,
        top3Values: 1,
      },
    },
    role: ["role 1", "role 2", "role 3"],
  },
];

export default tableData;

// Type Casting
export interface TableElement {
  variableName: string;
  variableData: {
    train: {
      n: number;
      missingPercentage: number;
      distinctValues: number;
    };
    test: {
      n: number;
      missingPercentage: number;
      distinctValues: number;
    };
  };
}

/**
 *
 */

// The data should be an array of objects
// each object should have the same interface as the one mentioned aboved
// varaibleName -> denotes the name of the variable
// Varaible data is a nested object containing information about train and test variables
export const NumericVairableData: Array<TableElement> = [
  {
    variableName: 'variable 1',
    variableData: {
      train: {
        n: 1,
        missingPercentage: 5,
        distinctValues: 1,
      },
      test: {
        n: 1,
        missingPercentage: 5,
        distinctValues: 1,
      },
    },
  },
  {
    variableName: 'variable 2',
    variableData: {
      train: {
        n: 1,
        missingPercentage: 5,
        distinctValues: 1,
      },
      test: {
        n: 1,
        missingPercentage: 5,
        distinctValues: 1,
      },
    },
  },
];

export const CharacterVariableData: Array<TableElement> = [
  {
    variableName: 'variable 1',
    variableData: {
      train: {
        n: 1,
        missingPercentage: 5,
        distinctValues: 1,
      },
      test: {
        n: 1,
        missingPercentage: 5,
        distinctValues: 1,
      },
    },
  },
  {
    variableName: 'variable 2',
    variableData: {
      train: {
        n: 1,
        missingPercentage: 5,
        distinctValues: 1,
      },
      test: {
        n: 1,
        missingPercentage: 5,
        distinctValues: 1,
      },
    },
  },
];

export interface CharacterDataType {
  variableName: string;
  test: {
    n: string;
    missing: string;
    distinctCatergories: string;
  };
  train: {
    n: string;
    missing: string;
    distinctCatergories: string;
  };
}

export interface NumericDataType {
  variableName: string;
  test: {
    n: string;
    missing: string;
    mean: string;
    deviation: string;
  };
  train: {
    n: string;
    missing: string;
    mean: string;
    deviation: string;
  };
}

export const response = {
  uuid: '',
  DA_Num_Train: {
    Data: [
      {
        VAR_NAME: 'abc',
        // #N
        TOTAL_OBS: '9243.0',
        // mising %
        MISSING_PERCENT: '0.0',
        // mean
        MEAN: '0.04457603591907389',
        // std_dev
        STD_DEV: '0.07241846163561709',
      },
      {
        VAR_NAME: 'abc_1_1',
        TOTAL_OBS: '9243.0',
        MISSING_PERCENT: '0.0',
        MEAN: '-0.2108979768473439',
        STD_DEV: '0.5462327499686372',
      },
    ],
  },
  DA_Num_Test: {
    Data: [
      {
        VAR_NAME: 'abc',
        TOTAL_OBS: '9243.0',
        MISSING_PERCENT: '0.0',
        MEAN: '0.04457603591907389',
        STD_DEV: '0.07241846163561709',
      },
      {
        VAR_NAME: 'abc_1_1',
        TOTAL_OBS: '9243.0',
        MISSING_PERCENT: '0.0',
        MEAN: '-0.2108979768473439',
        STD_DEV: '0.5462327499686372',
      },
    ],
  },
  DA_Char_Train: {
    Data: [
      {
        VAR_NAME: 'pqr',
        TOTAL_OBS: '5453',
        MISSING_PERCENT: '0.41004003029319486',
        DISTINCT_CATEGORIES: '1',
      },
      { VAR_NAME: 'asdf', TOTAL_OBS: '9243', MISSING_PERCENT: '0.0', DISTINCT_CATEGORIES: '3' },
    ],
  },
  DA_Char_Test: {
    Data: [
      {
        VAR_NAME: 'pqr',
        TOTAL_OBS: '5453',
        MISSING_PERCENT: '0.41004003029319486',
        DISTINCT_CATEGORIES: '1',
      },
      { VAR_NAME: 'asdf', TOTAL_OBS: '9243', MISSING_PERCENT: '0.0', DISTINCT_CATEGORIES: '3' },
    ],
  },
};

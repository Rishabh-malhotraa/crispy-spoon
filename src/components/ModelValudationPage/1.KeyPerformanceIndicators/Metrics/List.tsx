/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import React, { useEffect } from 'react';
import Chip from '@material-ui/core/Chip';

import { v4 as uuid } from 'uuid';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { lightGreen, red } from '@material-ui/core/colors';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import { Model, TestName } from 'Data/KPI-page1';
import { useDispatch, useSelector } from 'react-redux';
import { selectForm } from 'redux/slices/formSlice';
import { onKpiSelect, selectKpi, onKpiDelete } from 'redux/slices/KPISlice';

const colorTheme = createMuiTheme({
  palette: {
    primary: {
      main: lightGreen[300],
    },
    secondary: {
      main: red[200],
    },
  },
});

interface Data {
  testName: string;
  selected: boolean;
}

interface AppProps {
  title: TestName;
  data: Model[];
}

const List: React.FC<AppProps> = ({ title, data }) => {
  const formState = useSelector(selectForm);
  const kpiState = useSelector(selectKpi);
  const dispatch = useDispatch();

  const checked = kpiState[title];

  // get the KPI data array from the dropdown menu thingy!!!

  useEffect(() => {
    let tempKPIList: Model[] = data;
    let tempKPIList1: Model[] = data;
    let tempKPIList2: Model[] = data;
    let tempKPIList3: Model[] = data;

    if (formState.outcomeType) {
      tempKPIList1 = data.filter((element: Model) => {
        if (element.outcomeType === formState.outcomeType) return element;
      });
    }
    if (formState.dataStructure) {
      tempKPIList2 = data.filter((element) => {
        if (element.dataStructure === formState.dataStructure) return element;
      });
    }
    // checks f
    if (formState.analyticTechnique) {
      tempKPIList3 = data.filter((element) => {
        if (element.analyticTechnique === formState.analyticTechnique) return element;
      });
    }

    // console.log('tempKPIList1->');
    // console.log(tempKPIList1);
    // console.log('tempKPIList2->');
    // console.log(tempKPIList2);
    // console.log('tempKPIList3->');
    // console.log(tempKPIList3);
    // console.log('tempKPIList->');
    // console.log(tempKPIList);
    tempKPIList = tempKPIList1.filter((value) => tempKPIList2.includes(value));
    tempKPIList = tempKPIList.filter((value) => tempKPIList3.includes(value));

    const newArray: Data[] = tempKPIList.map((element: Model) => {
      return { testName: element.kpiName, selected: true };
    });
    dispatch(onKpiSelect({ field: title, value: newArray }));
  }, [formState.outcomeType, formState.analyticTechnique, formState.dataStructure, dispatch, data, title]);

  return (
    <ThemeProvider theme={colorTheme}>
      <div>
        {checked.map((element, index) => {
          return (
            <Chip
              key={uuid()}
              label={element.testName}
              deleteIcon={element.selected ? <CheckCircleRoundedIcon /> : <CancelRoundedIcon />}
              color={element.selected ? 'primary' : 'secondary'}
              style={{
                margin: '4px',
                fontWeight: 600,
                fontSize: '14px',
                color: 'rgba(0, 0, 0, 0.7)',
              }}
              onDelete={() => {
                dispatch(onKpiDelete({ field: title, index }));
              }}
            />
          );
        })}
      </div>
    </ThemeProvider>
  );
};
export default List;

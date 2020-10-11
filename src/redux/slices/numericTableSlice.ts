import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import StateInterface from 'redux/type';

type ElementProps = { name: string; selection: string };
interface AppProps {
  index: number;
  value: ElementProps;
}

const numericTableSlice = createSlice({
  name: 'numericTable',
  initialState: {
    numericTableData: [] as ElementProps[],
    flag: false,
  },
  reducers: {
    onSelect: (state, action: PayloadAction<AppProps>) => {
      const { value, index } = action.payload;
      state.numericTableData[index] = value;
    },
  },
});
export const selectNumericTableState = (state: StateInterface) => state.numericTableOption;

export const { onSelect } = numericTableSlice.actions;

export default numericTableSlice.reducer;

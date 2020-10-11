import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import StateInterface from 'redux/type';

type ElementProps = { name: string; selection: string };
interface AppProps {
  index: number;
  value: ElementProps;
}

const characterTableSlice = createSlice({
  name: 'characterTable',
  initialState: {
    characterTableData: [] as ElementProps[],
    flag: false,
  },
  reducers: {
    onSelect: (state, action: PayloadAction<AppProps>) => {
      const { value, index } = action.payload;
      state.characterTableData[index] = value;
    },
    onValidate: (state) => {
      const { characterTableData } = state;
      const filteredData = characterTableData.filter(
        (element) => element.selection === 'Segmentation Variable'
      );
      state.flag = filteredData.length > 1;
    },
  },
});
export const selectCharacterTableState = (state: StateInterface) => {
  return state.characterTableOption;
};

export const { onSelect, onValidate } = characterTableSlice.actions;

export default characterTableSlice.reducer;

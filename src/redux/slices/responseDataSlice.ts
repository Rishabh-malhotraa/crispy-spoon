import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import StateInterface from 'redux/type';
import { CharacterDataType, NumericDataType } from 'Data/response';

interface ActionProps {
  characterData: CharacterDataType[];
  numericData: NumericDataType[];
}

const responseDataSlice = createSlice({
  name: 'characterData',
  initialState: {
    characterTableData: [] as CharacterDataType[],
    numericTableData: [] as NumericDataType[],
  },
  reducers: {
    populateData: (state, action: PayloadAction<ActionProps>) => {
      const { characterData, numericData } = action.payload;
      state.characterTableData = characterData;
      state.numericTableData = numericData;
    },
  },
});
export const selectResponse = (state: StateInterface) => state.responseDataOption;

export const { populateData } = responseDataSlice.actions;

export default responseDataSlice.reducer;

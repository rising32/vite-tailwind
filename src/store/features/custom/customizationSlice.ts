import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CustomizationThemeState {
  isOpen: string[];
  opened: boolean;
  navType: string;
}

const initialState: CustomizationThemeState = {
  isOpen: [],
  opened: false,
  navType: '',
};

export const customizationSlice = createSlice({
  name: 'customization',
  initialState,
  reducers: {
    openMenu: (state, action: PayloadAction<boolean>) => {
      state.opened = action.payload;
    },
  },
});

export const { openMenu } = customizationSlice.actions;

export default customizationSlice.reducer;

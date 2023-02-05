import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AuthMode = 'REGISTER' | 'LOGIN';
export type CurrentUser = {
  id: string;
  username: string;
  profile: {
    id: string;
    thumbnail: string | null;
    display_name: string;
  };
  email: string;
};

export interface CoreState {
  layer: boolean;
  auth: {
    visible: boolean;
    mode: AuthMode;
  };
  user: CurrentUser | null;
  popup: {
    title: string | undefined;
    message: string;
    visible: boolean;
  };
}

const initialState: CoreState = {
  layer: false,
  auth: {
    visible: true,
    mode: 'LOGIN',
  },
  user: null,
  popup: {
    visible: false,
    title: '',
    message: '',
  },
};

export const coreSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    setLayer: (state, action: PayloadAction<boolean>) => {
      state.layer = action.payload;
    },
    showAuthModal: (state, action: PayloadAction<AuthMode>) => {
      state.layer = true;
      state.auth.visible = true;
      state.auth.mode = action.payload;
    },
    changeAuthModal: (state, action: PayloadAction<AuthMode>) => {
      state.auth.mode = action.payload;
    },
    closeAuthModal: (state) => {
      state.layer = false;
      state.auth.visible = false;
    },
    setUser: (state, action: PayloadAction<CurrentUser>) => {
      state.user = action.payload;
    },
    openPopUp: (state, action: PayloadAction<{ title: string; message: string }>) => {
      state.popup.title = action.payload.title;
      state.auth.visible = true;
      state.popup.message = action.payload.message;
    },
    closePopUp: (state) => {
      state.auth.visible = false;
    },
  },
});

export const { setLayer, showAuthModal, changeAuthModal, closeAuthModal, openPopUp } =
  coreSlice.actions;

export default coreSlice.reducer;

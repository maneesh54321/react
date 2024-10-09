import { Action, createSlice, ThunkAction } from "@reduxjs/toolkit";
import { Token, User } from "./auth-api-slice";
import { IRootState } from "./store";

function loadAuthTokenFromLocalStorage() {
  const token = localStorage.getItem("auth-token");
  if (!token) return undefined;
  return JSON.parse(token);
}

function saveAuthTokenToLocalStorage(token: Token) {
  localStorage.setItem("auth-token", JSON.stringify(token));
}

const initialState: {
  token: Token | undefined;
  user: User | undefined;
} = {
  token: loadAuthTokenFromLocalStorage(),
  user: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    removeToken: (state) => {
      state.token = undefined;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default authSlice;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  IRootState,
  unknown,
  Action<string>
>;

export const persistToken = (token: Token): AppThunk => {
  return async (dispatch) => {
    saveAuthTokenToLocalStorage(token);
    dispatch(AuthActions.setToken(token));
  };
};

export const logout = (): AppThunk => {
  return async (dispatch) => {
    localStorage.removeItem("auth-token");
    dispatch(AuthActions.removeToken());
  };
};

export const AuthActions = authSlice.actions;

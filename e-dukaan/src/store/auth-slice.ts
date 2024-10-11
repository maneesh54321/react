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

const anonymousUser: User = {
  id: 1000000,
  email: "",
  username: "",
  password: "",
  name: {
    firstname: "",
    lastname: "",
  },
  address: null,
  phone: ""
}

export function isAnonymousUser(user: User){
  return user.id === 1000000;
}

export function hasAddress(user: User){
  return !!user.address;
}

const initialState: {
  token: Token | undefined;
  user: User;
} = {
  token: loadAuthTokenFromLocalStorage(),
  user: anonymousUser,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.token = undefined;
      state.user = anonymousUser;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserAddress: (state, action) => {
      const deliveryAddress = action.payload;
      state.user.address =  {
          city: deliveryAddress.address.city,
          street: deliveryAddress.address.line1,
          number: 23,
          zipcode: deliveryAddress.address.pincode,
          geolocation: {
            lat: "",
            long: ""
          }
        };
        state.user.phone = deliveryAddress.contactDetails.phoneNo;
        state.user.name.firstname = deliveryAddress.contactDetails.name.split(" ")[0];
        state.user.name.lastname = deliveryAddress.contactDetails.name.split(" ")[1];
    }
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
    dispatch(AuthActions.logout());
  };
};

export const AuthActions = authSlice.actions;

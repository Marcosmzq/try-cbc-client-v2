import React, { createContext, useReducer } from "react";
import jwtDecode from "jwt-decode";

interface IDecodedUser {
  id: number;
  email: string;
  username: string;
  role: string;
  exp: number;
  iat: number;
}

interface IinitialState {
  user: IDecodedUser | null;
}

enum ActionKind {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

interface IAction {
  type: ActionKind;
  payload: IDecodedUser | null;
}

const getUserInitialState = () => {
  const getUserTokenFromLocalStorage = localStorage.getItem("jwtToken");

  if (getUserTokenFromLocalStorage) {
    const decodeUserFromToken: IDecodedUser = jwtDecode(
      getUserTokenFromLocalStorage
    );
    if (decodeUserFromToken.exp * 1000 < Date.now()) {
      localStorage.removeItem("jwtToken");
      return null;
    } else {
      return decodeUserFromToken;
    }
  } else {
    return null;
  }
};

const initialState: IinitialState = {
  user: getUserInitialState(),
};

export const AuthContext = createContext({
  user: getUserInitialState(),
  login: (userToken: string) => {},
  logout: () => {},
});

const authReducer = (state: IinitialState, action: IAction) => {
  switch (action.type) {
    case ActionKind.LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case ActionKind.LOGOUT:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

//@ts-ignore
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (userToken: string) => {
    const user: IDecodedUser = jwtDecode(userToken);
    localStorage.setItem("jwtToken", userToken);
    dispatch({
      type: ActionKind.LOGIN,
      payload: user,
    });
  };

  const logout = () => {
    localStorage.removeItem("jwtToken");
    dispatch({
      type: ActionKind.LOGOUT,
      payload: null,
    });
  };

  return (
    <AuthContext.Provider value={{ user: state.user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

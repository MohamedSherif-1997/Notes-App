import {
  ILoginAction,
  LoginActionTypes,
  ILoginSuccessAction,
  ILoginFailureAction,
} from "../models/loginModel";

export function login(email: string, password: string): ILoginAction {
  return {
    type: LoginActionTypes.Login,
    payload: {
      email,
      password,
    },
  };
}

export function loginSuccess(data: any): ILoginSuccessAction {
  return {
    type: LoginActionTypes.Login_SUCCESS,
    payload: {
      data,
    },
  };
}

export function loginFailure(): ILoginFailureAction {
  return {
    type: LoginActionTypes.Login_FAILURE,
  };
}

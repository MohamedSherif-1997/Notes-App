export enum LoginActionTypes {
  Login = "Login.FETCH",
  Login_SUCCESS = "Login.FETCH_SUCCESS",
  Login_FAILURE = "Login.FETCH_FAILURE",
}

export interface ILoginAction {
  type: LoginActionTypes.Login;
  payload: { email: string; password: string };
}

export interface ILoginSuccessAction {
  type: LoginActionTypes.Login_SUCCESS;
  payload: { data: any };
}

export interface ILoginFailureAction {
  type: LoginActionTypes.Login_FAILURE;
}

export type LoginAction =
  | ILoginAction
  | ILoginSuccessAction
  | ILoginFailureAction;

import produce from "immer";

import { LoginActionTypes, LoginAction } from "../models/loginModel";

import { ApiStatus } from "../models/apiStatus";

const INITIAL_STATE: LoginState = {
  apiStatus: ApiStatus.IN_PROGRESS,
  data: {},
};

export default function LoginStateReducer(
  state = INITIAL_STATE,
  action: LoginAction
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case LoginActionTypes.Login: {
        draft.apiStatus = ApiStatus.IN_PROGRESS;
        break;
      }
      case LoginActionTypes.Login_SUCCESS: {
        draft.apiStatus = ApiStatus.SUCCESS;
        draft.data = action.payload;
        break;
      }
      case LoginActionTypes.Login_FAILURE: {
        draft.apiStatus = ApiStatus.FAILURE;
        break;
      }

      default:
    }
  });
}

export interface LoginState {
  data: any;
  apiStatus: ApiStatus;
}

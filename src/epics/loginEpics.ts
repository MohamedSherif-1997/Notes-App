import axios from "axios";

import { map, switchMap, catchError } from "rxjs/operators";
import { ofType, combineEpics, Epic } from "redux-observable";
import { from, of } from "rxjs";

import { loginSuccess, loginFailure } from "../actions/loginAction";
import { IState } from "../reducer";
import { ILoginAction, LoginActionTypes } from "../models/loginModel";

const LoginEpic: Epic<ILoginAction, any, IState> = (action$, store$) =>
  action$.pipe(
    ofType(LoginActionTypes.Login),
    switchMap((action) => {
      return from(axios.post(`http://localhost:5000/notes/login`)).pipe(
        map((response) => {
          console.log(response);
          return loginSuccess(response);
        }),
        catchError(() => of(loginFailure()))
      );
    })
  );
export default combineEpics(LoginEpic);

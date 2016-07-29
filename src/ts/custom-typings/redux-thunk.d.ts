// Type definitions for redux-thunk v2.0.1
// Project: https://github.com/gaearon/redux-thunk
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="redux" />

import * as Redux from "redux";

declare var thunk: ReduxThunk.Thunk;
export default thunk;
export as namespace ReduxThunk;

declare namespace ReduxThunk {
    export interface Thunk extends Redux.Middleware {}
    export interface ThunkInterface {
      <T>(dispatch: Redux.Dispatch, getState?: () => T): any;
    }
}

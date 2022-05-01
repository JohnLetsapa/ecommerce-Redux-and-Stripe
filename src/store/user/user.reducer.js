import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};
// Because we do not have a useReducer, like when working with Context and useReducer, we have to initialise state directly in the Reducer like so...previously this was handled by the useReducer hook
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_USER:
      return {...state, currentUser: payload };
    default:
      return state; // in Redux our Reducers respond to ALL actions -> so if there is no appropriate reaction required, when handled by another Reducer, we have to return state...to indicate that, no re-action is req'd
  }                 // sidenote -> because everything in react, javascript, is referenced by memory, if we return the SAME object, then react knows that state did not change, and so no re-render is required...
};

import { createSelector } from 'reselect';


const stateSelector = state => state.auth;

export const authSelector = createSelector(
  stateSelector,
  state => state,
);

export const userSelector = createSelector(
  stateSelector,
  auth => auth.user,
);

export const tokenSelector = createSelector(
  stateSelector,
  auth => auth.token,
);

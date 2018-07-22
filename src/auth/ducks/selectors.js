import { createSelector } from 'reselect';


const stateSelector = state => state.auth;

export const authSelector = createSelector(
  stateSelector,
  state => state,
);

export const userSelector = createSelector(
  authSelector,
  auth => (auth.user ? auth.user.toObject() : null),
);

export const tokenSelector = createSelector(
  authSelector,
  auth => auth.token,
);

export const statusSelector = createSelector(
  authSelector,
  auth => auth.status,
);

export const errorsSelector = createSelector(
  authSelector,
  auth => (auth.errors ? auth.errors.toObject() : null),
);

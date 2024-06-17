import { createSlice } from '@reduxjs/toolkit';
// import { USER_ACTION_TYPES } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
};

//createSlice creates reducers, actions, and action types at the same time. So we do not have to define action types, actions and reducers separately

//in redux, state is imutable, so every time we want to update the state we pass a new state to the redux. but in redux toolkit below when we set the state like: state.currentUser = action.payload  it seams that we mutate the state but actually under the hood redux toolkit still generates new state object and pass it through like was in redux. for doing so redux-toolkit leverages immer library

export const userSlice = createSlice({
  name: 'user', //this is the namespace
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;

// export const userReducer = (state = INITIAL_STATE, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case USER_ACTION_TYPES.SET_CURRENT_USER:
//       return { ...state, currentUser: payload };
//     default:
//       return state;
//   }
// };

import { configureStore } from '@reduxjs/toolkit';
import projectReducer from 'public/shared/reduxStore/projects/reducers';
import skillReducer from 'public/shared/reduxStore/skills/reducers';

export const store = configureStore({
  reducer: {
    project: projectReducer,
    skill: skillReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

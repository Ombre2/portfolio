import { RootState } from 'public/main/redux-store/store';

// Other code such as selectors can use the imported `RootState` type
export const selectAllProjectState = (state: RootState) => state.project;

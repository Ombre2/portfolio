import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProject } from 'public/shared/types/Project';

// Define a type for the slice state
interface ProjectState {
  listProject: IProject[];
}

// Define the initial state using that type
const initialState: ProjectState = {
  listProject: []
};

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setListProject: (state, action: PayloadAction<IProject[]>) => {
      state.listProject = action.payload;
    }
  }
});

export const { setListProject } = projectSlice.actions;

export default projectSlice.reducer;

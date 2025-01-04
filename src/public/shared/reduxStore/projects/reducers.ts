import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProject } from 'public/shared/types/Project';

// Define a type for the slice state
interface ProjectState {
  listProject: IProject[];
  loadingProjectLists: boolean;
}

// Define the initial state using that type
const initialState: ProjectState = {
  listProject: [],
  loadingProjectLists: false
};

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setListProject: (state, action: PayloadAction<IProject[]>) => {
      state.listProject = action.payload;
    },
    setLoadingProjectLists: (state, action: PayloadAction<boolean>) => {
      state.loadingProjectLists = action.payload;
    }
  }
});

export const { setListProject, setLoadingProjectLists } = projectSlice.actions;

export default projectSlice.reducer;

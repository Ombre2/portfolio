import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ISkill } from 'public/shared/types/Skill';

// Define a type for the slice state
interface SkillsState {
  listSkill: ISkill[];
  loading: boolean;
}

// Define the initial state using that type
const initialState: SkillsState = {
  listSkill: [],
  loading: false
};

export const skillsSlice = createSlice({
  name: 'skill',
  initialState,
  reducers: {
    setListSkill: (state, action: PayloadAction<ISkill[]>) => {
      state.listSkill = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    }
  }
});

export const { setListSkill, setLoading } = skillsSlice.actions;

export default skillsSlice.reducer;

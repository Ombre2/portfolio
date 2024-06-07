import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ISkill } from 'public/shared/types/Skill';

// Define a type for the slice state
interface SkillsState {
  listSkill: ISkill[];
}

// Define the initial state using that type
const initialState: SkillsState = {
  listSkill: []
};

export const skillsSlice = createSlice({
  name: 'skill',
  initialState,
  reducers: {
    setListSkill: (state, action: PayloadAction<ISkill[]>) => {
      state.listSkill = action.payload;
    }
  }
});

export const { setListSkill } = skillsSlice.actions;

export default skillsSlice.reducer;

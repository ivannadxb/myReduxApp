import { createSlice } from '@reduxjs/toolkit';


export const perfumesSlice = createSlice({
    name:'perfumes', 
    initialState: {
        selectedCategory: "CHANEL"
    },
    reducers: {
      filterCategory: (state, action) => {
        state.selectedCategory = action.payload;
      }
    }
})

export const getSelectedCategory = state => state.perfumes.selectedCategory;
export const { filterCategory } = perfumesSlice.actions;
export default perfumesSlice.reducer;
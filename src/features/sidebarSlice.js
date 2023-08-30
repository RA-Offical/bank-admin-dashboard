import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isOpen: false,
	isOpenHalf: true,
};
const sidebarSlice = createSlice({
	name: "sidebar",
	initialState,
	reducers: {
		setIsOpen: (state, action) => {
			state.isOpen = action.payload;
		},
		setIsOpenHalf: (state, action) => {
			state.isOpenHalf = action.payload;
		},
	},
});

export default sidebarSlice.reducer;

export const { setIsOpen, setIsOpenHalf } = sidebarSlice.actions;

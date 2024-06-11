import { IUser } from "@/types/user";
import { createSlice } from "@reduxjs/toolkit";
import { authHelpers, userHelpers } from "@/context/helpers";

const initialState: IUser = {
	id: "",
	name: "",
	email: "",
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action: { payload: Partial<IUser>; type: string }) => {
			state = { ...state, ...action.payload };
			return state;
		},
		logout: (state) => {
			state = initialState;
			return state;
		},
	},
	extraReducers: (builder) => {
		// Fetch Logged In User
		builder.addCase(
			authHelpers.fetchAuthenticatedUser.fulfilled,
			(state, action) => {
				state = { ...state, ...action.payload };
				return state;
			}
		);
		// Handle rejection: Fetch Logged In User
		builder.addCase(
			authHelpers.fetchAuthenticatedUser.rejected,
			(state) => {
				state = initialState;
				return state;
			}
		);
		// Update User
		builder.addCase(userHelpers.updateUser.fulfilled, (state, action) => {
			state = { ...state, ...action.payload };
			return state;
		});
	},
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;

export const userSelector = (state: { user: IUser }) => state.user;

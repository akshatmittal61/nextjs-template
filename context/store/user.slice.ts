import { authHelpers, userHelpers } from "@/context/helpers";
import { IUser } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

type UserSlice = IUser;

const initialState: UserSlice = {
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

export const userSelector = (state: { user: UserSlice }) => state.user;

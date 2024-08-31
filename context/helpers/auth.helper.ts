import { api } from "@/connections";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAuthenticatedUser = createAsyncThunk(
	"auth/fetchAuthenticatedUser",
	async (_, thunkApi) => {
		try {
			const res = await api.auth.verifyUserIfLoggedIn();
			return Promise.resolve(res.data);
		} catch (error: any) {
			return thunkApi.rejectWithValue(error.response.data);
		}
	}
);

import { api } from "@/connections";
import { IUser } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateUser = createAsyncThunk(
	"user/update",
	async (
		{
			user_id,
			data,
		}: {
			user_id: string;
			data: Partial<IUser>;
		},
		thunkApi
	) => {
		try {
			const res = await api.user.updateUser(user_id, data);
			return Promise.resolve(res.data);
		} catch (error: any) {
			return thunkApi.rejectWithValue(error.response.data);
		}
	}
);

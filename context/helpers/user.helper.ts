import { IUser } from "@/types/user";
import apiUtils from "@/utils/api";
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
			const res = await apiUtils.users.updateUser(user_id, data);
			return Promise.resolve(res.data);
		} catch (error: any) {
			console.error(error);
			return thunkApi.rejectWithValue(error.response.data);
		}
	}
);

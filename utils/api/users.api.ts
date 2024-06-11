import { IUser } from "@/types/user";
import http from "@/utils/http";

export const getAllUsers = async () => {
	try {
		const res = await http.get("/users");
		return Promise.resolve(res.data);
	} catch (error) {
		console.error(error);
		return Promise.reject(error);
	}
};

export const updateUser = async (user_id: string, data: Partial<IUser>) => {
	try {
		const res = await http.put(`/users/${user_id}`, data);
		return Promise.resolve(res.data);
	} catch (error) {
		console.error(error);
		return Promise.reject(error);
	}
};

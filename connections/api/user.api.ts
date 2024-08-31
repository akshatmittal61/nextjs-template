import { http } from "@/connections";
import { IUser } from "@/types";

export const getAllUsers = async () => {
	const res = await http.get("/users");
	return res.data;
};

export const updateUser = async (user_id: string, data: Partial<IUser>) => {
	const res = await http.put(`/users/${user_id}`, data);
	return res.data;
};

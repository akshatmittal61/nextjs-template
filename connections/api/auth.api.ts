import { http } from "@/connections";
import { IUser } from "@/types";

export const verifyUserIfLoggedIn = async (): Promise<{
	message: string;
	data: IUser;
}> => {
	const response = await http.get("/auth/verify");
	return response.data;
};

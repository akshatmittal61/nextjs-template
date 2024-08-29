import { IUser } from "@/types";
import { http } from "@/utils";

export const verifyUserIfLoggedIn = async (): Promise<{
	message: string;
	data: IUser;
}> => {
	try {
		const response = await http.get("/auth/verify");
		return Promise.resolve(response.data);
	} catch (error: any) {
		console.error(error);
		return Promise.reject(error.response.data);
	}
};

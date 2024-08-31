import { HTTP } from "@/constants";
import { ApiRequest, ApiResponse } from "@/types/api";

export const isLoggedIn = (req: ApiRequest, res: ApiResponse, next: any) => {
	try {
		const token = req.headers.authorization?.split("Bearer ")[0];
		if (!token) {
			return res
				.status(HTTP.status.UNAUTHORIZED)
				.json({ message: HTTP.message.UNAUTHORIZED });
		}
		next();
	} catch (error) {
		return res
			.status(HTTP.status.UNAUTHORIZED)
			.json({ message: HTTP.message.UNAUTHORIZED });
	}
};

import { HTTP } from "@/constants";
import { userService } from "@/services/api";
import { ApiRequest, ApiResponse } from "@/types";

export const getAllUsers = async (req: ApiRequest, res: ApiResponse) => {
	try {
		const allUsers = await userService.findAll();
		return res.status(HTTP.status.SUCCESS).json({
			data: allUsers,
			message: HTTP.message.SUCCESS,
		});
	} catch (error) {
		console.error(error);
		return res.status(HTTP.status.INTERNAL_SERVER_ERROR).json({
			error: HTTP.message.INTERNAL_SERVER_ERROR,
		});
	}
};

import { HTTP } from "@/constants";
import logger from "@/log";
import { userService } from "@/services";
import { ApiRequest, ApiResponse } from "@/types";

export const getAllUsers = async (req: ApiRequest, res: ApiResponse) => {
	try {
		const allUsers = await userService.findAll();
		return res.status(HTTP.status.SUCCESS).json({
			data: allUsers,
			message: HTTP.message.SUCCESS,
		});
	} catch (error: any) {
		logger.error(error);
		if (error.message && error.message.startsWith("Invalid input:")) {
			return res
				.status(HTTP.status.BAD_REQUEST)
				.json({ message: HTTP.message.BAD_REQUEST });
		} else {
			return res.status(HTTP.status.INTERNAL_SERVER_ERROR).json({
				message: HTTP.message.INTERNAL_SERVER_ERROR,
			});
		}
	}
};

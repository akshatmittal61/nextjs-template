import { RESPONSE_MESSAGES } from "@/constants";
import { UserModel } from "@/models";
import { ApiRequest, ApiResponse } from "@/types/api";

export const getAllUsers = async (req: ApiRequest, res: ApiResponse) => {
	try {
		const allUsers = await UserModel.find()
			.select("-password")
			.sort({ createdAt: -1 });
		return res.status(200).json({
			data: allUsers,
			message: RESPONSE_MESSAGES.SUCCESS,
		});
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			error: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
		});
	}
};

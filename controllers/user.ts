import { RESPONSE_MESSAGES } from "@/constants/enum";
import { ApiRequest, ApiResponse } from "@/interfaces/api";
import User from "@/models/User";

export const getAllUsers = async (req: ApiRequest, res: ApiResponse) => {
	try {
		const allUsers = await User.find()
			.select("-password")
			.sort({ createdAt: -1 });
		return res.status(200).json({ data: allUsers });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ error: RESPONSE_MESSAGES.SERVER_ERROR });
	}
};

export const getUserById = async (req: ApiRequest, res: ApiResponse) => {
	try {
		const { id } = req.query;
		const user = await User.findById(id).select("-password");
		if (!user) {
			return res
				.status(404)
				.json({ error: "User with the given id does not exist" });
		}
		return res
			.status(200)
			.json({ data: user, message: RESPONSE_MESSAGES.SUCCESS });
	} catch (error: any) {
		console.error(error);
		if (error.kind === "ObjectId") {
			return res
				.status(404)
				.json({ error: "User with the given id does not exist" });
		}
		return res.status(500).json({ error: RESPONSE_MESSAGES.SERVER_ERROR });
	}
};

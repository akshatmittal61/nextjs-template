import { RESPONSE_MESSAGES } from "@/constants";
import controllers from "@/controllers";
import { db } from "@/db";
import { ApiRequest, ApiResponse } from "@/types/api";

const handler = async (req: ApiRequest, res: ApiResponse) => {
	try {
		await db.connect();
		const { method } = req;
		switch (method) {
			case "GET":
				return controllers.user.getAllUsers(req, res);
			default:
				res.setHeader("Allow", ["GET"]);
				return res.status(405).end(`Method ${method} Not Allowed`);
		}
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			error: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
		});
	}
};

export default handler;

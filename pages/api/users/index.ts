import { RESPONSE_MESSAGES } from "@/constants/enum";
import { getAllUsers } from "@/controllers/user";
import connectDB from "@/db";
import { ApiRequest, ApiResponse } from "@/interfaces/api";
import authMiddleware from "@/middleware/auth";

const handler = async (req: ApiRequest, res: ApiResponse) => {
	try {
		await connectDB();
		const { method } = req;
		switch (method) {
			case "GET":
				return authMiddleware(getAllUsers)(req, res);
			default:
				res.setHeader("Allow", ["GET"]);
				return res.status(405).end(`Method ${method} Not Allowed`);
		}
	} catch (error) {
		console.error(error);
		return res.status(500).json({ error: RESPONSE_MESSAGES.SERVER_ERROR });
	}
};

export default handler;

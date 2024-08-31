import { HTTP } from "@/constants";
import { db } from "@/db";
import logger from "@/log";
import { ApiRequest, ApiResponse } from "@/types";

const handler = async (req: ApiRequest, res: ApiResponse) => {
	try {
		await db.connect();
	} catch (error) {
		logger.error(error);
		return res
			.status(500)
			.json({ message: "Unable to connect to database" });
	}
	try {
		const { method } = req;
		switch (method) {
			case "GET":
				return res.status(200).json({ message: "API is healthy" });
			default:
				res.setHeader("Allow", ["GET"]);
				return res.status(405).end(`Method ${method} Not Allowed`);
		}
	} catch (error) {
		logger.error(error);
		return res.status(500).json({
			error: HTTP.message.INTERNAL_SERVER_ERROR,
		});
	}
};

export default handler;

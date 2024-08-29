import { HTTP } from "@/constants";
import { db } from "@/db";
import { ApiRequest, ApiResponse } from "@/types";

const handler = async (req: ApiRequest, res: ApiResponse) => {
	try {
		await db.connect();
		const { method } = req;
		switch (method) {
			case "GET":
				return res.status(200).json({ message: "API is healthy" });
			default:
				res.setHeader("Allow", ["GET"]);
				return res.status(405).end(`Method ${method} Not Allowed`);
		}
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			error: HTTP.message.INTERNAL_SERVER_ERROR,
		});
	}
};

export default handler;

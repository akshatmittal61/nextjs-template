import { NextApiRequest, NextApiResponse } from "next";

interface ApiRequest extends NextApiRequest {
	user: {
		id: string;
	};
}

interface ApiResponse extends NextApiResponse {
	user: {
		id: string;
	};
}

export type { ApiRequest, ApiResponse };

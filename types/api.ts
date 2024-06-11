import { NextApiRequest, NextApiResponse } from "next";

interface ApiRequest extends NextApiRequest {
	user?: {
		id: string;
	};
}

interface ApiResponse extends NextApiResponse {
	user?: {
		id: string;
	};
}

export type T_RESPONSE_MESSAGES =
	| "SUCCESS"
	| "FAILED"
	| "BAD_REQUEST"
	| "UNAUTHORIZED"
	| "FORBIDDEN"
	| "NOT_FOUND"
	| "INTERNAL_SERVER_ERROR";

export type { ApiRequest, ApiResponse };

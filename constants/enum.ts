import { T_RESPONSE_MESSAGES } from "@/types/api";
import { T_USER_ROLE } from "@/types/user";

export const USER_ROLES: Record<T_USER_ROLE, T_USER_ROLE> = {
	ADMIN: "ADMIN",
	USER: "USER",
	GUEST: "GUEST",
};

export const RESPONSE_MESSAGES: Record<T_RESPONSE_MESSAGES, string> = {
	SUCCESS: "Success",
	FAILED: "Failed",
	BAD_REQUEST: "Bad Request",
	UNAUTHORIZED: "Unauthorized",
	FORBIDDEN: "Forbidden",
	NOT_FOUND: "Not Found",
	INTERNAL_SERVER_ERROR: "Internal Server Error",
};

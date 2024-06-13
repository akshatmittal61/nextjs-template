import { T_USER_ROLE } from "@/types/user";

export const USER_ROLES: Record<T_USER_ROLE, T_USER_ROLE> = {
	ADMIN: "ADMIN",
	USER: "USER",
	GUEST: "GUEST",
};
const message = {
	SUCCESS: "Success",
	ERROR: "Error",
	NOT_FOUND: "Not Found",
	BAD_REQUEST: "Bad Request",
	UNAUTHORIZED: "Unauthorized",
	FORBIDDEN: "Forbidden",
	INTERNAL_SERVER_ERROR: "Internal Server Error",
};

const status = {
	SUCCESS: 200,
	CREATED: 201,
	REMOVED: 204,
	NO_CONTENT: 204,
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401,
	FORBIDDEN: 403,
	NOT_FOUND: 404,
	INTERNAL_SERVER_ERROR: 500,
};

export const HTTP = {
	status,
	message,
};

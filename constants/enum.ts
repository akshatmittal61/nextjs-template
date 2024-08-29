import { T_USER_ROLE } from "@/types";

export const USER_ROLES: Record<T_USER_ROLE, T_USER_ROLE> = {
	ADMIN: "ADMIN",
	USER: "USER",
	GUEST: "GUEST",
};

const message = Object.freeze({
	SUCCESS: "Success",
	ERROR: "Error",
	NOT_FOUND: "Not Found",
	BAD_REQUEST: "Bad Request",
	UNAUTHORIZED: "Unauthorized",
	FORBIDDEN: "Forbidden",
	INTERNAL_SERVER_ERROR: "Internal Server Error",
});

const status = Object.freeze({
	SUCCESS: 200,
	CREATED: 201,
	REMOVED: 204,
	NO_CONTENT: 204,
	RESET_CONTENT: 205,
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401,
	FORBIDDEN: 403,
	NOT_FOUND: 404,
	METHOD_NOT_ALLOWED: 405,
	GONE: 410,
	CONFLICT: 409,
	INTERNAL_SERVER_ERROR: 500,
});

export const HTTP = Object.freeze({ message, status });

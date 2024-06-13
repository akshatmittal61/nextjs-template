// Base URL for the application

type T_URL = "db" | "frontend" | "backend";

export const url: Record<T_URL, string> = {
	db: process.env.DB_URI || "mongodb://localhost:27017/nextjs",
	frontend:
		process.env.NEXT_PUBLIC_FRONTEND_BASE_URL || "http://localhost:3000",
	backend:
		process.env.NEXT_PUBLIC_BACKEND_BASE_URL ||
		"http://localhost:3000/api/v1",
};

export const jwtSecret: string =
	process.env.NEXT_PUBLIC_APP_JWT_SECRET || "secret";

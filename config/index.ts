// Base URL for the application

import { MongoDbCredentials, PostgresDbCredentials } from "@/types";

type T_URL = "frontend" | "backend";

export const url: Record<T_URL, string> = {
	frontend:
		process.env.NEXT_PUBLIC_FRONTEND_BASE_URL || "http://localhost:3000",
	backend:
		process.env.NEXT_PUBLIC_BACKEND_BASE_URL ||
		"http://localhost:3000/api/v1",
};

export const node_env: "development" | "production" | "test" =
	process.env.NODE_ENV || "development";

export const mongoDbConfig: MongoDbCredentials = {
	url: process.env.MONGO_DB_URI || "mongodb://localhost:27017/nextjs",
};

export const postgresDbConfig: PostgresDbCredentials = {
	host: process.env.POSTGRES_HOST || "localhost",
	port: Number(process.env.POSTGRES_PORT) || 5432,
	username: process.env.POSTGRES_USER || "postgres",
	password: process.env.POSTGRES_PASSWORD || "postgres",
	database: process.env.POSTGRES_DB || "postgres",
};

export const jwtSecret: string =
	process.env.NEXT_PUBLIC_APP_JWT_SECRET || "secret";

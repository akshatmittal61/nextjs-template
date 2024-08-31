/* eslint-disable no-unused-vars */
import { node_env } from "@/config";
import logger from "@/log";
import { PostgresDbCredentials } from "@/types";
import { Pool, PoolConfig, QueryResult } from "pg";

declare global {
	var isPostgresDBConnected: boolean;
	var postgresDbPool: Pool;
}

export const getDatabaseConnectionPool = (
	credentials: PostgresDbCredentials
): Pool => {
	if (global.postgresDbPool) {
		return global.postgresDbPool;
	}

	const poolConfig: PoolConfig = {
		application_name: node_env,
		host: credentials.host,
		port: credentials.port,
		user: credentials.username,
		password: credentials.password,
		database: credentials.database,
		max: 10,
		idleTimeoutMillis: 0,
		connectionTimeoutMillis: 5000,
		ssl: false,
	};

	const newPool = new Pool(poolConfig);

	newPool.on("error", (err) => {
		logger.error("Unexpected error on idle client", err);
		process.exit(-1);
	});

	return (global.postgresDbPool = newPool);
};

export class PostgresDatabaseManager {
	constructor(credentials: PostgresDbCredentials) {
		global.postgresDbPool = getDatabaseConnectionPool(credentials);
	}

	public async connect(): Promise<void> {
		if (global.postgresDbPool && global.postgresDbPool.totalCount > 0) {
			logger.info("Postgres Database connection pool already exists");
			return;
		}
		await global.postgresDbPool.connect();
		logger.info("Connected to Postgres Database");
	}

	public async disconnect(): Promise<void> {
		try {
			await global.postgresDbPool.end();
			global.isPostgresDBConnected = false;
			logger.info("Disconnected from Postgres Database");
		} catch (error) {
			logger.error("Error disconnecting from Postgres Database", error);
		}
	}

	public async query(
		text: string,
		params: Array<any> = []
	): Promise<QueryResult> {
		try {
			const start = Date.now();
			const result = await global.postgresDbPool.query(text, params);
			const duration = Date.now() - start;

			// Remove newlines and extra spaces and replace $1, $2, etc. with actual values from params
			const executedQuery = text
				.replace(/(\r\n|\n|\r)/gm, " ")
				.replace(/\s+/g, " ")
				.replace(/\$(\d+)/g, (_, index) => params[index - 1]);
			logger.info(
				"Executed query",
				JSON.stringify({
					query: executedQuery,
					duration,
					rows: result.rowCount,
				})
			);
			return result;
		} catch (error: any) {
			logger.error(error);

			// Remove newlines and extra spaces and replace $1, $2, etc. with actual values from params
			const executedQuery = text
				.replace(/(\r\n|\n|\r)/gm, "")
				.replace(/\s+/g, " ")
				.replace(/\$(\d+)/g, (_, index) => params[index - 1]);
			logger.error(
				"Failed to execute query",
				JSON.stringify({
					query: executedQuery,
					rows: error.result?.rowCount,
					error: error.message,
				})
			);
			throw error;
		}
	}
}

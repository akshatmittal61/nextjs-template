import { QueryResult } from "pg";

export type Databases = "mongo" | "postgres";

export type PostgresDbCredentials = {
	host: string;
	port: number;
	username: string;
	password: string;
	database: string;
};

export type MongoDbCredentials = {
	url: string;
};

export type CommonDbManager = {
	connect: () => Promise<void>;
	disconnect: () => Promise<void>;
};

export type MongoDbManager = CommonDbManager;

export type PostgresDbManager = CommonDbManager & {
	// eslint-disable-next-line no-unused-vars
	query: (text: string, params: Array<any>) => Promise<QueryResult>;
};

export type DbManager = MongoDbManager;

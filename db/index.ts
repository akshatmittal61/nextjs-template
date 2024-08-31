import { mongoDbConfig, postgresDbConfig } from "@/config";
import { DbManager } from "@/types";
import { MongoDatabaseManager } from "./mongo";
import { PostgresDatabaseManager } from "./postgres";

export class DatabaseManager implements DbManager {
	mongoDb: MongoDatabaseManager;
	postgresDb: PostgresDatabaseManager;

	constructor() {
		this.mongoDb = new MongoDatabaseManager(mongoDbConfig);
		this.postgresDb = new PostgresDatabaseManager(postgresDbConfig);
	}

	public async connect() {
		await this.mongoDb.connect();
		await this.postgresDb.connect();
	}

	public async disconnect() {
		await this.mongoDb.disconnect();
		await this.postgresDb.disconnect();
	}

	public async query(text: string, params: Array<any>) {
		return this.postgresDb.query(text, params);
	}
}

export const db = new DatabaseManager();

// execute db.disconnect() on process exit or interrupt or system shutdown
process.on("exit", () => db.disconnect());
process.on("SIGINT", () => db.disconnect());
process.on("SIGTERM", () => db.disconnect());
process.on("uncaughtException", () => db.disconnect());
process.on("SIGUSR1", () => db.disconnect());
process.on("SIGUSR2", () => db.disconnect());

// execute db.disconnect() on nodemon restart
process.once("SIGUSR2", () => {
	process.kill(process.pid, "SIGUSR2");
});

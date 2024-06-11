import mongoose, { ConnectOptions } from "mongoose";
import { url } from "@/config";

declare global {
	// eslint-disable-next-line no-unused-vars
	var isConnected: boolean;
}

export class DatabaseManager {
	constructor() {}

	public async connect() {
		if (global.isConnected) {
			return;
		}

		const db = await mongoose
			.connect(url.db, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			} as ConnectOptions)
			.then((db) => {
				console.info("Connected to MongoDB");
				return db;
			})
			.catch((err) => {
				console.error("Error connecting to MongoDB", err);
				return err;
			});

		global.isConnected = db.connections[0].readyState === 1;
	}
}

export const db = new DatabaseManager();

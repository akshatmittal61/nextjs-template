/* eslint-disable no-unused-vars */
import { MongoDbCredentials } from "@/types";
import mongoose, { Mongoose } from "mongoose";

declare global {
	var isMongoDBConnected: boolean;
	var mongoDBPool: Mongoose;
}

export class MongoDatabaseManager {
	url: string;
	constructor(config: MongoDbCredentials) {
		this.url = config.url;
	}

	public async connect() {
		if (global.isMongoDBConnected && global.mongoDBPool) {
			console.info("MongoDB is already connected");
			return;
		}

		try {
			console.info("Connecting to MongoDB");
			const db = await mongoose.connect(this.url);
			console.info("MongoDB connected");
			global.isMongoDBConnected = db.connections[0].readyState === 1;
			global.mongoDBPool = db;
		} catch (error) {
			console.error("Error connecting to MongoDB", error);
			return error;
		}
	}

	public async disconnect() {
		try {
			await global.mongoDBPool.disconnect();
			global.isMongoDBConnected = false;
			console.info("MongoDB disconnected");
		} catch (error) {
			console.error("Error disconnecting from MongoDB", error);
		}
	}
}

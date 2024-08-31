/* eslint-disable no-unused-vars */
import logger from "@/log";
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
			logger.info("MongoDB is already connected");
			return;
		}

		try {
			logger.info("Connecting to MongoDB");
			const db = await mongoose.connect(this.url);
			logger.info("MongoDB connected");
			global.isMongoDBConnected = db.connections[0].readyState === 1;
			global.mongoDBPool = db;
		} catch (error) {
			logger.error("Error connecting to MongoDB", error);
			return error;
		}
	}

	public async disconnect() {
		try {
			await global.mongoDBPool.disconnect();
			global.isMongoDBConnected = false;
			logger.info("MongoDB disconnected");
		} catch (error) {
			logger.error("Error disconnecting from MongoDB", error);
		}
	}
}

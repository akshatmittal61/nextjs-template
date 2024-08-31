/* eslint-disable no-console */
import { logsBaseUrl } from "@/constants/variables";

export type LOG_LEVEL =
	| "log"
	| "info"
	| "warn"
	| "error"
	| "debug"
	| "verbose"
	| "silly"
	| "http";

const writeToFile = (dir: string, log: string) => {
	try {
		const fs = require("fs");
		const date = new Date();
		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir);
		}
		const fileName = `${dir}/${date.toISOString().slice(0, 10)}.log`;
		fs.appendFileSync(fileName, log);
	} catch {
		console.info("Unable to write to log file");
	}
};

const log = (level: LOG_LEVEL, dir: string, ...messages: Array<any>) => {
	const message = messages
		.map((m) =>
			typeof m === "string"
				? m
				: typeof m === "object"
					? JSON.stringify(m)
					: m
		)
		.map((m) => m.toString())
		.join(" ");
	const date = new Date();
	const log = `[${date.toISOString()}] [${level.toUpperCase()}] ${message}\n`;
	writeToFile(dir, log);
	switch (level) {
		case "info":
			console.info("\x1b[32m%s\x1b[37m", log);
			break;
		case "warn":
			console.warn("\x1b[33m%s\x1b[0m", log);
			break;
		case "error":
			console.error("\x1b[31m%s\x1b[0m", log);
			break;
		case "debug":
			console.debug("\x1b[34m%s\x1b[0m", log);
			break;
		case "verbose":
			console.log("\x1b[35m%s\x1b[0m", log);
			break;
		case "silly":
			console.log("\x1b[36m%s\x1b[0m", log);
			break;
		case "http":
			console.log("\x1b[35m%s\x1b[0m", log);
			break;
		default:
			console.log("\x1b[37m%s\x1b[0m", log);
			break;
	}
};

class Logger {
	private readonly directory: string;

	constructor(dir: string) {
		this.directory = dir;
	}

	info(...messages: Array<any>) {
		log("info", this.directory, messages);
	}

	warn(...messages: Array<any>) {
		log("warn", this.directory, messages);
	}

	error(...messages: Array<any>) {
		log("error", this.directory, messages);
	}

	debug(...messages: Array<any>) {
		log("debug", this.directory, messages);
	}

	verbose(...messages: Array<any>) {
		log("verbose", this.directory, messages);
	}

	silly(...messages: Array<any>) {
		log("silly", this.directory, messages);
	}

	http(...messages: Array<any>) {
		log("http", this.directory, messages);
	}

	log(...messages: Array<any>) {
		log("log", this.directory, messages);
	}
}

const logger = new Logger(logsBaseUrl);
export default logger;

import { getBoolean, getNumber, getString } from "@/utils/safety";

class ConfigService {
	constructor(private env: { [k: string]: string | undefined }) {
		this.env = env;
	}

	public get(key: string): string {
		if (!this.env[key]) {
			throw new Error(`Key ${key} not found in environment`);
		}

		return getString(this.env[key]);
	}

	public getNumber(key: string): number {
		const value = this.env[key];
		if (!value) {
			throw new Error(`Key ${key} not found in environment`);
		}

		return getNumber(this.env[key]);
	}

	public getBoolean(key: string): boolean {
		const value = this.env[key];
		if (!value) {
			throw new Error(`Key ${key} not found in environment`);
		}

		return getBoolean(this.env[key]);
	}

	public safeGet<T>(key: string, fallback: T): T {
		try {
			return this.get(key) as T;
		} catch {
			return fallback;
		}
	}
}

const configService = new ConfigService(process.env);

export default configService;

export const PORT = configService.safeGet("PORT", 8000);

type T_URL = "db" | "frontend" | "backend";

export const url: Record<T_URL, string> = {
	db: configService.safeGet("DB_URI", "mongodb://localhost:27017/nextjs"),
	frontend: configService.safeGet(
		"NEXT_PUBLIC_FRONTEND_BASE_URL",
		"http://localhost:3000"
	),
	backend: configService.safeGet(
		"NEXT_PUBLIC_BACKEND_BASE_URL",
		"http://localhost:3000/api/v1"
	),
};

export const jwtSecret: string = configService.safeGet("JWT_SECRET", "secret");

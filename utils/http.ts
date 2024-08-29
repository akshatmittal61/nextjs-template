import { backendBaseUrl } from "@/constants";
import axios from "axios";

export const http = axios.create({
	baseURL: backendBaseUrl,
	headers: {
		"Content-Type": "application/json",
	},
});

import { backendBaseUrl } from "@/constants";
import axios from "axios";

const http = axios.create({
	baseURL: backendBaseUrl,
	headers: {
		"Content-Type": "application/json",
	},
});

export default http;

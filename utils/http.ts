import { backendBaseUrl } from "@/constants/variables";
import axios from "axios";

const http = axios.create({
	baseURL: backendBaseUrl,
});

export default http;

// ----------------------------------------------------------------
//  Default Axios Interceptor with Token
//	Only use if you are using token based authentication with local storage
// ----------------------------------------------------------------
/* http.interceptors.request.use(
	async function (Config: any) {
		const config = Config;
		const token = localStorage.getItem("token");
		try {
			if (token) {
				config.headers["x-auth-token"] = `${token}`;
			}
			return config;
		} catch (err) {
			return config;
		}
	},
	function (error: Error) {
		return Promise.reject(error);
	}
); */

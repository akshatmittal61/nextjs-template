import toast from "react-hot-toast";

class Notify {
	constructor() {}
	// if someone call notify.success(), make a success toast
	success(message: string) {
		toast.success(message);
	}

	// if someone call notify.error(), make an error toast
	error(error: any, fallback: string = "An error occurred") {
		if (typeof error === "string") {
			toast.error(error);
		} else if (
			error.response &&
			error.response.data &&
			error.response.data.message &&
			typeof error.response.data.message === "string"
		) {
			toast.error(error.response.data.message);
		} else if (error.message && typeof error.message === "string") {
			toast.error(error.message);
		} else {
			toast.error(fallback);
		}
	}

	// if someone call notify.info(), make an info toast
	info(message: string) {
		toast(message);
	}

	// if someone call notify.warn(), make an warn toast
	warn(message: string) {
		toast(message, {
			icon: "⚠️",
		});
	}

	// promise
	promise = toast.promise;
}

const notify = new Notify();

export { notify };

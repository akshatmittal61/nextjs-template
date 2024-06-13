import toast from "react-hot-toast";

class Notify {
	constructor() {}
	// if someone call notify.success(), make a success toast
	success(message: string) {
		toast.success(message);
	}

	// if someone call notify.error(), make an error toast
	error(error: any) {
		if (typeof error === "string") {
			toast.error(error);
		} else if (error.message && typeof error.message === "string") {
			toast.error(error.message);
		} else {
			toast.error("An error occurred");
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
}

const notify = new Notify();

export { notify };

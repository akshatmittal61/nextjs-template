import { useDispatch, useSelector } from "react-redux";
import { userSelector, userSlice } from "@/context/store";
import * as allHelpers from "@/context/helpers";

export const useStore = () => {
	const dispatch = useDispatch<any>();

	const user = useSelector(userSelector);

	return {
		// dispatch takes an action object and sends it to the store
		dispatch,
		// user and skills: state values
		user,
		// actions
		...userSlice.actions,
		// helpers
		...allHelpers.authHelpers,
		...allHelpers.userHelpers,
	};
};

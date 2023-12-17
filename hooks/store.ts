import { useContext } from "react";
import GlobalContext from "@/context/GlobalContext";

const useStore = () => {
	const store = useContext(GlobalContext);
	return store;
};

export default useStore;

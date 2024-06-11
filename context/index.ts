import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducers from "./slices";

const combinedReducers = combineReducers(reducers);

const store = configureStore({
	reducer: combinedReducers,
});

export default store;

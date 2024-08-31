import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducers from "./store";

const combinedReducers = combineReducers(reducers);

const store = configureStore({
	reducer: combinedReducers,
});

export default store;

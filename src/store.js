import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mobileReducer from "./Mobile/mobileReducer";
import laptopReducer from "./Laptop/laptopReducer";

const rootReducer = combineReducers({
  mobile: mobileReducer,
  laptop: laptopReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;

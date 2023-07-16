import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/rootReducer";

const store = configureStore({
  reducer: rootReducer,
});
console.log("🚀 ~ file: configureStore.js:8 ~ store:", store);

export default store;

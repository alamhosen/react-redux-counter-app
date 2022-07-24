import { createStore } from "redux";
import counterReducer from "./redux-services/reducers/counterReducer";

const store = createStore(counterReducer);
export default store;
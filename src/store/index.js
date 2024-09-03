import {combineReducers, createStore} from "redux";
import {todoSlice} from "./todoSlice/todoSlice.js";


const rootReducer = combineReducers({
	todo: todoSlice.reducer,
})

export const store = createStore(rootReducer)
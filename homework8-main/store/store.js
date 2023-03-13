import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "@reduxjs/toolkit";
import countReducer from "./countSlice";
import percentReducer from "./percentSlice";
import usersReducer from "./usersSlice";

const reducer = combineReducers({
    countReducer,
    percentReducer,
    usersReducer
})


export const store = configureStore({
    reducer
})

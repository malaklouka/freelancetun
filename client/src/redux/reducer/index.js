import {combineReducers} from "redux"
import { userReducer } from "./reducer"
import {offreReducer} from "./offreReducer"
export const rootReducer=combineReducers({userReducer,offreReducer})
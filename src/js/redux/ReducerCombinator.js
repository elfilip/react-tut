/**
 * Created by elfilip on 10.8.17.
 */
import {combineReducers} from "redux";

import addsReducer from "./AddsReducer";
import settingsReducer from "./SettingsReducer";
import restReducer from "./RestReducer";

const AddsReducers = combineReducers({
    addsReducer,
    settingsReducer,
    restReducer
});

export default AddsReducers;
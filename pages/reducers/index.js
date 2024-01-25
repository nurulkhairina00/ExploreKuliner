import { combineReducers } from "redux";
import artikelReducer from "./artikel";
import restoranReducer from "./restoran";

const rootReducer = combineReducers({
  artikelReducer,
  restoranReducer,
});

export default rootReducer;

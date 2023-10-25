const { combineReducers, configureStore } = require("@reduxjs/toolkit");

import loginReducer from "./login/slice";
import registerReducer from "./register/slice";
import carReducer from "./cars/slice";
import orderReducer from "./orders/slice"

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  car: carReducer,
  order: orderReducer
});

export default configureStore({
  reducer: rootReducer,
});

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import loginReducer from "./slices/loginSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        login: loginReducer
    }
});

export default store;
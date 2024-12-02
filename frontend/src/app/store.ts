import { configureStore } from "@reduxjs/toolkit";
import playListReducer from "../features/playList/playListSlice"
import formReduser from "../features/users/startUser";

export const store = configureStore({

    reducer:{
        playList: playListReducer ,
        user: formReduser,

    }

})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
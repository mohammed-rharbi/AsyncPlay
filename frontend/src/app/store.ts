import { configureStore } from "@reduxjs/toolkit";
import playListReducer from "../features/playList/playListSlice"

export const store = configureStore({

    reducer:{
        playList: playListReducer 

    }

})
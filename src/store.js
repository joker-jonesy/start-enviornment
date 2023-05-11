import {configureStore} from "@reduxjs/toolkit";
import characters from "./reducers/character";

const store = configureStore({
    reducer:{
        characters: characters
    }
})

export default store;
import { configureStore } from '@reduxjs/toolkit'
import shoppingCartReducer from "./reducers/shoppingCart";

export default configureStore({
    reducer: {
        shoppingCart: shoppingCartReducer,
    }
})
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: {
        shoppingCart: <number[]>[]
    },
    reducers: {
        addItem: (state, action: PayloadAction<number>) => {
            state.shoppingCart.push(action.payload)
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.shoppingCart.splice(state.shoppingCart.indexOf(action.payload), 1)
        },
        removeAll: (state, action: PayloadAction<number>) => {
            state.shoppingCart = []
        },
    }
})

export const { addItem, removeItem, removeAll } = shoppingCartSlice.actions

export default shoppingCartSlice.reducer
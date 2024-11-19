import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialTermo = {
    termo: string
}

const initialState: initialTermo = {
    termo: ''
}

const filtroSlice = createSlice({
    name: 'filtro',
    initialState,
    reducers: {
        alterarTermo: (state, action: PayloadAction<string>) => {
            state.termo = action.payload
        }
    }
})

export const {alterarTermo} = filtroSlice.actions

export default filtroSlice.reducer
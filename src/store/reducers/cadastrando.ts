import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateCadastrando = {
    valor: boolean
}

const initialState: InitialStateCadastrando = {
    valor: false
}


const cadastrandoSlice = createSlice({
    name: 'cadastrando',
    initialState,
    reducers: {
        cadastrando: (state, action: PayloadAction<boolean>) => {
            state.valor = action.payload
    }
    }
})

export const {cadastrando} = cadastrandoSlice.actions

export default cadastrandoSlice.reducer
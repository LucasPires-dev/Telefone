import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {ContatoType} from './contatos'

type InitialContatoEditando = {
    valor: ContatoType
    estaEditando: boolean
}

const initialState: InitialContatoEditando = {
    valor: {
        id: 0,
        nome: "",
        numero: "",
    },
    estaEditando: false
}

const contatoEditando = createSlice({
    name: 'contatoEditando',
    initialState,
    reducers: {
        adicionar: (state, action: PayloadAction<ContatoType>) => {
            state.valor = {
                id: action.payload.id,
                nome: action.payload.nome,
                numero: action.payload.numero
            }
        },
        editando: (state, action: PayloadAction<boolean>) => {
            state.estaEditando = action.payload
    }
}})

export const {adicionar, editando} = contatoEditando.actions

export default contatoEditando.reducer
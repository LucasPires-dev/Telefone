import { configureStore } from "@reduxjs/toolkit";

import contatosReducer from './reducers/contatos'
import contatoEditandoReducer from "./reducers/contatoEditando";
import cadastrandoReducer from "./reducers/cadastrando"
import filtroReducer from "./reducers/filtro"

const store = configureStore({
    reducer: {
        contatos: contatosReducer,
        contatoEditando: contatoEditandoReducer,
        cadastrando: cadastrandoReducer,
        filtro: filtroReducer

    }
})

export default store

export type RootReducer = ReturnType<typeof store.getState>
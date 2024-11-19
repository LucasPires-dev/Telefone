import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ContatoType = {
    id: number
    nome: string
    numero: string
}

type ContatosInicial = {
    itens: ContatoType[]
}

const initialState: ContatosInicial = {
    itens: [
        {   id: 1,
            nome: "Lucas Pires",
            numero: "40028922"
        }, 
        {   id: 2,
            nome: "Manoel Souza",
            numero: "40028923"
        }
    ]
}

const contatosSlice = createSlice({
    name: 'contatos',
    initialState,
    reducers: {
        adicionar: (state, action: PayloadAction<ContatoType>) => {
            const repetido = state.itens.filter(item => item.numero === action.payload.numero).length
            console.log(repetido)
            if(repetido){
                alert('Número já cadastrado')
        } else {
            state.itens.push(action.payload)
        }
    },
    editar: (state, action: PayloadAction<ContatoType>) => {
        const indexDoContato = state.itens.findIndex(item => item.id === action.payload.id)
        state.itens[indexDoContato] = action.payload
    },
    excluir: (state, action: PayloadAction<number>) => {
        state.itens = state.itens.filter((item) => item.id !== action.payload )
    }
}
})

export const { adicionar, editar, excluir } = contatosSlice.actions
export default contatosSlice.reducer
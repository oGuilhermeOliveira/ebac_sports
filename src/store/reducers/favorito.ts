import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const favorito = action.payload

      if (state.itens.find((p) => p.id === favorito.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(favorito)
      }
    }
  }
})

export const { favoritar } = favoritoSlice.actions

export default favoritoSlice.reducer

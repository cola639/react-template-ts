import { ThemeType } from '../../interfaces/interfaces'
import { createSlice, createAction, PrepareAction, PayloadAction } from '@reduxjs/toolkit'

// interface state
export interface ThemeState {
  themeType: 'light' | 'dark'
}
const defaultTheme = (localStorage.getItem('theme') as ThemeType) || 'dark'

const initialState: ThemeState = {
  themeType: defaultTheme
}

export const setTheme = createAction<PrepareAction<ThemeType>>(
  'theme/setTheme',
  (theme: ThemeType) => {
    console.log('🚀 >> theme', theme)
    localStorage.setItem('theme', theme)
    return {
      payload: theme
    }
  }
)

export const themeSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      console.log('🚀TCL: >> state', state)
      console.log('🚀TCL: >> action', action)
      state.themeType = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(setTheme, (state, action) => {
      state.themeType = action.payload
    })
  }
})

export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer

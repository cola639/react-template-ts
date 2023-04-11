import counterReducer from './counterSlice'
import themeReducer from './themeSlice'

const allReducer = {
  counter: counterReducer,
  theme: themeReducer
}

export default allReducer

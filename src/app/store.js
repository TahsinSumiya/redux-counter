import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/Counter/CounterSlice'
import themeReducer from '../features/theme/ThemeSlice'
export default configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer
  },
})
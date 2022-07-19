import { configureStore, combineReducers } from "@reduxjs/toolkit"
import userReducer from './userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer
  }
})
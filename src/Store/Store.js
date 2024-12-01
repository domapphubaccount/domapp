"use client"
import { configureStore } from '@reduxjs/toolkit'
import headerRed from './reducers/Header'

export const store = configureStore({
  reducer: {
    headerRed,
    
  },
})
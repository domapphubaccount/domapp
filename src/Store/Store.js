"use client"
import { configureStore } from '@reduxjs/toolkit'
import headerRed from './reducers/Header'
import MainData from './Main/Main'

export const store = configureStore({
  reducer: {
    headerRed,
    MainData
    
  },
})
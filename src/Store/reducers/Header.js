"use client"
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  contact_Toggle: false,
}

export const headerRed = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    contact_Toggle: (state , action) => {
      state.contact_Toggle = action.payload
    }
  },
})

export const { contact_Toggle} = headerRed.actions

export default headerRed.reducer
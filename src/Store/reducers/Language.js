"use client"
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  lang: (typeof window !== "undefined" && localStorage.getItem("lang")) || "ar",
  dir: (typeof window !== "undefined" && localStorage.getItem("lang") == "en" ? "ltr" : "rtl") || "rtl"
}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    handle_language: (state , action) => {
      state.lang = action.payload.lang;
      state.dir = action.payload.dir;
    }
  },
})

export const { handle_language} = languageSlice.actions

export default languageSlice.reducer
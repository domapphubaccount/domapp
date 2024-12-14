"use client"
import { configureStore } from '@reduxjs/toolkit'
import headerRed from './reducers/Header'
import MainData from './Main/Main'
import languageSlice from './reducers/Language'
import homeRed from './reducers/Home'
import contactRed from './reducers/ContactUs'
import cladcutRed from './reducers/CladCut'
import windmasterRed from './reducers/Windmaster'
import chatplusRed from './reducers/ChatPlus'
import byldRed from './reducers/Byld'
import customSoftwareRed from './reducers/CustomSoftware'
import grasshopperRed from './reducers/Grasshopper'
import rdAppRed from './reducers/rdApp'
import bondifycrmRed from './reducers/Bondifycrm'

export const store = configureStore({
  reducer: {
    headerRed,
    MainData,
    homeRed,
    contactRed,
    cladcutRed,
    chatplusRed,
    windmasterRed,
    grasshopperRed,
    customSoftwareRed,
    byldRed,
    bondifycrmRed,
    rdAppRed,
    languageSlice
  },
})
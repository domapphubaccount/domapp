"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../Store";
import Contact from "@/components/Contact/Contact";
import { AOSInit } from "@/components/Animation/aos";
import ScrollToTop from "react-scroll-to-top";

function StoreProvider({ children }) {
  return (
    <Provider store={store}>
      <AOSInit />
      {children}
      <Contact />
      <ScrollToTop
        smooth
        color="#fff"
        style={{
          backgroundColor: "#525A63",
          padding: "5px",
          borderRadius: "50%",
          left: "20px",
        }}
      />
    </Provider>
  );
}

export default StoreProvider;

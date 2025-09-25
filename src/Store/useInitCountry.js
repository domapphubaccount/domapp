"use client";

import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCountry } from "./reducers/Country";

export default function useInitCountry() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedCountry = localStorage.getItem("country");
    const storedCurrency = localStorage.getItem("currency");
    const storedManual = localStorage.getItem("isManual") === "true";

    if (storedCountry && storedCurrency) {
      dispatch(
        setCountry({
          country: storedCountry,
          currency: storedCurrency,
          isManual: storedManual,
        })
      );
      return;
    }

    axios
      .get("https://get.geojs.io/v1/ip/country.json")
      .then((response) => {
        const country = response.data.country;
        let currency = "USD";

        if (country === "EG") {
          currency = "EGP";
        } else if (["SA", "AE", "KW", "QA", "BH", "OM"].includes(country)) {
          currency = "SAR";
        }

        dispatch(setCountry({ country, currency }));
        localStorage.setItem("country", country);
        localStorage.setItem("currency", currency);
        localStorage.setItem("isManual", "false");
      })
      .catch(() => {
        dispatch(setCountry({ country: "Unknown", currency: "USD" }));
        localStorage.setItem("country", "Unknown");
        localStorage.setItem("currency", "USD");
        localStorage.setItem("isManual", "false");
      });
  }, [dispatch]);
}

"use client";

import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCountry } from "./reducers/Country";

export default function useInitCountry() {
  const dispatch = useDispatch();

  useEffect(() => {
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

        console.log("🌍 Detected country:", country, "💰 Currency:", currency);

        dispatch(setCountry({ country, currency, isManual: false }));
      })
      .catch(() => {
        dispatch(setCountry({ country: "Unknown", currency: "USD", isManual: false }));
      });
  }, [dispatch]);
}

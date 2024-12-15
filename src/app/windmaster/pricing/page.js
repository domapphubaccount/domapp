"use client";
import React from "react";
import { Suspense } from "react";
import Loading from "./loading";
import dynamic from "next/dynamic";
const Pricing = dynamic(() => import("@/pages_sups/Products/Wind/Pricing"), {
  ssr: false,
});

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <Pricing />
    </Suspense>
  );
}

"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "./loading";

const Home = dynamic(() => import("@/app/home/page"), { ssr: false })

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <Home />
    </Suspense>
  );
}

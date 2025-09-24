"use client";

import { useEffect, useState } from "react";
import Loading_page from "@/components/Loading_page/Loading_page";

export default function ClientWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading_page />;
  }

  return <>{children}</>;
}

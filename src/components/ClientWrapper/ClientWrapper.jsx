"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Loading_page from "@/components/Loading_page/Loading_page";

export default function ClientWrapper({ children }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname(); 

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (loading) {
    return <Loading_page />;
  }

  return <>{children}</>;
}

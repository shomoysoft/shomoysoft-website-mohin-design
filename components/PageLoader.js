"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PageLoader() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  // Whenever pathname changes, hide loader
  useEffect(() => {
    if (loading) {
      setLoading(false); // stop loader after navigation
    }
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center pointer-events-none">
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export const usePageLoader = () => {
  const [loading, setLoading] = useState(false);
  return { loading, setLoading };
};

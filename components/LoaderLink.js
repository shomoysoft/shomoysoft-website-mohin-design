"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoaderLink({ href, children, full = false }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    router.push(href);
  };

  const classes = full
    ? "w-full h-full p-0 border-none bg-transparent text-left"
    : "relative inline-flex items-center";

  return (
    <>
      <div onClick={handleClick} className={classes} role="button">
        {children}
      </div>

      {loading && (
        <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </>
  );
}

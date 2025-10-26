// components/PageLoaderContext.js
"use client";
import { createContext, useState } from "react";

export const PageLoaderContext = createContext();

export const PageLoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <PageLoaderContext.Provider value={{ loading, setLoading }}>
      {children}
    </PageLoaderContext.Provider>
  );
};

"use client";

import { createContext, useEffect, useState } from "react";

export const LoaderContext = createContext({
  loaderFinished: false,
  setLoaderFinished: () => {},
});

export const LoaderProvider = ({ children }) => {
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <LoaderContext.Provider value={{ loaderFinished, setLoaderFinished }}>
      {mounted ? children : null}
    </LoaderContext.Provider>
  );
};

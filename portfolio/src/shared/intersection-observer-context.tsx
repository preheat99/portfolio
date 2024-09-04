import React, { createContext, useContext, useEffect, useState } from "react";

const IntersectionObserverContext = createContext<any>({});

export const useIntersectionObserver = () =>
  useContext(IntersectionObserverContext);

export const IntersectionObserverProvider = ({ children }: any) => {
  const [observedEntries, setObservedEntries] = useState({});
  useEffect(() => {
    const handleIntersect = (entries: any) => {
      // console.log(entries);
      const updatedEntries: any = {};
      entries.forEach((entry: any) => {
        updatedEntries[entry.target.dataset.viewport] = entry.isIntersecting;
      });
      setObservedEntries((prevState: any) => ({
        ...prevState,
        ...updatedEntries,
      }));
    };
    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.1,
    });
    const elements = document.querySelectorAll("[data-viewport]");

    elements.forEach((ele) => observer.observe(ele));

    return () => {
      elements.forEach((ele) => observer.unobserve(ele));
    };
  }, []);

  return (
    <IntersectionObserverContext.Provider value={observedEntries}>
      {children}
    </IntersectionObserverContext.Provider>
  );
};

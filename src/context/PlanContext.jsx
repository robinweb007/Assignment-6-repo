"use client";

import React, { createContext, useState } from "react";

export const PlanContext = createContext({});

export const PlanProvider = ({ children }) => {
  const [todayPlans, setTodayPlans] = useState([]);
  const [savedPlans, setSavedPlans] = useState([]);
  const sheardData = {
    todayPlans,
    setTodayPlans,
    savedPlans,
    setSavedPlans,
  };
  return (
    <PlanContext.Provider value={sheardData}>
      {children}
      </PlanContext.Provider>
  );
};

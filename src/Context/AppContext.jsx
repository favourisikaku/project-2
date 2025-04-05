import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const UserContext = ({ children }) => {
  return <AppContext.Provider>{children}</AppContext.Provider>;
};

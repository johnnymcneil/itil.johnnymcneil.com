import React from "react";

export const NavState = React.createContext({
  isOpen: false,
  toggleNav: () => {},
  router: null,
})
import React from "react";
import { atom } from "recoil";

export const cartData = atom({
  key: "cartData",
  default: [],
});

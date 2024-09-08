/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // screens: {
    //   sm: "640px",
    //   // => @media (min-width: 640px) { ... }

    //   md: "768px",
    //   // => @media (min-width: 768px) { ... }

    //   lg: "1057px",
    //   // => @media (min-width: 1024px) { ... }
    // },

    extend: {
      fontFamily: {
        poppins: ['"Poppins" ', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

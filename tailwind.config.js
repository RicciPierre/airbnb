module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        corail: ["1px solid #FD5B61", "2px"],
      },
      textColor: {
        corail: "#FD5B61",
      },
      backgroundColor: {
        corail: "#FD5B61",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

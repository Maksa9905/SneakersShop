/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      pink: "#FADCDC",
      neutral_01: "#FFFFFF",
      neutral_02: "#D3D3D3",
      neutral_03: "#000000",
      red: "#C94343",
      modal_bg: "rgba(0,0,0,0.5)",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      heading: ["Roboto", "sans-serif"],
    },
    backgroundImage: {
      favorite: "url('/src/assets/favorite_icon.svg')",
      cart: "url('/src/assets/cart_icon.svg')",
      cart_favorite: "url('/src/assets/cart_favorite_icon.svg')",
      cart_favorite_active: "url('/src/assets/cart_favorite_icon_active.svg')",
      cart_trash: "url('/src/assets/cart_trash_icon.svg')",
      minus: "url('/src/assets/minus.svg')",
      plus: "url('/src/assets/plus.svg')",
      empty_box: "url(/src/assets/emptyBox.png)",
    },
  },
  plugins: [],
};

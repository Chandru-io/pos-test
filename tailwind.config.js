import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],

  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color-light)",
        primary_hover: "var(--primary-hover-light)",
        secondary: "var(--secondary-color-light)",
        secondary_hover: "var(--secondary-hover-light)",
        primary_button: "var(--Primary-button-color-light)",
        primary_button_hover: "var(--Primary-button-hover-light)",
        secondary_button: "var(--secondary-button-color-light)",
        secondary_button_hover: "var(--secondary-button-hover-light)",
      },
    },
  },
  plugins: [flowbite.plugin()],
};

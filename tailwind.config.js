/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        Email: "url('../src/assets/Mail.svg')",
        Menu: "url('../src/assets/Dropdown.svg')",
        Arrow: "url('../src/assets/Arrow.svg')",
        background: "url('..src/images/Background.jpeg')",
      },
    },
  },
  plugins: [require("daisyui")],
};

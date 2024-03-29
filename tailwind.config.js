/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        Email: "url('../src/assets/Mail.svg')",
        Menu: "url('../src/assets/Dropdown.svg')",
        Arrow: "url('../src/assets/Arrow.svg')",
        LinkedIn: "url('../src/assets/Linkedin.svg')",
        Facebook: "url('../src/assets/Facebook.svg')",
      },
    },
  },
  plugins: [require("daisyui")],
};

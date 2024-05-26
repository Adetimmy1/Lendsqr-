/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        "prompt" : ['Prompt','san-serif' ],
        "roboto" : ['Tahoma','san-serif' ],
        "work" : ['Work Sans','san-serif' ],
      },
      colors:{
        "bold": "#213F7D",
        "regular": "#545F7D",
        "semi" : "#213F7D",
        "pending": "#E9B200",
        "active": "#39CD62",
        "inactive": "#545F7D",
        "blacklist": "#E4033B",
      },
    },
  },
  plugins: [],
};

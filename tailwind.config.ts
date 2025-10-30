import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: { // dark       , light      , Purple           
          background: "#0F172A", // #F9FAFB      , #0F0F1A
          primary: "#3B82F6", // #2563EB   , #6366F1
          secondary: "#38BDF8", // #14B8A6  ,  #8B5CF6
          section: "#1E293B", 
          lightText: "#F8FAFC", // #0F172A  , #E5E7EB
          grayText: "#E2E8F0", // #6B7280
        },
      },
    },
  },
  plugins: [],
};

export default config;

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], //tree-shake unused styles in production builds
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        hasob: "url('/src/assets/hasob-bg.jpeg')",
      }),
      borderWidth: {
        3: "3px",
      },
      height: {
        90: "90px",
      },
      width: {
        "fit-content": "fit-content",
      },
    },
    fontFamily: {
      sans: ["Quicksand", "sans-serif"],
    },
    fontSize: {
      base: "0.875rem", // 14px
      xl: "1.5rem", // 24px
      "2xl": "2.25rem", // 36px
    },
    colors: {
      transparent: "transparent",
      black: "#000000",
      white: "#ffffff",
      red: {
        400: "#DD5862", // Dashboard: Users
        500: "#FF0000", // Dashboard: Notifications
        600: "#C73B40", // Active Button Colour
      },
      blue: {
        400: "#A7D1E9", // Dashboard: Locations
        500: "#3693C9", // Dashboard: List of assets
      },
      yellow: {
        DEFAULT: "#FEAE68", // Dashboard: Assigned Asset Card
      },
      pink: {
        DEFAULT: "#FF5896", // Dashboard: Unassigned Asset Card
      },
      gray: {
        200: "#858585",
        300: "#E8EBED",
        400: "#E2E6E9", // Dashboard: Vendors Card
        500: "#D4DBDF", // Background Colour, Inactive Button and Input field colours
        600: "#B8BCC2",
        700: "#6B7280",
      },
      linkedin: {
        DEFAULT: "#2867B2",
      },
      twitter: {
        DEFAULT: "#1DA1F2",
      },
      facebook: {
        DEFAULT: "#4267B2",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

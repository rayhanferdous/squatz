/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
            screens: {
                "cus-sm": "570px",
                "mix-xl": "1400px",
                "res-xl": "1842px",
                "2xl": "1920px",
            },
            colors: {
                backgroundColor: "#181B1C",
                btnPrimary: "#49D273",
                btnSecondery: "#2CE6F9",
                linkText: "#B4B5B5",
                "border-b": "#929292",
                card: "#2A2D2E",
                cardText: "#D6D6D7",
                cardBtn: "#414245",
                lightGreen: "#335F42",
                darkGreen: "#48CF72",
            },
        },
    },
    plugins: [],
};

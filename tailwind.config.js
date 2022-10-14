/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./node_modules/flowbite-react/**/*.js",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                pink_: "#ef476f",
                yellow_: "#ffd166",
                green_: "#06d6a0",
                skyblue_: "#118ab2",
                darkblue_: "#073b4c",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
}

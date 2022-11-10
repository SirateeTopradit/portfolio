import React, { useState, useEffect, useRef, Fragment } from "react";
import Typed from "typed.js";
import "./css/home.css";
import "@google/model-viewer/dist/model-viewer";

function Home() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["👋, I'm Siratee topradit", "👯 Welcome to my Portfolio", "🌱 I’m currently learning AI/ML"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 50,
            backSpeed: 20,
            backDelay: 1000,
            smartBackspace: true,
            loop: true,
            showCursor: true,
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    const locale = "en";
    const [today, setDate] = React.useState(new Date());

    React.useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    const day = today.toLocaleDateString(locale, { weekday: "long" });
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(
        locale,
        { month: "long" }
    )}\n\n`;

    const hour = today.getHours();
    const wish = `Good ${
        (hour < 12 && "Morning") || (hour < 17 && "Afternoon") || "Evening"
    }, `;

    const time = today.toLocaleTimeString(locale, { hour12: false });

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <div
            className={`min-h-screen bg-left bg-no-repeat bg-cover home ${
                theme === "dark" ? "dark" : "light"
            } text-white`}
        >
            <div class="container mx-auto flex px-16 py-24 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="m-5 text-3xl text-left sm:text-4xl">
                        <span class="title-font sm:text-xl text-l mb-4 font-medium inline">Hi </span>
                        <span
                            class="title-font sm:text-xl text-m mb-4 font-medium inline"
                            ref={el}
                        ></span>
                    </h1>
                    <p class="mb-8 leading-relaxed shadow">
                        {date} {time} <br />
                        {wish}
                        <br />
                        Width: {windowSize.innerWidth} Height:{" "}
                        {windowSize.innerHeight}
                    </p>
                    <div class="flex justify-center">
                        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Button
                        </button>
                        <button class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                        Download CV
                        </button>
                    </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img src={require("./pic/Saly.png")} alt="saly" />
                </div>
            </div>
        </div>
    );
}

function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}

export default Home;

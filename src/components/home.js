import React, { useState, useEffect, useRef, Fragment } from "react";
import Typed from "typed.js";
import "./css/home.css";
import "@google/model-viewer/dist/model-viewer";

function Home() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["š, I'm Siratee topradit", "šÆ Welcome to my Portfolio", "š± Iām currently learning AI/ML"], // Strings to display
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
            <div class="container mx-auto flex px-16 py-24 md:flex-row flex-col items-center max-w-[75%] h-[100vh]">
                <div class="lg:flex-grow md:w-3/4 lg:pr-24 flex flex-col md:items-center md:text-left mb-16 items-center text-center mt-auto  md:mt-0">
                    
                    <h1 className="m-5 left text- sm:text-sm md:text-xl">
                        <span class="title-font mb-4 font-medium inline">Hi </span>
                        <span
                            class="title-font mb-4 font-medium inline"
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
                            Discovery
                        </button>
                        <button class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                        Download CV
                        </button>
                    </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 mb-auto w-5/6 md:inset-x-0  md:mb-0">
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

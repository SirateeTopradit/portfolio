import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Si42 } from "react-icons/si";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import "./css/header.css";

function Header() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [enabled, setEnabled] = useState(false);

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
        window.location.reload(false);
    };
    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.body.className = theme;
    }, [theme]);

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener("scroll", onScroll);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div
            className={`fixed w-full h-12 header z-50 ${
                (offset === 0)&&!click ? "bg-transparent text-white" : "fff"
            }`}
        >
            <div className="container max-w-6xl ">
                <div className="flex items-center justify-between h-12 m-auto header-container drop-shadow-2xl">
                    <div className="logo-container logo drop-shadow-2xl">
                        <a href="#">Portfolio</a>
                    </div>
                    <div className="ml-4 logo-container logo-active">
                        <a href="#">
                            <Si42 />
                        </a>
                    </div>
                    <ul
                        className={`${click ? "menu active" : "menu "} ${
                            (offset === 0)&&!click ? "bg-transparent" : "fff"
                        }`}
                    >
                        <li
                            className="menu-link drop-shadow-2xl"
                            onClick={closeMobileMenu}
                        >
                            <a href="#">ABOUT</a>
                        </li>
                        <li
                            className="menu-link drop-shadow-2xl"
                            onClick={closeMobileMenu}
                        >
                            <a href="#">CONTACT</a>
                        </li>
                        <li
                            className="menu-link drop-shadow-2xl"
                            onClick={closeMobileMenu}
                        >
                            <a href="#">BLOG</a>
                        </li>
                    </ul>
                    <div className="ml-[3.25rem] mobile-menu" onClick={handleClick}>
                        {click ? <FiX /> : <FiMenu />}
                    </div>
                    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
                        <div className="flex">
                            <label class="inline-flex relative items-center mr-5 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={theme === "dark"}
                                    readOnly
                                />
                                <div
                                    onClick={() => {
                                        toggleTheme();
                                    }}
                                    className="w-11 h-6 bg-[#9b2331] rounded-full peer  peer-focus:ring-[#914fac]  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#914fac]"
                                ></div>
                                <span className="ml-2">
                                    <div
                                        className={`"dl" ${
                                            theme === "dark" ? "active" : "not"
                                        }`}
                                        onClick={toggleTheme}
                                    >
                                        <MdDarkMode />
                                    </div>
                                    <div
                                        className={`"dl " ${
                                            theme === "dark" ? "not" : "active"
                                        }`}
                                        onClick={toggleTheme}
                                    >
                                        <MdLightMode />
                                    </div>
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Si42 } from "react-icons/si";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import "./css/header.css";

function Header() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "dark"
    );
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
                offset === 0 ? "bg-transparent text-white" : "fff"
            }`}
        >
            <div className="container max-w-6xl ">
                <div className="flex items-center justify-between h-12 header-container drop-shadow-2xl">
                    <div className="logo-container logo drop-shadow-2xl">
                        <a href="#">Portfoio</a>
                    </div>
                    <div className="ml-4 logo-container logo-active">
                        <a href="#">
                            <Si42 />
                        </a>
                    </div>
                    <ul
                        className={`${click ? "menu active " : "menu "} ${
                            offset === 0 ? "bg-transparent" : "ffff"
                        }`}
                    >
                        <li className="menu-link drop-shadow-2xl" onClick={closeMobileMenu}>
                            <a href="#">ABOUT</a>
                        </li>
                        <li className="menu-link drop-shadow-2xl" onClick={closeMobileMenu}>
                            <a href="#">CONTACT</a>
                        </li>
                        <li className="menu-link drop-shadow-2xl" onClick={closeMobileMenu}>
                            <a href="#">BLOG</a>
                        </li>
                    </ul>
                    <div className="mr-4 mobile-menu" onClick={handleClick}>
                        {click ? <FiX /> : <FiMenu />}
                    </div>
                    <div className="p-1 mr-4 border-2 border-white rounded dark-light logo-container">
                        <div
                            className={`"dl" ${theme === "dark" ? "active" : "not"}`}
                            onClick={toggleTheme}
                        >
                            <MdDarkMode />
                        </div>
                        <div
                            className={`"dl" ${theme === "dark" ? "not" : "active"}`}
                            onClick={toggleTheme}
                        >
                            <MdLightMode />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

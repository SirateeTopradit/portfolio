import React, { useState, useEffect } from "react";
import "./css/home.css";

function Home() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
        
    );
    console.log(theme);
    return (
    <div className={`min-h-screen bg-left bg-no-repeat bg-cover home ${theme === "dark" ? "darkBG" : "lightBG"}`}></div>
    );
}

export default Home;

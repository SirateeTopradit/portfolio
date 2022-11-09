import React, { useState, useEffect, useRef, Fragment } from "react";
import Typed from "typed.js";
import { Stage, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { GLTFModel, AmbientLight, DirectionLight } from "react-3d-viewer";
import "./css/home.css";
import "@google/model-viewer/dist/model-viewer";

function Model(props) {
    const { scene } = useGLTF("./pic/deal_with_it_doge.glb");
    return <primitive object={scene} {...props} />;
}

function Home() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Handy", "Mandy", "Candy", "More Strings"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 500,
            smartBackspace: true,
            loop: true,
            showCursor: true,
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div
            className={`min-h-screen bg-left bg-no-repeat bg-cover home ${
                theme === "dark" ? "dark" : "light"
            } text-white p-20`}
        >
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="m-5 text-3xl text-left sm:text-4xl">
                        <span
                            class="title-font sm:text-4xl text-3xl mb-4 font-medium inline"
                            ref={el}
                        ></span>
                    </h1>
                    <p class="mb-8 leading-relaxed shadow">
                        Copper mug try-hard pitchfork pour-over freegan heirloom
                        neutra air plant cold-pressed tacos poke beard tote bag.
                        Heirloom echo park mlkshk tote bag selvage hot chicken
                        authentic tumeric truffaut hexagon try-hard chambray.
                    </p>
                    <div class="flex justify-center">
                        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Button
                        </button>
                        <button class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                            Button
                        </button>
                    </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img src={require('./pic/Saly.png')} alt="saly" />
                </div>
            </div>
        </div>
    );
}

export default Home;

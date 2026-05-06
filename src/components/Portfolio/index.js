import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

import codeSwitching from "../../assets/images/cropped/16-9_codeSwitching.png";
import finbud from "../../assets/images/cropped/16-9_finbud.png";
import malguard from "../../assets/images/cropped/16-9_malguard.png";
import pulse from "../../assets/images/cropped/16-9_pulse.png";
import qrm from "../../assets/images/cropped/16-9_qrm.png";
import xpcredit from "../../assets/images/cropped/16-9_xpcredit.png";


const projects = [
    {
        image: codeSwitching,
        name: "mBART-51",        // TODO: title
        description: "Live-translation model made for code-switching languages.", // TODO: description
        url: "https://github.com/drewoodward/mbart-51",         // TODO: link
    },
    {
        image: finbud,
        name: "Finbud",
        description: "Stock prediction ML model with AI-driven commentary on each forecast.",
        url: "https://finbud.xyz",
    },
    {
        image: malguard,
        name: "MalGuard",
        description: "AI-driven malware detection Google Chrome and Firefox extension.",
        url: "https://github.com/drewoodward/urlchecker",
    },
    {
        image: pulse,
        name: "Pulse",
        description: "JPMC Code For Good Hackathon 2025",
        url: "https://blackheartassociation.org/",
    },
    {
        image: qrm,
        name: "QuantumReach",
        description: "Web application for marketing client.",
        url: "https://quantumreach.vercel.app/",
    },
    {
        image: xpcredit,
        name: "XP Credit",
        description: "AI-driven credit scoring system.",
        url: "https://github.com/drewoodward/xp-credit",
    },
];

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img
                                src={port.image}
                                className="portfolio-image"
                                alt={port.name || "portfolio"} />
                                <div className="content">
                                    <p className="title">{port.name}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => port.url && window.open(port.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio(projects)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;

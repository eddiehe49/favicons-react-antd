import React from "react";
import '../App.css';
import logo from "../logo.svg"
import { useEffect } from "react";
import waline from '../services/Waline.js';

function About(params) {
    useEffect(() => {
        waline.update()
    }, [])
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    <strong>What are favicons?</strong>
                    <br />
                    Check out this <a href="https://eddiehe.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: "#1890ff" }}>
                        site
                    </a> on your desktop browser.
                    <br />
                    Do you see the tiny icon in the left of the tab? That's a favicon!
                </p>
                <p>
                    Powerd by&nbsp;
                    <a className="App-link" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                        React
                    </a>
                    &nbsp;<code>&</code>&nbsp;
                    <a className="App-link" href="https://ant.design/index-cn" target="_blank" rel="noopener noreferrer">
                        Ant Design
                    </a>
                    &nbsp;<code>&</code>&nbsp;
                    <a className="App-link" href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener noreferrer">
                        JSONPlaceholder
                    </a>
                    &nbsp;<code>&</code>&nbsp;
                    <a className="App-link" href="https://app.krat.es/" target="_blank" rel="noopener noreferrer">
                        Krates
                    </a>
                    &nbsp;<code>&</code>&nbsp;
                    <a className="App-link" href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
                        Vercel
                    </a>
                </p>
                <p>Coded by&nbsp;
                    <a className="App-link" href="https://eddiehe.super.site/" target="_blank" rel="noopener noreferrer">
                        Eddie He
                    </a>
                </p>
            </header>
        </div>
    )
}

export default About;
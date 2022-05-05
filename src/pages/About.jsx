import React from "react";
import '../App.css';
import logo from "../logo.svg"
import { useEffect, useContext } from "react";
import { Button } from 'antd';
import waline from '../services/Waline.js';
import { modal } from "../App"

function About(params) {
    const { setFaviconsIntroductionModalVisible } = useContext(modal)

    useEffect(() => {
        waline.update()
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Button type="primary" onClick={() => { setFaviconsIntroductionModalVisible(true) }} style={{ margin: "1% 0 2% 0" }}>
                    What are favicons?
                </Button>
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
        </div >
    )
}

export default About;
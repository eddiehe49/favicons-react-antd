import React from "react";
import '../App.css';
import logo from "../logo.svg"
import { useEffect, useState } from "react";
import waline from '../services/Waline.js';
import { Drawer, Button } from 'antd';

function About(params) {
    const [drawerVisible, setDrawerVisible] = useState(false);

    useEffect(() => {
        waline.update()
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Button type="primary" onClick={() => { setDrawerVisible(true) }} style={{ padding: "3% 0 3% 0" }}>
                    What are favicons?
                </Button>
                <Drawer
                    title="What are favicons?"
                    placement={"bottom"}
                    onClose={() => { setDrawerVisible(false) }}
                    visible={drawerVisible}
                    height={"250"}
                >
                    <h3>
                        <br />
                        Check out this <a href="https://eddiehe.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: "#1890ff" }}>
                            site
                        </a> on your desktop browser.
                        <br />
                        Do you see the tiny icon in the left of the tab?
                        <br />
                        That's a favicon!
                    </h3>
                </Drawer>
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
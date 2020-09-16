import React, { useState, useEffect } from 'react';

import './Main.scss';
import Ticket from "./ticket/Ticket.jsx";

/**
 * Контейнер с основным содержимым
 */
const Main = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            const RSS_URL = `https://sweb.ru/export/turbojournal/`;
            fetch(RSS_URL)
                .then(response => response.text())
                .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
                .then(result => {
                    setData( Array.from(result.querySelectorAll("item")) );
                })
        };

        fetchData();
    });

    return (
        <main className="main">
            <div className="content">
                <div className="content__page-headers">
                    <span className="mute-title">Поддержка</span>
                    <h1 className="title">Поддержка</h1>
                </div>
                <div className="navbar">
                    <ul className="navbar__list">
                        <li className="item">
                            <a href="#" className="link">Заявка</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">Шаблоны</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link active">История заявок</a>
                        </li>
                    </ul>
                </div>
                <div className="tickets">
                    {
                        data.map(item => (
                            <Ticket title={item.querySelector("title").innerHTML}
                                    text={item.querySelector("content").innerHTML.substring(0, )} />
                        ))
                    }
                </div>
            </div>
        </main>
    );
};

export default Main;
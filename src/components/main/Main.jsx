import React from 'react';

import './Main.scss';

/**
 * Контейнер с основным содержимым
 */
const Main = () => (
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
        </div>
    </main>
);

export default Main;
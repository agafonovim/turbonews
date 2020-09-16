import React from 'react';

import './Header.scss';

/**
 * Шапка страницы
 */
const Header = () => (
    <header className="header">
        <div className="user-panel">
            <ul className="user-panel__list">
                <li className="user-panel__list-item">100.00 ₽</li>
                <li className="user-panel__list-item">username</li>
                <li className="user-panel__list-item">Выйти</li>
            </ul>
        </div>
    </header>
);

export default Header;
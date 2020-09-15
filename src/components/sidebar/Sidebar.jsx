import React from 'react';

import './Sidebar.scss';

import Logotype from '../../assets/img/logotype.svg';
import MenuItem from "./menuItem/MenuItem.jsx";

/**
 * Блок в левой части страницы
 */
const Sidebar = () => (
    <aside className="sidebar">
        <div className="logo">
            <a href="https://sweb.ru">
                <img src={Logotype} alt="СпейсВэб" />
            </a>
        </div>
        <nav className="menu">
            <ul className="menu-list">
                <MenuItem icon="account" text="Аккаунт" />
                <MenuItem icon="vps" text="VPS" />
                <MenuItem icon="domains" text="Домены" />
                <MenuItem icon="help" text="Поддержка" active />
            </ul>
        </nav>
    </aside>
);

export default Sidebar;
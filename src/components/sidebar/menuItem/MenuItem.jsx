import React from 'react';

import './MenuItem.scss';

/**
 * Элемент навигации в меню
 *
 * @component
 * @param   {string} icon  CSS класс иконки
 * @param   {string} text  Текст кнопки
 * @param   {boolean} active Активный элемент
 * @return   {string}
 */
const MenuItem = ({icon, text, active}) => {
    const cn = (...args) => args.filter(Boolean).join(' ');
    return (
        <li className="menu-item">
            <a href="#" className={`menu-item__link ${cn(active && "active")}`}>
                <i className={icon}></i> {text}
            </a>
        </li>
    );
};

export default MenuItem;
import React, { useState } from 'react';

import './Ticket.scss';

/**
 * Тикеты в поддержке
 *
 * @component
 * @param   {string} title  Заголовок статьи
 * @param   {string} text  Текст статьи
 * @return   {function}
 */
const Ticket = ({title, text}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const cn = (...args) => args.filter(Boolean).join(' ');

    return (
        <div className="ticket">
            <button className={`toggle-btn ${cn(isOpen && "active")}`} onClick={toggle}>
                <span className="toggle-btn__title">{title}</span>
                <i className={`toggle-btn__icon ${cn(isOpen && "close")}`}></i>
            </button>
            {!isOpen ? null : (
            <div className="ticket-info">
                <div dangerouslySetInnerHTML={{ __html: text }} />
            </div>
            )}
        </div>
    );
};

export default Ticket;
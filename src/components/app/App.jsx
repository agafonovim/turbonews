import React from 'react';

import 'normalize.css';
import './App.scss';
import './Footer.scss';

const App = () => (
    <>
        <div className="main-container">
            <aside></aside>
            <header></header>
            <main></main>
        </div>
        <footer className="footer">
            <div className="footer__copyright">
                <p>
                    © 2001–2020 ООО <a href="#" className="footer_link">«СпейсВэб»</a> <br />
                    Все права защищены. <br />
                    Лицензия <a href="#" className="footer_link">№163230</a>
                </p>
            </div>
            <div className="footer__phones">
                <p>
                    <a href="tel:+78123341222" className="footer_link">+7 (812) 334-12-22</a> (в Санкт-Петербурге) <br />
                    <a href="tel:+74956631612" className="footer_link">+7 (495) 663-16-12</a> (в Москве) <br />
                    <a href="tel:+78001001615" className="footer_link">8 (800) 100-16-15</a> (бесплатно по России)
                </p>
            </div>
        </footer>
    </>
);

export default App;
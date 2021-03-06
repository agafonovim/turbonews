import React from 'react';

import 'normalize.css';
import './App.scss';

import Footer from "../footer/Footer.jsx";
import Sidebar from "../sidebar/Sidebar.jsx";
import Header from "../header/Header.jsx";
import Main from "../main/Main.jsx";

/**
 * Родительский компонент приложения
 */
const App = () => (
    <>
        <div className="container">
            <Sidebar />
            <div className="main-container">
                <Header />
                <Main />
            </div>
        </div>
        <Footer />
    </>
);

export default App;
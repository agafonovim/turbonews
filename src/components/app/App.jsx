import React from 'react';

import 'normalize.css';
import './App.scss';

import Footer from "../footer/Footer.jsx";
import Sidebar from "../sidebar/Sidebar.jsx";

/**
 * Родительский компонент приложения
 */
const App = () => (
    <>
        <div className="container">
            <Sidebar />
            <div className="main-container">
                <header></header>
                <main></main>
            </div>
        </div>
        <Footer />
    </>
);

export default App;
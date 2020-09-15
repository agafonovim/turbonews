import React from 'react';

import 'normalize.css';
import './App.scss';
import Footer from "../footer/Footer.jsx";

const App = () => (
    <>
        <div className="main-container">
            <aside></aside>
            <header></header>
            <main></main>
        </div>
        <Footer />
    </>
);

export default App;
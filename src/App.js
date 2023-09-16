import './App.css';
import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';

function App() {
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <Header/>
            </div>
            <main>
                <Container>
                    <h1>Buisness Control App</h1>
                </Container>
            </main>
            <div className="row">
                <Footer/>
            </div>
        </div>
        </>
    );
}

export default App;

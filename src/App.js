import './App.css';
import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { Container } from 'react-bootstrap';

function App() {
    return(
        <>
        <div>
            <div>
                <Header/>
            </div>
            <main>
                <Container>
                    <h1>Buisness Control App</h1>
                </Container>
            </main>
            <div>
                <Footer/>
            </div>
        </div>
        </>
    );
}

export default App;

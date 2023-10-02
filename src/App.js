import './App.css';
import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { Container, Row } from 'react-bootstrap';
import { ThemeProvider } from "./contexts/ThemeContext";
import { ListProvider } from "./contexts/ListContext";
import CardList from "./components/CardList";
import MainWrapper from "./components/MainWrapper";

function App() {
    return(
        <ThemeProvider>
            <ListProvider>
                <MainWrapper>                    
                <div className="container-fluid">
            <div className="row">
                <Header />
            </div>
            <div className="row">
                <CardList />
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
                </MainWrapper>
            </ListProvider>
        </ThemeProvider>
    );
}

export default App;

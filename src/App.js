import './App.css';
import Login from './Authentification/Login';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import  { useContext } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { Container, Row } from 'react-bootstrap';
//import { ThemeProvider } from "./contexts/ThemeContext";
//import { ListProvider } from "./contexts/ListContext";
//import CardList from "./components/CardList";
//import MainWrapper from "./components/MainWrapper";
//import { ThemeContext } from 'styled-components';
//import ConnectSite from './connectToDB/connectToDB';

const App = () => {
    // const { theme } = useContext(ThemeContext);
    
    
    
    
    
    return(
        <Router>

            <Routes>
                <Route path="/" element={< Login/>} />
                
            </Routes>
            <Footer />
        </Router>
            


        /*<ThemeProvider>
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
        </ThemeProvider>*/
    );
}



export default App;

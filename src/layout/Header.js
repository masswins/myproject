import React from "react";
import { useContext } from "react";
//import { ThemeContext} from ThemeContext
import {Container} from "react-bootstrap";

function Header(){

    // const textColor = theme === "dark" ? "text-light" : "text-dark";

    return(
        <header>
            <nav className={"navbar navbar bg"}>
            <div className="container-fluid">
                <div className={"navbar-brand text"}>Welcome to Buisness control App</div>
                <div>Header</div>
                <div>
                    <input
                    
                    />
                    <label>
                        Theme
                    </label>
                </div>
            </div>  
            </nav>
        </header>
    );
}
export default Header;
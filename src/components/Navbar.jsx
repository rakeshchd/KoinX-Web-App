import React, { Component } from "react";
import "./NavbarStyles.css"; // Import CSS module
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false };
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    render() {
        return (
            <nav className="navbarItems">
<<<<<<< HEAD
                <img src=".\src\assets\koinx-logo.png" alt="koinx-logo" className="koinxLogo"/>
=======
                <img src=".\assets\koinx-logo.png" alt="koinx-logo" className="koinxLogo"/>
>>>>>>> abe607ff20d63811764a635c2e21f494ab816c5f

                <div className="menuIcons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ? "navMenu active" : "navMenu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        );
    }
}

export default Navbar;

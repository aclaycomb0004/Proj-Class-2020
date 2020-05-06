import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function NavButton (props) {
    
    return (
        <div className="NavButtonStyle">
            <div>
                <Router>
                    <Link to={props.path}>
                        {props.buttonText}
                    </Link>
                </Router>
            </div>
        </div>
    )
}

export default NavButton;
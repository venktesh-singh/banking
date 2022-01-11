import React from 'react'; 
import { Link } from 'react-router-dom';

function Header(){

    return(
        <>
            <header class="navbar navbar-inverse navbar-fixed-top bs-docs-nav bankingtop" role="banner">
                <div class="container">
                    <div class="navbar-header">
                        <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <Link to="/" class="navbar-brand">Banking System</Link>
                    </div>
                    <nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation">
                        <ul class="nav navbar-nav navbar-right">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/add">Deposit And Withdraw Amount</Link>  
                            </li>
                            <li>
                                <Link to="/imageapi">Infinite Scroll</Link>  
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

        </>  
    );

}

export default Header;
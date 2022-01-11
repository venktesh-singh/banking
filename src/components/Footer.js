import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){

    return(
        <>
            <footer class="page-footer font-small indigo">
                <div class="footer-copyright text-center py-3">
                    © 2022 Copyright:
                    <Link to="/">  Deposit and Withdraw</Link>. All rights reserved.
                </div>
            </footer>
        </>



    );

}

export default Footer;  
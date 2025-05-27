import React from "react";
import "./Footer.css"

const currentYear = new Date().getFullYear();

function Footer(){
    return(
        <div className="footer">
            <p>Copyright © {currentYear}</p>
        </div>
    )
}

export default Footer;
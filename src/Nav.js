import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import "./Nav.css"


function Nav() {
    
    const [show, handleShow] = useState(false);
    const history = useHistory();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
                <div className="nav__contents">
                <img
                    onClick={() => history.push("/")}
                    className="nav__logo"
                    src="https://th.bing.com/th/id/R2ea85d7448475a744c1485c2eac3d3d1?rik=LOSTtarBPEnY%2fw&riu=http%3a%2f%2fwww.freepnglogos.com%2fuploads%2fnetflix-logo-0.png&ehk=PaZLUHaWmwAMEzdIDx7zGpBu053ZpXipTljxBidJnfU%3d&risl=&pid=ImgRaw"
                    alt=""
                />
                <img 
                    onClick={() => history.push("/profile")}
                    className="nav__avatar"
                    src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                    alt=""
                    />
                </div>
        </div>
    )
}

export default Nav

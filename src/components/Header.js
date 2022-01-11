import React from "react";
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'preto' : ''}>
            <div className="imagem--logo">
                <a href="">
                    <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="Logo Netflix"></img>
                </a>
            </div>
            <div className="imagem--usuario">
                <a href="">
                    <img src="https://i.pinimg.com/564x/b6/77/cd/b677cd1cde292f261166533d6fe75872.jpg" alt="usuario"></img>
                </a>
            </div>
        </header>
    );
}
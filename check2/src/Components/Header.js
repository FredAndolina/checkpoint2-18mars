import React from 'react';

const Header = (props) => {
    return (
        <div>
            <h1>Bienvenue dans le monde des jeux vidéos en {props.name}</h1>
        </div>
    );
};

export default Header;
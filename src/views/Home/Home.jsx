//Import libraries
import React from 'react';

//Import components
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';

//Import style
import './Home.scss';

//Create view
export default () => {
    //Put name
    const name = localStorage.getItem('name');

    return(
        <div className="home-container">
            <Menu />
            <div className="home-content">
                <Header />
                <h1>Bienvenido(a) {name}</h1>
                <h3>Dale click al menú para poder ver todas las opciones que tienes en esta App</h3>
            </div>
        </div>
    )
}
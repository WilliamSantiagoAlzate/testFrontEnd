//Import libraries
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//Import icons
import MenuIcon from '@material-ui/icons/Menu';

//Import style
import './Header.scss';

//Import login actions
import { showMenu } from '../../redux/actions/menu';

//Create component
export default () => {
    //Create dispatch
    const dispatch = useDispatch();

    //Create state
    const [menu, setMenu] = useState("none");
    
    //Show menu function
    const handleMenuClick = (event) => {
        event.preventDefault();
        if (menu === "none") {
            setMenu("block");
        } else {
            setMenu("none");
        }
        dispatch(showMenu(menu));
    }

    //Render Header
    return(
        <div className="header-container">
            <div className="header-content">
                <span onClick={handleMenuClick}>
                    <MenuIcon/>
                </span>
                <Link to="/home" className="title">
                    <h2>Prueba Front End API</h2>
                </Link>
            </div>
        </div>
    )
}
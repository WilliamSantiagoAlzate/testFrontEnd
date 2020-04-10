//Import libraries
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

//Import style
import './Menu.scss';

//Import Icons
import UserIcon from '@material-ui/icons/PermContactCalendar';
import FigureIcon from '@material-ui/icons/GridOn';
import GroupFiguresIcon from '@material-ui/icons/Apps';
import AddFigureIcon from '@material-ui/icons/PostAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

//Import Logo
import Logo from '../../images/logo.png'

//Import user selector
import { showMenuSelector } from '../../redux/selectors';

//Create Menu
export default () => {
    //Get selectors
    const showMenu = useSelector(state => showMenuSelector(state));

    //Remove local const
    const sigOut = () => {
        localStorage.removeItem('auth');
        localStorage.removeItem('name');
    }

    //Render Menu
    return(
        <div className="menu-container" style={{display: showMenu}}>
            <div className="image-container">
                <img src={Logo} alt="Logo"/>
            </div>
            <Link className="link" to="/user">
                <div className="item-container first-item">
                    <div className="item-content">
                        <UserIcon/>
                        <p>Ver Perfil</p>
                    </div>
                </div>
            </Link>
            <Link className="link" to="/figure">
                <div className="item-container" >
                    <div className="item-content">
                        <FigureIcon/>
                        <p>Ver Figuras</p>
                    </div>
                </div>
            </Link>
            <Link className="link" to="/groupFigure">
                <div className="item-container">
                    <div className="item-content">
                        <GroupFiguresIcon/>
                        <p>Ver grupos de Figuras</p>
                    </div>
                </div>
            </Link>
            <Link className="link" to="/createFigure">
                <div className="item-container">
                    <div className="item-content">
                        <AddFigureIcon/>
                        <p>Crear Figura</p>
                    </div>
                </div>
            </Link>
            <Link className="link" to="/" onClick={sigOut}>
                <div className="item-container">
                    <div className="item-content">
                        <ExitToAppIcon/>
                        <p>Cerrar sesión</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
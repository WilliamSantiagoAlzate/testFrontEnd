//Import libraries
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

//Import components
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';

//Import icons
import UserIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import CodeIcon from '@material-ui/icons/Code';
import RolIcon from '@material-ui/icons/EventSeat';
import EventIcon from '@material-ui/icons/Event';

//Import style
import './User.scss';

//Import getUser actions
import { getUser } from '../../redux/actions/getUser';

//Import getUser selector
import { getUserResultSelector } from '../../redux/selectors'

//Create view
export default () => {
    //Create dispatch
    const dispatch = useDispatch();
    //Create selector
    const getUserResult = useSelector(state => getUserResultSelector(state));
    //Get auth
    const user = localStorage.getItem('auth');

    //Check auth
    if (getUserResult) {
        if (getUserResult instanceof SyntaxError) {
            document.location.href = document.location.origin;
        } 
    }

    //Get user
    useEffect(() => {
        if (!getUserResult) {
            dispatch(getUser(user));
        }
    });

    //Render view
    return(
        <div className="user-container">
            <Menu />
            <div className="user-content">
                <Header/>
                <div className="card-container">
                    {!getUserResult ? 
                    <CircularProgress size={100} color="primary" /> :
                        <div className="card-content">
                            <div className="card-info">

                                <div className="card-info-container">

                                    <div className="card-item">
                                        <div className="card-item-container">
                                            <div className="card-item-icon">
                                                <UserIcon />
                                            </div>
                                            <div className="card-item-text">
                                                <h4>Nombre</h4>
                                                <h3>{getUserResult.data.names}</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-item">
                                        <div className="card-item-container">
                                            <div className="card-item-icon">
                                                <PeopleIcon />
                                            </div>
                                            <div className="card-item-text">
                                                <h4>Apellidos</h4>
                                                <h3>
                                                    {getUserResult.data.lastNames}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-item">
                                        <div className="card-item-container">
                                            <div className="card-item-icon">
                                                <CodeIcon />
                                            </div>
                                            <div className="card-item-text">
                                                <h4>Nombre del usuario</h4>
                                                <h3>
                                                    {getUserResult.data.username}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-item">
                                        <div className="card-item-container">
                                            <div className="card-item-icon">
                                                <RolIcon />
                                            </div>
                                            <div className="card-item-text">
                                                <h4>Rol</h4>
                                                <h3>
                                                    {getUserResult.data.rolDTO.name}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-item">
                                        <div className="card-item-container">
                                            <div className="card-item-icon">
                                                <EventIcon />
                                            </div>
                                            <div className="card-item-text">
                                                <h4>Fecha de creación</h4>
                                                <h3>
                                                    {
                                                        `${new Intl.DateTimeFormat('en', { day: '2-digit' }).format(new Date(getUserResult.data.createdAt))}
                                                        ${new Intl.DateTimeFormat('en', { month: 'short' }).format(new Date(getUserResult.data.createdAt))}.
                                                        ${new Intl.DateTimeFormat('en', { year: 'numeric' }).format(new Date(getUserResult.data.createdAt))}`
                                                    }
                                                </h3>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="card-info card-image">
                                <img src="https://image.flaticon.com/icons/svg/874/874919.svg" alt="Ball"/>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
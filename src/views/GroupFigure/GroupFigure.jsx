//Import libraries
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

//Import components
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';

//Import style
import './GroupFigure.scss';

//Import getGroup actions
import { getGroup } from '../../redux/actions/getGroup';

//Import getGroup selector
import { getGroupResultSelector } from '../../redux/selectors';

//Create view
export default () => {
    //Create dispatch
    const dispatch = useDispatch();
    //Get selectors
    const getGroupResult = useSelector(state => getGroupResultSelector(state));
    //Get auth
    const user = localStorage.getItem('auth');

    //Check auth
    if (getGroupResult) {
        if (getGroupResult instanceof SyntaxError) {
            document.location.href = document.location.origin;
        }
    }

    //Get group
    useEffect(() => {
        if (!getGroupResult) {
            dispatch(getGroup(user));
        }
    });

    //Render groups
    const renderGroup = () => {
        if(getGroupResult) {
            return getGroupResult.data.map((value, index) => 
            (
                <div className="group-item" key={index}>
                    <div className="group-item-data">
                        {value.name}
                    </div>
                    <div className="group-item-data">
                        {value.opportunity}
                    </div>
                    <div className="group-item-data">
                        {value.closeAt}
                    </div>
                </div>
            ));
        } else {
            return <CircularProgress size={100} color="primary" />;
        }
    }

    //Render view
    return(
        <div className="group-container">
            <Menu />
            <div className="group-content">
                <Header/>
                <div className="card-container">
                    <div className="card-content">
                       <div className="card-title">
                            <h3>Grupos de figuras</h3>   
                        </div>
                       <div className="group-description">
                            <p>Nombre del grupo</p>   
                            <p>Oportunidad</p>   
                            <p>Cerrar al lanzar</p>   
                        </div>
                        <div className="group-item-container">
                            {renderGroup()}
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}
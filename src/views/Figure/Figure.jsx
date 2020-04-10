//Import libraries
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

//Import components
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import FigureItem from '../../components/FigureItem/FigureItem';

//Import style
import './Figure.scss';

//Import getFigure actions
import { getFigure } from '../../redux/actions/getFigure';

//Import getFigure selector
import { getFigureResultSelector } from '../../redux/selectors';

//Create view
export default () => {
    //Create dispatch
    const dispatch = useDispatch();
    //Get selectors
    const getFigureResult = useSelector(state => getFigureResultSelector(state));
    //Get auth
    const user = localStorage.getItem('auth');

    //Check auth
    if (getFigureResult) {
        if (getFigureResult instanceof SyntaxError) {
            document.location.href = document.location.origin;
        }
    }

    //Get figure
    useEffect(() => {
        if (!getFigureResult) {
            dispatch(getFigure(user));
        }
    });

    //Render figures
    const renderFigures = () => {
        if(getFigureResult) {
            return getFigureResult.data.map((value, index) => 
            <FigureItem key={index} {...value} />);
        } else {
            return <CircularProgress size={100} color="primary" />;
        }
    };
    
    //Render view
    return(
        <div className="figure-container">
            <Menu />
            <div className="figure-content">
                <Header/>
                <div className="card-container">
                    <div className="card-content">
                       <div className="card-title">
                            <h3>Figuras</h3>   
                        </div>
                        <div className="figure-item-container">
                            {renderFigures()}
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}
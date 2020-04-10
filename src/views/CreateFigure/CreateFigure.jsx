//Import libraries
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

//Import components
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';

//Import style
import './CreateFigure.scss';

//Import createFigure actions
//import { createFigure } from '../../redux/actions/createFigure';
import { getGroup } from '../../redux/actions/getGroup';

//Import createFigure selector
//import { createFigureResultSelector } from '../../redux/selectors';
import { getGroupResultSelector } from '../../redux/selectors';

let positions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//Create view
export default () => {
    //Create dispatch
    const dispatch = useDispatch();
    //Get selectors
    //const createFigureResult = useSelector(state => createFigureResultSelector(state));
    const getGroupResult = useSelector(state => getGroupResultSelector(state));
    //Create state
    const [positionsData, setPositionsData] = useState(
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    );

    //Get auth
    const user = localStorage.getItem('auth');

    //Check auth
    if (getGroupResult) {
        if (getGroupResult instanceof SyntaxError) {
            document.location.href = document.location.origin;
        }
    }

    //Get groups
    useEffect(() => {
        if (!getGroupResult) {
            dispatch(getGroup(user));
        }
    });

    //Handle click figure item
    const handleFigureItemClick = (p) => {
        //if (positions[p] === 0) {
            positions[p] = 1;
        // } else {
        //     positions[p] = 0;
        // }
        console.log(positionsData[p]) 
        setPositionsData(positions)
        console.log(positions);
        console.log(positionsData);
    };

    //Render groups
    const renderGroups = () => {
        return getGroupResult.data.map((value, index) =>
        <option key={index}>{value.name}</option>);
    };
    
    //Render view
    return(
        <div className="create-container">
            <Menu />
            <div className="create-content">
                <Header/>
                <div className="card-container">
                    <div className="card-content">
                       <div className="card-title">
                            <h3>Crear figura</h3>   
                        </div>
                        {getGroupResult ?
                            <div className="figure-item-container">
                                <div className="inputs-container">
                                    <p>Elige un grupo</p>
                                    <select className="select">
                                        {renderGroups()}
                                    </select>
                                </div>
                                <div className="inputs-container">
                                    <p>Nombre de la figura</p>
                                    <input type="text" className="select"/>
                                </div>
                                <div className="figure-item-content">
                                <div className="figure-row">
                                    <div 
                                        className={
                                        positionsData[0] ? 
                                        "figure-color" :
                                        "figure"}
                                        onClick={()=>handleFigureItemClick(0)}
                                    >
                                    </div>
                                    <div 
                                        className={
                                        positionsData[1] ? 
                                        "figure-color" :
                                        "figure"}
                                        onClick={()=>handleFigureItemClick(1)}
                                    >
                                    </div>
                                    <div 
                                        className={
                                        positionsData[2] ? 
                                        "figure-color" :
                                        "figure"}
                                        onClick={()=>handleFigureItemClick(2)}
                                    >
                                    </div>
                                    <div 
                                        className={
                                        positionsData[3] ? 
                                        "figure-color" :
                                        "figure"}
                                        onClick={()=>handleFigureItemClick(3)}
                                    >
                                    </div>
                                    <div 
                                        className={
                                        positionsData[4] ? 
                                        "figure-color" :
                                        "figure"}
                                        onClick={()=>handleFigureItemClick(4)}
                                    >
                                    </div>
                                </div>
                                <div className="figure-row">
                                    <div 
                                        className={
                                        positionsData[5] ? 
                                        "figure-color" :
                                        "figure"}
                                        onClick={()=>handleFigureItemClick(5)}
                                    >
                                    </div>
                                    <div 
                                        className={
                                        positionsData[6] ? 
                                        "figure-color" :
                                        "figure"}
                                        onClick={()=>handleFigureItemClick(6)}
                                    >
                                    </div>
                                    <div 
                                        className={
                                        positionsData[7] ? 
                                        "figure-color" :
                                        "figure"}
                                        onClick={()=>handleFigureItemClick(7)}
                                    >
                                    </div>
                                    <div 
                                        className={
                                        positionsData[8] ? 
                                        "figure-color" :
                                        "figure"}
                                        onClick={()=>handleFigureItemClick(8)}
                                    >
                                    </div>
                                    <div 
                                        className={
                                        positionsData[9] ? 
                                        "figure-color" :
                                        "figure"}
                                        onClick={()=>handleFigureItemClick(9)}
                                    >
                                    </div>
                                </div>
                                <div className="figure-row">
                                    <div 
                                        className={
                                        positionsData[10] ? 
                                        "figure-color" :
                                        "figure"}
                                        onClick={()=>handleFigureItemClick(10)}
                                    >
                                    </div>
                                    <div 
                                        className={
                                        positionsData[11] ? 
                                        "figure-color" :
                                        "figure"}
                                        onClick={()=>handleFigureItemClick(11)}
                                    >
                                    </div>
                                    <div 
                                        className={
                                        positionsData[12] ? 
                                        "figure-color" :
                                        "figure"}
                                        onClick={()=>handleFigureItemClick(12)}
                                    >
                                    </div>
                                    <div 
                                        className={
                                        positionsData[13] ? 
                                        "figure-color" :
                                        "figure"}
                                        onClick={()=>handleFigureItemClick(13)}
                                    >
                                    </div>
                                    <div 
                                        className={
                                        positionsData[14] ? 
                                        "figure-color" :
                                        "figure"}
                                        onClick={()=>handleFigureItemClick(14)}
                                    >
                                    </div>
                                </div>
                                <div className="figure-row">
                                    <div 
                                        className={
                                        positionsData[15] ? 
                                        "figure-color" :
                                        "figure"}
                                        onClick={()=>handleFigureItemClick(15)}
                                    >
                                    </div>
                                    <div 
                                        className={
                                        positionsData[16] ? 
                                        "figure-color" :
                                        "figure"}
                                        onClick={()=>handleFigureItemClick(16)}
                                    >
                                    </div>
                                    <div 
                                        className={
                                        positionsData[17] ? 
                                        "figure-color" :
                                        "figure"}
                                        onClick={()=>handleFigureItemClick(17)}
                                    >
                                    </div>
                                    <div 
                                        className={
                                        positionsData[18] ? 
                                        "figure-color" :
                                        "figure"}
                                        onClick={()=>handleFigureItemClick(18)}
                                    >
                                    </div>
                                    <div 
                                        className={
                                        positionsData[19] ? 
                                        "figure-color" :
                                        "figure"}
                                        onClick={()=>handleFigureItemClick(19)}
                                    >
                                    </div>
                                </div>
                                <div className="figure-row">
                                    <div 
                                        className={
                                        positionsData[20] ? 
                                        "figure-color" :
                                        "figure"}
                                        onClick={()=>handleFigureItemClick(20)}
                                    >
                                    </div>
                                    <div 
                                        className={
                                        positionsData[21] ? 
                                        "figure-color" :
                                        "figure"}
                                        onClick={()=>handleFigureItemClick(21)}
                                    >
                                    </div>
                                    <div 
                                        className={
                                        positionsData[22] ? 
                                        "figure-color" :
                                        "figure"}
                                        onClick={()=>handleFigureItemClick(22)}
                                    >
                                    </div>
                                    <div 
                                        className={
                                        positionsData[23] ? 
                                        "figure-color" :
                                        "figure"}
                                        onClick={()=>handleFigureItemClick(23)}
                                    >
                                    </div>
                                    <div 
                                        className={
                                        positionsData[24] ? 
                                        "figure-color" :
                                        "figure"}
                                        onClick={()=>handleFigureItemClick(24)}
                                    >
                                    </div>
                                </div>
                                </div>
                                <div className="button">
                                    <button>Crear</button>
                                </div>
                            </div>
                            : <CircularProgress size={100} color="primary" />
                        } 
                    </div>
                </div>
            </div>
        </div>
    )
}
//Import libraries
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//Import style
import './FigureItem.scss';

//Create component
export default ({name, positionsWinner}) => {
    //Create dispatch
    //const dispatch = useDispatch();

    //Create state
    //const [menu, setMenu] = useState("none");

    //Render figure item
    return(
        <div className="figure-item">
            <div className="figure-item-title">
                <p>{name}</p>
                <a href="">X</a>
            </div>
            <div className="figure-item-content">
                <div className="figure-row">
                    <div className={
                        positionsWinner[0] ? 
                        "figure-color" :
                        "figure"}>
                    </div>
                    <div className={
                        positionsWinner[1] ? 
                        "figure-color" :
                        "figure"}>
                    </div>
                    <div className={
                        positionsWinner[2] ? 
                        "figure-color" :
                        "figure"}>
                    </div>
                    <div className={
                        positionsWinner[3] ? 
                        "figure-color" :
                        "figure"}>
                    </div>
                    <div className={
                        positionsWinner[4] ? 
                        "figure-color" :
                        "figure"}>
                    </div>
                </div>
                <div className="figure-row">
                    <div className={
                        positionsWinner[5] ? 
                        "figure-color" :
                        "figure"}>
                    </div>
                    <div className={
                        positionsWinner[6] ? 
                        "figure-color" :
                        "figure"}>
                    </div>
                    <div className={
                        positionsWinner[7] ? 
                        "figure-color" :
                        "figure"}>
                    </div>
                    <div className={
                        positionsWinner[8] ? 
                        "figure-color" :
                        "figure"}>
                    </div>
                    <div className={
                        positionsWinner[9] ? 
                        "figure-color" :
                        "figure"}>
                    </div>
                </div>
                <div className="figure-row">
                    <div className={
                        positionsWinner[10] ? 
                        "figure-color" :
                        "figure"}>
                    </div>
                    <div className={
                        positionsWinner[11] ? 
                        "figure-color" :
                        "figure"}>
                    </div>
                    <div className={
                        positionsWinner[12] ? 
                        "figure-color" :
                        "figure"}>
                    </div>
                    <div className={
                        positionsWinner[13] ? 
                        "figure-color" :
                        "figure"}>
                    </div>
                    <div className={
                        positionsWinner[14] ? 
                        "figure-color" :
                        "figure"}>
                    </div>
                </div>
                <div className="figure-row">
                    <div className={
                        positionsWinner[15] ? 
                        "figure-color" :
                        "figure"}>
                    </div>
                    <div className={
                        positionsWinner[16] ? 
                        "figure-color" :
                        "figure"}>
                    </div>
                    <div className={
                        positionsWinner[17] ? 
                        "figure-color" :
                        "figure"}>
                    </div>
                    <div className={
                        positionsWinner[18] ? 
                        "figure-color" :
                        "figure"}>
                    </div>
                    <div className={
                        positionsWinner[19] ? 
                        "figure-color" :
                        "figure"}>
                    </div>
                </div>
                <div className="figure-row">
                    <div className={
                        positionsWinner[20] ? 
                        "figure-color" :
                        "figure"}>
                    </div>
                    <div className={
                        positionsWinner[21] ? 
                        "figure-color" :
                        "figure"}>
                    </div>
                    <div className={
                        positionsWinner[22] ? 
                        "figure-color" :
                        "figure"}>
                    </div>
                    <div className={
                        positionsWinner[23] ? 
                        "figure-color" :
                        "figure"}>
                    </div>
                    <div className={
                        positionsWinner[24] ? 
                        "figure-color" :
                        "figure"}>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
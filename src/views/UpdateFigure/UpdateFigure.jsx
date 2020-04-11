//Import libraries
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

//Import components
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';

//Import style
import './UpdateFigure.scss';

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
    const [figureName, setFigureName] = useState("");
    const [groupName, setGroupName] = useState("Option 1");

    //Get auth
    const user = localStorage.getItem('auth');

    //Check auth
    if (getGroupResult) {
        if (getGroupResult instanceof SyntaxError) {
            document.location.href = document.location.origin;
        }
    }

    // //Get groups
    // useEffect(() => {
    //     if (!getGroupResult) {
    //         dispatch(getGroup(user));
    //     }
    // });

    //Handle select change
    const handleSelectChange = (event) => {
        setGroupName(event.target.value)
    }

    //Handle input change
    const handleInputChange = (event) => {
        setFigureName(event.target.value);
    }

    //Handle click figure item
    const handleFigureItemClick = (event) => {
        const p = event.target.id
        if (positions[p] === 0) {
            positions[p] = 1;
            event.target.classList.add('figure-color');
        } else {
            positions[p] = 0;
            event.target.classList.remove('figure-color');
        }
    };

    //Handle submit data
    const handleSubmitData = (event) => {
        event.preventDefault();
        //const group_id = getGroupResult.data.filter((group) => group.name === groupName);
        //if (figureName !== "") {
            //dispatch(createFigure(group_id, figureName, positions, user));
        //} esle {
        //    alert('Ingrese un nombre de figura');
        //}
    }

    //Render groups
    // const renderGroups = () => {
    //     setGroupName(getGroupResult.data[0].name);     
    //     return getGroupResult.data.map((value, index) =>
    //     <option key={index} value={value.name}>{value.name}</option>);
    // };
    
    //Render view
    return(
        <div className="update-container">
            <Menu />
            <div className="update-content">
                <Header/>
                <div className="card-container">
                    <div className="card-content">
                       <div className="card-title">
                            <h3>Editar figura</h3>   
                        </div>
                        {/* {getGroupResult ? */}
                            <div className="figure-item-container">
                                <div className="inputs-container">
                                    <p>Elige un grupo</p>
                                    <select className="select" value={groupName} onChange={handleSelectChange}>
                                        {/* {renderGroups()} */}
                                        <option value="Option 1">Option 1</option>
                                        <option value="Option 2">Option 2</option>
                                        <option value="Option 3">Option 3</option>
                                        <option value="Option 4">Option 4</option>
                                    </select>
                                </div>
                                <div className="inputs-container">
                                    <p>Nombre de la figura</p>
                                    <input 
                                        type="text" 
                                        className="select"
                                        onChange={handleInputChange}
                                        value={figureName}
                                    />
                                </div>
                                <div className="figure-item-content">
                                    <div className="figure-row">
                                        <div
                                            id={0} 
                                            className={"figure"}
                                            onClick={handleFigureItemClick}
                                        >
                                        </div>
                                        <div
                                            id={1} 
                                            className={"figure"}
                                            onClick={handleFigureItemClick}
                                        >
                                        </div>
                                        <div
                                            id={2} 
                                            className={"figure"}
                                            onClick={handleFigureItemClick}
                                        >
                                        </div>
                                        <div
                                            id={3} 
                                            className={"figure"}
                                            onClick={handleFigureItemClick}
                                        >
                                        </div>
                                        <div
                                            id={4} 
                                            className={"figure"}
                                            onClick={handleFigureItemClick}
                                        >
                                        </div>
                                    </div>
                                    <div className="figure-row">
                                        <div
                                            id={5} 
                                            className={"figure"}
                                            onClick={handleFigureItemClick}
                                        >
                                        </div>
                                        <div
                                            id={6} 
                                            className={"figure"}
                                            onClick={handleFigureItemClick}
                                        >
                                        </div>
                                        <div
                                            id={7} 
                                            className={"figure"}
                                            onClick={handleFigureItemClick}
                                        >
                                        </div>
                                        <div
                                            id={8} 
                                            className={"figure"}
                                            onClick={handleFigureItemClick}
                                        >
                                        </div>
                                        <div
                                            id={9} 
                                            className={"figure"}
                                            onClick={handleFigureItemClick}
                                        >
                                        </div>
                                    </div>
                                    <div className="figure-row">
                                        <div
                                            id={10} 
                                            className={"figure"}
                                            onClick={handleFigureItemClick}
                                        >
                                        </div>
                                        <div
                                            id={11} 
                                            className={"figure"}
                                            onClick={handleFigureItemClick}
                                        >
                                        </div>
                                        <div
                                            id={12} 
                                            className={"figure"}
                                            onClick={handleFigureItemClick}
                                        >
                                        </div>
                                        <div
                                            id={13} 
                                            className={"figure"}
                                            onClick={handleFigureItemClick}
                                        >
                                        </div>
                                        <div
                                            id={14} 
                                            className={"figure"}
                                            onClick={handleFigureItemClick}
                                        >
                                        </div>
                                    </div>
                                    <div className="figure-row">
                                        <div
                                            id={15} 
                                            className={"figure"}
                                            onClick={handleFigureItemClick}
                                        >
                                        </div>
                                        <div
                                            id={16} 
                                            className={"figure"}
                                            onClick={handleFigureItemClick}
                                        >
                                        </div>
                                        <div
                                            id={17} 
                                            className={"figure"}
                                            onClick={handleFigureItemClick}
                                        >
                                        </div>
                                        <div
                                            id={18} 
                                            className={"figure"}
                                            onClick={handleFigureItemClick}
                                        >
                                        </div>
                                        <div
                                            id={19} 
                                            className={"figure"}
                                            onClick={handleFigureItemClick}
                                        >
                                        </div>
                                    </div>
                                    <div className="figure-row">
                                        <div
                                            id={20} 
                                            className={"figure"}
                                            onClick={handleFigureItemClick}
                                        >
                                        </div>
                                        <div
                                            id={21} 
                                            className={"figure"}
                                            onClick={handleFigureItemClick}
                                        >
                                        </div>
                                        <div
                                            id={22} 
                                            className={"figure"}
                                            onClick={handleFigureItemClick}
                                        >
                                        </div>
                                        <div
                                            id={23} 
                                            className={"figure"}
                                            onClick={handleFigureItemClick}
                                        >
                                        </div>
                                        <div
                                            id={24} 
                                            className={"figure"}
                                            onClick={handleFigureItemClick}
                                        >
                                        </div>
                                    </div>
                                </div>
                                <div className="button">
                                    <button onClick={handleSubmitData}>Crear</button>
                                </div>
                            </div>
                            {/* : <CircularProgress size={100} color="primary" />
                        }  */}
                    </div>
                </div>
            </div>
        </div>
    )
}
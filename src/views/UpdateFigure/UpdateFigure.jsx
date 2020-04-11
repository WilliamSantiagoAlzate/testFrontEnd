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
import { updateFigure } from '../../redux/actions/updateFigure';
import { getGroup } from '../../redux/actions/getGroup';

//Import createFigure selector
import { updateFigureResultSelector } from '../../redux/selectors';
import { getGroupResultSelector } from '../../redux/selectors';
import { putFigureInfoSelector } from '../../redux/selectors';

let positionsRef = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//Create view
export default () => {
    //Create dispatch
    const dispatch = useDispatch();
    //Get selectors
    const  updateFigureResult = useSelector(state => updateFigureResultSelector(state));
    const getGroupResult = useSelector(state => getGroupResultSelector(state));
    const putFigure = useSelector(state => putFigureInfoSelector(state));
    
    if (!putFigure) {
        document.location.href = document.location.origin + '/figure';
    }

    //Configure positions data
    const positionsData = putFigure.positionsWinner.map((p) => {
        if (p) {
            return 1;
        } else {
            return 0;
        }
    });

    //Create state
    const [figureName, setFigureName] = useState(putFigure.name);
    const [groupName, setGroupName] = useState(putFigure.groupFigureId.name);
    const [positions, setPositions] = useState(positionsData);
    positionsRef = positions;

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
            positionsRef[p] = 1;
            setPositions(positionsRef);
            event.target.classList.add('figure-color');
        } else {
            positionsRef[p] = 0;
            setPositions(positionsRef);
            event.target.classList.add('figure');
            event.target.classList.remove('figure-color');
        }
    };

    //Handle submit data
    const handleSubmitData = (event) => {
        event.preventDefault();
        if (figureName !== "") {
            const group = getGroupResult.data.filter((group) => group.name === groupName);
            const group_id = group[0].id;
            const figureId = putFigure.id
            dispatch(updateFigure({ group_id, figureName, positions, user, figureId}));
        } else {
            alert('Ingrese un nombre de figura');
        }
    };

    //Check success submit
    if (updateFigureResult) {
        alert("Figura actualizada correctamente");
        document.location.href = document.location.origin + "/figure";
    };
    

    //Render groups
    const renderGroups = () => {   
        return getGroupResult.data.map((value, index) =>
        <option key={index} value={value.name}>{value.name}</option>);
    };
    
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
                        {getGroupResult ?
                            <div className="figure-item-container">
                                <div className="inputs-container">
                                    <p>Elige un grupo</p>
                                    <select className="select" value={groupName} onChange={handleSelectChange}>
                                        {renderGroups()}
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
                                            onClick={handleFigureItemClick}
                                            className={
                                                positions[0] ? 
                                                "figure-color" :
                                                "figure"
                                            }
                                        >
                                        </div>
                                        <div
                                            id={1} 
                                            onClick={handleFigureItemClick}
                                            className={
                                                positions[1] ? 
                                                "figure-color" :
                                                "figure"
                                            }
                                        >
                                        </div>
                                        <div
                                            id={2} 
                                            className={"figure"}
                                            onClick={handleFigureItemClick}
                                            className={
                                                positions[2] ? 
                                                "figure-color" :
                                                "figure"
                                            }
                                        >
                                        </div>
                                        <div
                                            id={3} 
                                            onClick={handleFigureItemClick}
                                            className={
                                                positions[3] ? 
                                                "figure-color" :
                                                "figure"
                                            }
                                        >
                                        </div>
                                        <div
                                            id={4} 
                                            onClick={handleFigureItemClick}
                                            className={
                                                positions[4] ? 
                                                "figure-color" :
                                                "figure"
                                            }
                                        >
                                        </div>
                                    </div>
                                    <div className="figure-row">
                                        <div
                                            id={5} 
                                            onClick={handleFigureItemClick}
                                            className={
                                                positions[5] ? 
                                                "figure-color" :
                                                "figure"
                                            }
                                        >
                                        </div>
                                        <div
                                            id={6} 
                                            onClick={handleFigureItemClick}
                                            className={
                                                positions[6] ? 
                                                "figure-color" :
                                                "figure"
                                            }
                                        >
                                        </div>
                                        <div
                                            id={7} 
                                            onClick={handleFigureItemClick}
                                            className={
                                                positions[7] ? 
                                                "figure-color" :
                                                "figure"
                                            }
                                        >
                                        </div>
                                        <div
                                            id={8} 
                                            onClick={handleFigureItemClick}
                                            className={
                                                positions[8] ? 
                                                "figure-color" :
                                                "figure"
                                            }
                                        >
                                        </div>
                                        <div
                                            id={9} 
                                            onClick={handleFigureItemClick}
                                            className={
                                                positions[9] ? 
                                                "figure-color" :
                                                "figure"
                                            }
                                        >
                                        </div>
                                    </div>
                                    <div className="figure-row">
                                        <div
                                            id={10} 
                                            onClick={handleFigureItemClick}
                                            className={
                                                positions[10] ? 
                                                "figure-color" :
                                                "figure"
                                            }
                                        >
                                        </div>
                                        <div
                                            id={11} 
                                            onClick={handleFigureItemClick}
                                            className={
                                                positions[11] ? 
                                                "figure-color" :
                                                "figure"
                                            }
                                        >
                                        </div>
                                        <div
                                            id={12} 
                                            onClick={handleFigureItemClick}
                                            className={
                                                positions[12] ? 
                                                "figure-color" :
                                                "figure"
                                            }
                                        >
                                        </div>
                                        <div
                                            id={13} 
                                            onClick={handleFigureItemClick}
                                            className={
                                                positions[13] ? 
                                                "figure-color" :
                                                "figure"
                                            }
                                        >
                                        </div>
                                        <div
                                            id={14} 
                                            onClick={handleFigureItemClick}
                                            className={
                                                positions[14] ? 
                                                "figure-color" :
                                                "figure"
                                            }
                                        >
                                        </div>
                                    </div>
                                    <div className="figure-row">
                                        <div
                                            id={15} 
                                            onClick={handleFigureItemClick}
                                            className={
                                                positions[15] ? 
                                                "figure-color" :
                                                "figure"
                                            }
                                        >
                                        </div>
                                        <div
                                            id={16} 
                                            onClick={handleFigureItemClick}
                                            className={
                                                positions[16] ? 
                                                "figure-color" :
                                                "figure"
                                            }
                                        >
                                        </div>
                                        <div
                                            id={17} 
                                            onClick={handleFigureItemClick}
                                            className={
                                                positions[17] ? 
                                                "figure-color" :
                                                "figure"
                                            }
                                        >
                                        </div>
                                        <div
                                            id={18} 
                                            onClick={handleFigureItemClick}
                                            className={
                                                positions[18] ? 
                                                "figure-color" :
                                                "figure"
                                            }
                                        >
                                        </div>
                                        <div
                                            id={19} 
                                            onClick={handleFigureItemClick}
                                            className={
                                                positions[19] ? 
                                                "figure-color" :
                                                "figure"
                                            }
                                        >
                                        </div>
                                    </div>
                                    <div className="figure-row">
                                        <div
                                            id={20} 
                                            onClick={handleFigureItemClick}
                                            className={
                                                positions[20] ? 
                                                "figure-color" :
                                                "figure"
                                            }
                                        >
                                        </div>
                                        <div
                                            id={21} 
                                            onClick={handleFigureItemClick}
                                            className={
                                                positions[21] ? 
                                                "figure-color" :
                                                "figure"
                                            }
                                        >
                                        </div>
                                        <div
                                            id={22} 
                                            onClick={handleFigureItemClick}
                                            className={
                                                positions[22] ? 
                                                "figure-color" :
                                                "figure"
                                            }
                                        >
                                        </div>
                                        <div
                                            id={23} 
                                            onClick={handleFigureItemClick}
                                            className={
                                                positions[23] ? 
                                                "figure-color" :
                                                "figure"
                                            }
                                        >
                                        </div>
                                        <div
                                            id={24} 
                                            onClick={handleFigureItemClick}
                                            className={
                                                positions[24] ? 
                                                "figure-color" :
                                                "figure"
                                            }
                                        >
                                        </div>
                                    </div>
                                </div>
                                <div className="button">
                                    <button onClick={handleSubmitData}>Editar</button>
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
//Import libraries
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Import style
import './LogIn.scss';

//Import Logo
import Logo from '../../images/logo.png'

//Import login actions
import { logIn } from '../../redux/actions/logIn';

//Import user selector
import { logInResultSelector } from '../../redux/selectors';

//Create view
export default () => {
    //Create dispatch
    const dispatch = useDispatch();
    //Create state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogIn, setIsLogIn] = useState(false);
    //Get selectors
    const userResult = useSelector(state => logInResultSelector(state));
    
    //Check LogIn
    if (userResult) {
        if (userResult instanceof SyntaxError) {
            alert('El correo o la contraseña ingresados son incorrectos');
            document.location.href = document.location.origin;
        } else {
            localStorage.setItem('name', userResult.name);
            localStorage.setItem('auth', userResult.Authorization);
            //document.location.href = document.location.origin + "/home";
        }
    }

    //Function of handle of the input change
    const handleInputChange = (event) => {
        if(event.target.name === "email") {
            setEmail(event.target.value);
        } else if (event.target.name === "password") {
            setPassword(event.target.value);
        }
    }

    //Function of the submit action
    const handleOnSubmit = (event) => {
        event.preventDefault();
        if (email && password) {
            setIsLogIn(true);
            dispatch(logIn({ email, password }));
        }
    }

    //Render view
    return(
        <div className="bg-sigin">
            <div className="login-container">
                <form onSubmit={handleOnSubmit}>

                    <div className="img-container">
                        <img src={Logo} alt="Logo"/>
                    </div>

                    <div className="form-item">
                        <input
                            name="email" 
                            placeholder="Correo"
                            type="text"
                            value={email}
                            onChange={handleInputChange} 
                        />
                    </div>

                    <div className="form-item">
                        <input
                            name="password" 
                            placeholder="Contraseña" 
                            type="password"
                            value={password}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-item">
                        <button type='submit'>
                            {isLogIn ? "CARGANDO..." : "INICIAR SESIÓN"}
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}
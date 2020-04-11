//Import test libraries
import React from 'react';
import { render } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

//Import App
import App from './App';

//Import views
import CreateFigure from './views/CreateFigure/CreateFigure';
import Figure from './views/Figure/Figure';
import GroupFigure from './views/GroupFigure/GroupFigure';
import Home from './views/Home/Home';
import LogIn from './views/LogIn/LogIn';
import UpdateFigure from './views/UpdateFigure/UpdateFigure';
import User from './views/User/User';


const mockStore = configureStore();

//Do tests
it('Should render all views', () => {
    const store = mockStore({});
    const wrapper = render(
        <Provider store={store}>
            <App/>
        </Provider>
    );

    const createFigure = wrapper.find(CreateFigure);
    const figure = wrapper.find(Figure);
    const groupFigure = wrapper.find(GroupFigure);
    const home = wrapper.find(Home);
    const logIn = wrapper.find(LogIn);
    const updateFigure = wrapper.find(UpdateFigure);
    const user = wrapper.find(User);

    expect(createFigure).toBeTruthy();
    expect(figure).toBeTruthy();
    expect(groupFigure).toBeTruthy();
    expect(home).toBeTruthy();
    expect(logIn).toBeTruthy();
    expect(updateFigure).toBeTruthy();
    expect(user).toBeTruthy();
});

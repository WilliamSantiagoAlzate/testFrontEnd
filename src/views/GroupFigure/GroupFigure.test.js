//Import test libraries
import React from 'react';
import { render } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';

//Import view
import GroupFigure from './GroupFigure';

//Import component
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';

const mockStore = configureStore();

//Do tests
it('Should render header and menu components', () => {
    const store = mockStore({});
    const wrapper = render(
        <Provider store={store}>
            <BrowserRouter>
                <Route>
                    <GroupFigure/>
                </Route>
            </BrowserRouter>
        </Provider>
    );

    const header = wrapper.find(Header);
    const menu = wrapper.find(Menu);

    expect(header).toBeTruthy();
    expect(menu).toBeTruthy();
});
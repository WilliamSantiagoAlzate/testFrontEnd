//Import test libraries
import React from 'react';
import { render } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';

//Import view
import Figure from './Figure';

//Import component
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import FigureItem from '../../components/FigureItem/FigureItem';

const mockStore = configureStore();

//Do tests
it('Should render header, menu and figure item components', () => {
    const store = mockStore({});
    const wrapper = render(
        <Provider store={store}>
            <BrowserRouter>
                <Route>
                    <Figure/>
                </Route>
            </BrowserRouter>
        </Provider>
    );

    const header = wrapper.find(Header);
    const menu = wrapper.find(Menu);
    const figureItem = wrapper.find(FigureItem);

    expect(header).toBeTruthy();
    expect(menu).toBeTruthy();
    expect(figureItem).toBeTruthy();
});
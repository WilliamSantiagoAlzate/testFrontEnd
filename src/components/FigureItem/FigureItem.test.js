//Import test libraries
import React from 'react';
import { render } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';

//Import component
import FigureItem from './FigureItem';

const mockStore = configureStore();

//Do tests
it('Should render label of description item with a text', () => {
    const positions = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    const store = mockStore({});
    const wrapper = render(
        <Provider store={store}>
            <BrowserRouter>
                <Route>
                    <FigureItem name={"card"} positionsWinner={positions} />
                </Route>
            </BrowserRouter>
        </Provider>
    );

    const text = wrapper.find('.figure-item-title p').text();

    expect(text).toBeTruthy();
});
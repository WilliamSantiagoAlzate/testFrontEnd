//Import test libraries
import React from 'react';
import { render } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux'
import { Route, BrowserRouter } from 'react-router-dom';

//Import component
import Menu from './Menu';

const mockStore = configureStore();

//Do tests
it('Should render a image', () => {
    const store = mockStore({})
    const wrapper = render(
        <Provider store={store}>
            <BrowserRouter>
                <Route>
                    <Menu/>
                </Route>
            </BrowserRouter>
        </Provider>
    );
    
    const img = wrapper.find('.image-container');

    expect(img).toBeTruthy();
});
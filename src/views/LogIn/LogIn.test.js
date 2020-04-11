//Import test libraries
import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';

//Import view
import LogIn from './LogIn';

const mockStore = configureStore();

//Do tests
it('Should render a image', () => {
    const store = mockStore({});
    const wrapper = shallow(
        <Provider store={store}>
            <BrowserRouter>
                <Route>
                    <LogIn/>
                </Route>
            </BrowserRouter>
        </Provider>
    );

    const img = wrapper.find('.img-container');

    expect(img).toBeTruthy();
});
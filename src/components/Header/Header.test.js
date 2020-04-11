//Import test libraries
import React from 'react';
import { render, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';

//Import component
import Header from './Header';

const mockStore = configureStore();

//Do tests
it('Should render a title', () => {
    const store = mockStore({});
    const wrapper = render(
        <Provider store={store}>
            <BrowserRouter>
                <Route>
                    <Header/>
                </Route>
            </BrowserRouter>
        </Provider>
    );
    
    const text = wrapper.find('.title h2').text();

    expect(text).toBeTruthy();
});

it('Should show menu', () => {
    const store = mockStore({});
    const wrapper = mount(
        <Provider store={store}>
            <BrowserRouter>
                <Route>
                    <Header/>
                </Route>
            </BrowserRouter>
        </Provider>
    );

    wrapper.find('span').simulate('click');

    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe("SHOW_MENU");
    expect(actions[0].payload).not.toBeNull();
});
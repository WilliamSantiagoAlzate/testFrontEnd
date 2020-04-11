//Import test libraries
import configureStore from 'redux-mock-store';

//Import actions
import { createFigure } from './createFigure';
import { getFigure } from './getFigure';
import { getGroup } from './getGroup';
import { getUser } from './getUser';
import { logIn } from './logIn';
import { showMenu } from './menu';
import { updateFigure } from './updateFigure';

const mockStore = configureStore();

//Do test the create figure action 
it('Should run the create figure action', () => {
    const store = mockStore({ });

    const figure = { id: "1", name: "Horizontal" };
    store.dispatch(createFigure(figure));

    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe("START_CREATE_FIGURE");
    expect(actions[0].payload).not.toBeNull();
});

//Do test the get figure action 
it('Should run the get figure action', () => {
    const store = mockStore({ });

    const figure = { id: "1" };
    store.dispatch(getFigure(figure));

    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe("START_GET_FIGURE");
    expect(actions[0].payload).not.toBeNull();
});

//Do test the get group of figures action
it('Should run the get group of figures action', () => {
    const store = mockStore({ });

    const group = { id: "1" };
    store.dispatch(getGroup(group));

    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe("START_GET_GROUP");
    expect(actions[0].payload).not.toBeNull();
});

//Do test the get user action 
it('Should run the get user action', () => {
    const store = mockStore({ });

    const user = { email: "santiago@email.com" };
    store.dispatch(getUser(user));

    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe("START_GET_USER");
    expect(actions[0].payload).not.toBeNull();
});

//Do test the logIn action 
it('Should run the logIn action', () => {
    const store = mockStore({ });

    const user = { email: "santiago@email.com", password: "1234" };
    store.dispatch(logIn(user));

    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe("START_LOG_IN");
    expect(actions[0].payload).not.toBeNull();
});

//Do test the show menu action 
it('Should run the show menu action', () => {
    const store = mockStore({ });

    const menuData = { data: true };
    store.dispatch(showMenu(menuData));

    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe("SHOW_MENU");
    expect(actions[0].payload).not.toBeNull();
});

//Do test the update figure action 
it('Should run the update figure action', () => {
    const store = mockStore({ });

    const figure = { id: "1", name: "Horizontal" };
    store.dispatch(updateFigure(figure));

    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe("START_UPDATE_FIGURE");
    expect(actions[0].payload).not.toBeNull();
});
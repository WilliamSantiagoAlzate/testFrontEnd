//Import reducers
import logIn from './logIn';
import menu from './menu';
import getUser from './getUser';
import getFigure from './getFigure';
import createFigure from './createFigure';
import updateFigure from './updateFigure';
import getGroup from './getGroup';

//Do test of login
describe('Login', () => {
    it('Should returns the initial state', () => {
        expect(logIn(undefined, {})).toEqual({});
    });

    it('Start login', () => {
        const user = {
            email: "santiago@correo.com",
            password: "1234"
        };

        expect(
            logIn({}, { type: "START_LOG_IN", payload: user})
        ).toEqual({data: user});
    });

    it('Success login', () => {
        const result = {
            token: "abcd1234"
        };

        expect(
            logIn({}, { type: "SUCCESS_LOG_IN", result: result})
        ).toEqual({result: result});
    });

    it('Error login', () => {
        const error = {
            data: "error",
        };

        expect(
            logIn({}, { type: "ERROR_LOG_IN", error: error})
        ).toEqual({result: error});
    });
});

//Do test of show menu
describe('Menu', () => {
    it('Should returns the initial state', () => {
        expect(menu(undefined, {})).toEqual({});
    });

    it('Show menu', () => {
        const isMenu = true;

        expect(
            menu({}, { type: "SHOW_MENU", payload: isMenu})
        ).toEqual({dataMenu: isMenu});
    });
});

//Do test of getUser
describe('Get user', () => {
    it('Should returns the initial state', () => {
        expect(getUser(undefined, {})).toEqual({});
    });

    it('Start get user', () => {
        const user = {
            id: "1"
        };

        expect(
            getUser({}, { type: "START_GET_USER", payload: user})
        ).toEqual({data: user});
    });

    it('Success get user', () => {
        const result = {
            name: "Santiago"
        };

        expect(
            getUser({}, { type: "SUCCESS_GET_USER", result: result})
        ).toEqual({result: result});
    });

    it('Error get user', () => {
        const error = {
            data: "error",
        };

        expect(
            getUser({}, { type: "ERROR_GET_USER", error: error})
        ).toEqual({result: error});
    });
});

//Do test of getFigure
describe('Get figure', () => {
    it('Should returns the initial state', () => {
        expect(getFigure(undefined, {})).toEqual({});
    });

    it('Start get figure', () => {
        const figure = {
            id: "1"
        };

        expect(
            getFigure({}, { type: "START_GET_FIGURE", payload: figure})
        ).toEqual({data: figure});
    });

    it('Success get figure', () => {
        const result = {
            name: "Horizontal"
        };

        expect(
            getFigure({}, { type: "SUCCESS_GET_FIGURE", result: result})
        ).toEqual({result: result});
    });

    it('Error get figure', () => {
        const error = {
            data: "error",
        };

        expect(
            getFigure({}, { type: "ERROR_GET_FIGURE", error: error})
        ).toEqual({result: error});
    });
});

//Do test of createFigure
describe('Create figure', () => {
    it('Should returns the initial state', () => {
        expect(createFigure(undefined, {})).toEqual({});
    });

    it('Start create figure', () => {
        const figure = {
            id: "1",
            name: "Horizontal"
        };

        expect(
            createFigure({}, { type: "START_CREATE_FIGURE", payload: figure})
        ).toEqual({data: figure});
    });

    it('Success create figure', () => {
        const result = {
            data: "success"
        };

        expect(
            createFigure({}, { type: "SUCCESS_CREATE_FIGURE", result: result})
        ).toEqual({result: result});
    });

    it('Error create figure', () => {
        const error = {
            data: "error",
        };

        expect(
            createFigure({}, { type: "ERROR_CREATE_FIGURE", error: error})
        ).toEqual({result: error});
    });
});

//Do test of updateFigure
describe('Update figure', () => {
    it('Should returns the initial state', () => {
        expect(updateFigure(undefined, {})).toEqual({});
    });

    it('Start update figure', () => {
        const figure = {
            id: "1",
            name: "Horizontal"
        };

        expect(
            updateFigure({}, { type: "START_UPDATE_FIGURE", payload: figure})
        ).toEqual({data: figure});
    });

    it('Success update figure', () => {
        const result = {
            data: "success"
        };

        expect(
            updateFigure({}, { type: "SUCCESS_UPDATE_FIGURE", result: result})
        ).toEqual({result: result});
    });

    it('Error update figure', () => {
        const error = {
            data: "error",
        };

        expect(
            updateFigure({}, { type: "ERROR_UPDATE_FIGURE", error: error})
        ).toEqual({result: error});
    });
});

//Do test of getGroup
describe('Get group of figures', () => {
    it('Should returns the initial state', () => {
        expect(getGroup(undefined, {})).toEqual({});
    });

    it('Start get group of figures', () => {
        const group = {
            id: "1"
        };

        expect(
            getGroup({}, { type: "START_GET_GROUP", payload: group})
        ).toEqual({data: group});
    });

    it('Success get group of figures', () => {
        const result = {
            name: "Lineal"
        };

        expect(
            getGroup({}, { type: "SUCCESS_GET_GROUP", result: result})
        ).toEqual({result: result});
    });

    it('Error get group of figures', () => {
        const error = {
            data: "error",
        };

        expect(
            getGroup({}, { type: "ERROR_GET_GROUP", error: error})
        ).toEqual({result: error});
    });
});
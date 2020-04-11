//Import test libraries
import React from 'react';
import { shallow } from 'enzyme';

//Import component
import FigureItem from './FigureItem';

//Do tests
it('Should render label of description item with a text', () => {
    const positions = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    const wrapper = shallow(<FigureItem name={"card"} positionsWinner={positions} />);
    const text = wrapper.find('.figure-item-title p').text();

    expect(text).toBeTruthy();
});
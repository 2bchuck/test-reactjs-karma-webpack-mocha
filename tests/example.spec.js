import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../src/comps/App';

const wrapper = shallow(<App />);

let expect = chai.expect,
    assert = chai.assert,
    should = chai.should();

let foo = 1;

describe('Setup karma tests with chai', () => {
    it('should expose the Chai expect method', () => {
        expect(1).to.be.a('number');
    });

    it('expose the Chai assert method', () => {
        assert.typeOf(1, 'number');
    });

    it('should expose the Chai should property', () => {
        foo.should.be.a('number');
    });
});

describe('App', () => {
    it('renders without problems', () => {
        expect(wrapper).to.exist;
    });

    it('should say like this', () => {
        expect(wrapper.childAt(0).text()).to.equal('Hello! React in ES6!');
    });
});

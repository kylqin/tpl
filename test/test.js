'use strict';
const {expect} = require('chai');
const {add} = require('../dist/index');

describe('tpl add function test', () => {
  it('should return 3', () => {
    const result = add(1, 2);
    expect(result).to.equal(3);
  })
})
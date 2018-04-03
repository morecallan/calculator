"use strict";

const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');
const party = require('./partyMode');

const calc = {
	add, subtract, multiply, divide, party
};

module.exports = calc;
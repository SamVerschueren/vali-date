const test = require('ava');
const fn = require('./index.js');

test('validate', t => {
	t.false(fn('foo'));
	t.true(fn('2015-12-15T12:00:00Z'));
	t.true(fn('2015-12-15T12:00:00+01:00'));
	t.true(fn(new Date().toISOString()));
});

'use strict';
module.exports = function (string) {
	return !isNaN(Date.parse(string));
};

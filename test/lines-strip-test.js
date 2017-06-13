var tape = require('tape');
var d3   = require('../');

tape('line strip test', function(test){
	var _3d = d3._3d().primitiveType('LINES_STRIP');
	var data = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
	];
	test.deepEqual(_3d.draw(_3d(data)), 1);
	test.end();
});

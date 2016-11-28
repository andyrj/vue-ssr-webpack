// make dom available to node tests
require('testdom')(`
<html>
<body>
	<div id='app'></div>
</body>
</html>
`)


// make chai available to tests
let chai = require('chai')
chai.config.includeStack = true
global.expect = chai.expect
global.AssertionError = chai.AssertionError
global.Assertion = chai.Assertion
global.assert = chai.assert
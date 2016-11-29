var requireTest = require.context('./units', true, /\.js$/)
requireTest.keys().forEach(requireTest)

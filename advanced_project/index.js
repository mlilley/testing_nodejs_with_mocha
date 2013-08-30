module.exports = process.env.MYPROJ_COVERAGE
  ? require('./lib-cov/myproject')
  : require('./lib/myproject');

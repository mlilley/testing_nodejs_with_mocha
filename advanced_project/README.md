# Testing NodeJS with Mocha, Should, Sinon, and JSCoverage

###### By Michael Lilley (michael.lilley@gmail.com) for Melbourne NodeJS Meetup Group 
###### Wednesday, 28 August 2013

## Advanced Project

The advanced project provides boilerplate for supporting test coverage reporting.

1. Install JSCoverage binary
```
$ git clone https://github.com/visionmedia/node-jscoverage.git
$ cd node-jscoverage
$ ./configure && make
$ sudo make install
```

2. Install dependencies (mocha, should, and sinon)
```
$ cd /path/to/advanced_project/
$ npm install
```

3. Generate coverage report
```
$ make test-cov
```
(report output to coverage.html)

## License
MIT
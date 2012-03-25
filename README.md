### Dependencies

[request] (https://github.com/mikeal/request)

#### Optional for testing

[mocha] (https://github.com/visionmedia/mocha) 
[should] (https://github.com/visionmedia/should.js)

### Usage

```
var tmdb = require('./lib/tmdb.js').init(key);

tmdb.misc.latest(function(err,res) {
	console.log(res.title);
});

tmdb.movie.info(5, functioN(err,res) {
	console.log(res.title);	
});

tmdb.person.info(109, function(err,res) {
	console.log(res.name);	
});

```
etc.

All except auth methods for contributing to TMDb as of now are implemented.

Testing is done by mocha.

See [http://help.themoviedb.org/kb/api/about-3] (TMDb v3 page about the api)

### Other

New to node.js and javascript in general, gladly accepting of any criticism.

For v2.1 api, go to [kkarikos repo] (https://raw.github.com/kkarikos/tmdb).

kkariko: I used part of your request code here, contact me if you have questions, I can't find a way to contact you.
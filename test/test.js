var fs = require('fs');
var should = require('should');
var key = new String(fs.readFileSync('APIKEY')).replace(/(\r\n|\n|\r)/gm,"");
var tmdb = require('../tmdb').init(key);

describe("General methods", function() {
	it("can get configuration info", function(done) {
		tmdb.configuration(function(err,res) {
			should.exist(res);
			done();
		});
	});
});

/*
describe("Person methods", function() {
	it("fetches info on a person", function(done){
		tmdb.person.info(109, function(err,res) {
			res.name.should.equal("Elijah Wood");
			done();
		});			
	});

	it("fetches a person's credits", function(done) {
		tmdb.person.credits(109, function(err,res) {
			res.id.should.equal(109);
			done();
		});
	});

	it("fetches a person's images", function(done) {
		tmdb.person.images(109, function(err,res) {
			res.id.should.equal(109);
			done();
		})
	});
});

describe("Search methods", function() {
	it("searches for movies", function(done) {
		tmdb.search.movie('transformers', function(err,res) {
			res.page.should.equal(1);
			done();
		});
	});
	it("can hop to another page of a search", function(done) {
		tmdb.search.movie('transformers', 4, function(err,res) {
			res.page.should.equal(4);
			done();
		});
	});
	it("searches for persons", function(done) {
		tmdb.search.person('mikael', function(err,res) {
			res.page.should.equal(1);
			done();
		});
	});
});


describe("Collection methods", function() {
	it("can get info on collections"; function(done) {
		tmdb.collections.info(10, function(err,res) {
			res.id.should.be(10);	
			done();
		});
	});
});

describe("Movie methods", function() {
	it("can get info on a movie", function(done) {
		tmdb.movie.info(11, function(err,res) {
			res.title.should.equal('Star Wars: Episode IV - A New Hope');
			done();
		});
	});

	it("can get alternative titles for a movie", function(done) {
		tmdb.movie.alternativeTitles(11, function(err,res) {
			res.id.should.equal(11);
		});
	});
	
	it("can detect invalid ids", function(done) {
		tmdb.movie.info(1000000001, function(err,res) {
			err.status_code.should.equal(6);
			done();
		});
	});
	it("can get the cast for a movie", function(done) {
		tmdb.movie.casts(11, function(err,res) {
			res.id.should.equal(11);
			done();
		});
	});
	it("can get images for a movie", function(done) {
		tmdb.movie.images(11, function(err,res) {
			res.id.should.equal(11);
			done();
		});
	});
	it("can get keywords for a movie", function(done) {
		tmdb.movie.keywords(11, function(err,res) {
			res.id.should.equal(11);
			done();
		});
	});
	it("can get release dates for a movie", function(done) {
		tmdb.movie.releases(11, function(err,res) {
			res.id.should.equal(11);
			done();
		});
	});
	it("can get trailers for a movie", function(done) {
		tmdb.movie.trailers(11, function(err,res) {
			res.id.should.equal(11);
			done();
		});
	});
	it("can get translations for a movie", function(done) {
		tmdb.movie.translations(11, function(err,res) {
			res.id.should.equal(11);
			done();
		});
	});
});
*/

describe("Misc methods", function() {
	it("can get the latest added movie", function(done) {
		tmdb.misc.latest(function(err,res) {
			should.not.exist(err);
			done();
		});
	});
	it("can get the movies playing in theaters", function(done) {
		tmdb.misc.nowPlaying(function(err,res) {
			res.total_results.should.equal(100);
			done();
		});
	});
	it("can get popular movies", function(done) {
		tmdb.misc.popular(function(err,res) {
			res.page.should.equal(1);	
			done();
		});
	});
	it("can get the top rated movies", function(done) {
		tmdb.misc.topRated(function(err,res) {
			res.page.should.equal(1);	
			done();
		});
	});
});
var $ = window.jQuery

$.get('http://gateway.marvel.com:80/v1/public/series?title=avengers&apikey=5ec5e91a11951939cfd6029c122245eb')
.done(function (results) {
	var characters=results.data.results[0].characters.items
	debugger
})
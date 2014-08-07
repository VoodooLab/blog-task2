var app = angular.module('BlogDirectives', []);

app.directive('postBody', function() {
	return {
		scope: true,
		restrict: 'E',
		templateUrl: 'views/post-body.html'
	};
});

app.directive('popup', function() {
	return {
		scope: true,
		restrict: 'E',
		templateUrl: 'views/new-post.html'
	};
});

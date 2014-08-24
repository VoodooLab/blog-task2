var app = angular.module('BlogDirectives', []);

app.directive('postBody', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/post-body.html'
	};
});

app.directive('popup', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/new-post.html'
	};
});

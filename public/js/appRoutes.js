angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {    // all posts sort by date 
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})
		// .when('/javascript', {
		// 	templateUrl: 'views/home.html',
		// 	controller: 'MainController'
		// })
		// .when('/style', {
		// 	templateUrl: 'views/home.html',
		// 	controller: 'MainController'
		// })
		// .when('/html', {
		// 	templateUrl: 'views/home.html',
		// 	controller: 'MainController'
		// })
		// .when('/design', {
		// 	templateUrl: 'views/home.html',
		// 	controller: 'MainController'
		// })
		// .when('/new-post', {
		// 	templateUrl: 'views/new-post.html',
		// 	controller: 'NewPostController'
		// })
		.otherwise({
        	redirectTo: '/'
      	});

	$locationProvider.html5Mode(true);
}]);
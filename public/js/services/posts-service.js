angular.module('PostsService', []).factory('Posts', ['$http', function($http){
	return {
		get: function () {
			return $http.get('posts/posts.json');
		},
		create: function (postData) {
			return $http.post('posts/posts.json', postData);
		},
		delete: function (id) {
			return $http.delete('posts/posts.json', id);
		}
	};
}]);

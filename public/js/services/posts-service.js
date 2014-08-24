angular.module('PostsService', []).factory('Posts', ['$http', function($http){
	return {
		get: function () {
			return $http.get('http://54.72.3.96:3000/posts');
		},
		create: function (postData) {
			return $http.post('http://54.72.3.96:3000/posts', postData);
		},
		delete: function (postId) {
			return $http.delete('http://54.72.3.96:3000/posts/' + postId);
		}
	};
}]);


// angular.module('PostsService', ['ngResource']).factory('Post', ['$recource', function($recource){
// 	var Post = $resource('http://54.72.3.96:3000/posts:_id', {}, {
// 		update: {
// 			method: 'PUT'
// 		}
// 	});
// 	return Post;
// }])
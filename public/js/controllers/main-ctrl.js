angular.module('MainCtrl', []).controller('MainController', ['$scope', 'Posts', function($scope, Posts) {


	Posts.get().success(function (data) {
  		$scope.posts = data;
  	});

  	$scope.post = {};
	$scope.isVisible = false;

	$scope.changeState = function () {
		$scope.isVisible = !$scope.isVisible;
	};

	$scope.addPost = function () {
		$scope.post.createdOn = Date.now();
		$scope.posts.push($scope.post);
		$scope.post = {};
		$scope.changeState();
	};
	
}]);

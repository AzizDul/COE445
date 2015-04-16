var myApp = angular.module('myApp', []);

myApp.controller('listAllBooksCntrl', function($scope, $http){
  //Is this API call synchronous or asynchronous?
  
	$http.get('/books').
  		success(function(data, status, headers, config) {
    		$scope.books = data;
  		}).
  		error(function(data, status, headers, config) {
    		$scope.books = [];
  		});
});

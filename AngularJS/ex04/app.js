var myApp = angular.module('myApp', []);

myApp.controller('courseController', function($scope){
	$scope.NumberCourses = 3;
	$scope.courses = [
		{name : "Digital Logic Design"},
		{name : "Computer Organization and Architecture"},
		{name : "Computer Networks"}
	]
});
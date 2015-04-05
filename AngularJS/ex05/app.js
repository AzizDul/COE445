var myApp = angular.module('myApp', []);

myApp.controller('courseController', function($scope){

	$scope.courses = [
		{name : "Digital Logic Design"},
		{name : "Computer Organization and Architecture"},
		{name : "Computer Networks"}
	]

	$scope.addNewCourse = function (){
		$scope.courses.push({ name : $scope.CourseName});
		$scope.CourseName = '';
	}
	
});
var client = angular.module('routingApp', ['ngRoute']);

client.config(['$routeProvider', function($routeProvider) { 
   $routeProvider
      .when('/', { templateUrl: 'home.html' }) 
      .when('/about', { templateUrl: 'about.html' }) 
      .otherwise({redirectTo: '/'}); 
}]);
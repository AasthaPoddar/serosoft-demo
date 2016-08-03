/**
 * Routing for the complete web app
 */
angular.module('monitorApp').config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider.state('dev', {
 		url: '/dev',
 		templateUrl: 'app/dev/dev.html',
 		controller : 'devController'
 	}).state('qa', {
 		url: '/qa',
 		templateUrl: 'app/qa/qa.html',
 		controller: 'qaController'
 	}).state('prod', {
 		url: '/prod',
 		templateUrl: 'app/prod/prod.html',
 		controller: 'prodController'
 	}).state('home', {
 		url: '/home',
 		templateUrl: 'app/home/home.html',
 		controller: 'homeController'
 	});

});
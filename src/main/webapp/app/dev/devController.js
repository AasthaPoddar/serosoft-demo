angular
	.module('monitorApp')
	.controller('devController', devController);

	function devController() {
		console.log("Logging devController");
		var vm = this;
	}
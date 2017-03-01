(function (angular) {
'use strict';

	angular.module('starterApp')
	    .controller('aboutController', constructor);
	    	constructor.$inject = ['SampleService','$scope','$timeout'];
	    	function constructor(SampleService,$scope,$timeout) {
	    		var vm = this;
	    		vm.teamList = SampleService.getTeams();
	    		console.log(vm.teamList);
	        	
	    	}

})(window.angular);
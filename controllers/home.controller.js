(function (angular) {
'use strict';
	
	angular.module('starterApp')
		.controller('homeController', constructor);
		    constructor.$inject = ['$stateParams','SampleService','$scope','$window','$state'];
		    function constructor($stateParams,SampleService,$scope,$window,$state) {
		    	var vm = this;
		    }

})(window.angular);
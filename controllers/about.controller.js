(function (angular) {
'use strict';

	angular.module('starterApp')
	    .controller('aboutController', constructor);
	    	constructor.$inject = ['SampleService','$scope','$timeout'];
	    	function constructor(SampleService,$scope,$timeout) {
	    		var vm = this;
	    		vm.teamList = SampleService.getTeams();
	    		console.log(vm.teamList);

	    		window.initMap = function() {
	    			console.log('hello')
			        var uluru = {lat: -25.363, lng: 131.044};
			        var map = new google.maps.Map(document.getElementById('map'), {
			          zoom: 4,
			          center: uluru
			        });

			        //
			        $scope.marker1 = new google.maps.Marker({
			          position: uluru,
			          map: map,
			          title: 'First Marker'

			        })
			    }


	        	
	    	}

})(window.angular);
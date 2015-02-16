angular.module('app.main', [ 'ionic'])

// Shared main object acts like a session
.factory('mainCache', function() {
	return {
		loading : false,
		isCordova : window.isCordova,
		login : null
	};
})

.controller('MainController', function($scope, mainCache) {
	$scope.mainCache = mainCache;


	// Check if a form field is empty
	$scope.isEmpty = function isEmpty(value) {
		return typeof value === 'undefined' || value === '' || value === null || value !== value;
	};


});
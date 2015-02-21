// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'app.home', 'app.main'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.config(function($compileProvider, $stateProvider, $urlRouterProvider, $httpProvider, $ionicConfigProvider) {
	// Ionic 14
	$ionicConfigProvider.views.maxCache(0);
	$ionicConfigProvider.navBar.alignTitle('center');
	$ionicConfigProvider.backButton.icon('ion-ios7-arrow-left');
	$ionicConfigProvider.backButton.previousTitleText(false);
	$ionicConfigProvider.backButton.text('');

	// Default to login page
	$urlRouterProvider.otherwise('/home');

	$stateProvider.state('main', {
		abstract : true,
		templateUrl : 'templates/main.html',
		controller : 'MainController'
	})

	.state('main.home', {		
		url : '/home',
		views : {
			'mainContent' : {
				templateUrl : 'templates/home.html',
				controller : 'HomeController'
			}
		}
	})
	.state('main.about', {		
		url : '/about',
		views : {
			'mainContent' : {
				templateUrl : 'templates/about.html',
				controller : 'HomeController'
			}
		}
	})
	.state('main.portfolio', {		
		url : '/portfolio',
		views : {
			'mainContent' : {
				templateUrl : 'templates/portfolio.html',
				controller : 'HomeController'
			}
		}
	})
	.state('main.contact', {		
		url : '/contact',
		views : {
			'mainContent' : {
				templateUrl : 'templates/contact.html',
				controller : 'HomeController'
			}
		}
	})
	
});

/*
 * Authored by  AlmogBaku
 *              almog.baku@gmail.com
 *              http://www.almogbaku.com/
 *
 * 27/12/14 21:01
 */

angular.module('myApp', ['ngFacebook'])
  .config(['$facebookProvider', function($facebookProvider) {
    $facebookProvider.setAppId('174491804387').setPermissions(['email', 'user_hometown', 'user_photos', 'user_about_me', 'user_birthday', 'user_relationships', 'user_likes', 'user_friends']);
  }])
  .run(['$rootScope', '$window', function($rootScope, $window) {
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    $rootScope.$on('fb.load', function() {
      $window.dispatchEvent(new Event('fb.load'));
    });
  }])
  .controller('myCtrl', ['$scope', '$facebook', function($scope, $facebook) {
    $scope.$on('fb.auth.authResponseChange', function() {
      $scope.status = $facebook.isConnected();
      if($scope.status) {
        $facebook.api('/me').then(function(user) {
          $scope.user = user;
        });
      }
    });

    $scope.loginToggle = function() {
      if($scope.status) {
        $facebook.logout();
      } else {
        $facebook.login();
      }
    };


    $scope.getPicture = function() {
        if(!$scope.status) return;
        $facebook.cachedApi('/me/picture').then(function(picture) {
        	console.info("Got picture: ", picture.data)
          $scope.picture = picture.data;
        });
      }
    
    $scope.getPhotos = function() {
        if(!$scope.status) return;
        $facebook.cachedApi('/me/photos').then(function(photos) {
        	console.info("Got photo: ", photos.data)
          $scope.photos = photos.data;
        });
      }
    
    $scope.getFriends = function() {
      if(!$scope.status) return;
      $facebook.cachedApi('/me/friends').then(function(friends) {
        $scope.friends = friends.data;
      });
    }
    
    $scope.getFamily = function() {
        if(!$scope.status) return;
        $facebook.cachedApi('/me/family').then(function(family) {
          $scope.family = family.data;
        });
      }
  }])
;
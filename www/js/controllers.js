angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ActosCtrl', function($scope, Actos) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  //$scope.actos = Actos.all();
  Actos.all().success(function(data) {
    $scope.actos = data;
  });
  $scope.remove = function(acto) {
    Actos.remove(acto);
  };
})

.controller('ActoDetailCtrl', function($scope, $stateParams, Actos) {
  Actos.get($stateParams.actoId).success(function(data) {
    console.log(data);
    $scope.acto = data[0]; 
  });
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

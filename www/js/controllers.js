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
  $scope.actos = [];
  Actos.all().success(function(data) {
    angular.forEach(data, function(value, key) {
      value.fecha = parseInt(value.fecha) * 1000;
      $scope.actos.push(value);
    });
  });
})

.controller('ActoDetailCtrl', function($scope, $ionicModal, $stateParams, Actos, $cordovaLocalNotification) {
  Actos.get($stateParams.actoId).success(function(data) {
    $scope.acto = data[0]; 
    $scope.acto.fecha = parseInt($scope.acto.fecha) * 1000;
  });
  
  $scope.notification_options = [{id:60, name:"1 hora antes"}, {id: 120, name:"2 horas antes"},{id: 300, name:"5 horas antes"} ];
  $scope.settings = {time: 0};
   // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/addNotificationForm.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  
  $scope.addNotification = function(data) {
        var alarmTime = new Date($scope.acto.fecha);
        alarmTime.setMinutes(alarmTime.getMinutes() - $scope.settings.time);
        $cordovaLocalNotification.schedule({
            id: $scope.acto.id,
            date: alarmTime,
            message: "Tienes una cita",
            title: $scope.acto.title,
            autoCancel: true,
            sound: null,
        }).then(function () {
          $scope.modal.hide();
            console.log("The notification has been set");
        });
    };
 
    $scope.isScheduled = function() {
        $cordovaLocalNotification.isScheduled($scope.acto.id).then(function(isScheduled) {
            alert("Notification " + $scope.acto.id + " Scheduled: " + isScheduled);
        });
    };
    
    $scope.addNotificationForm = function() {
      $scope.modal.show();
    }
      // Triggered in the login modal to close it
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
})

.controller('AccountCtrl', function($scope, Settings) {
  $scope.settings = {idioma: Settings.getLang()};
  
  $scope.changeLang = function() {
    Settings.setLang($scope.settings.idioma);
    //refresh the page so the changes are active
    window.location.reload(true);
  };
});

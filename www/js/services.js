angular.module('starter.services', [])

.factory('Actos', ['$http', function($http) {
  return {
    all: function() {
      return  $http.get('http://katakrak.net/api/agenda/views/agenda_service');
      //return  $http.get('agenda/views/agenda_service');
    },
    get: function(actoId) { 
      return  $http.get('http://katakrak.net/api/agenda/views/agenda_service?args='+actoId);
      //return  $http.get('agenda/views/agenda_service?args='+actoId);
    }
  };
}]);

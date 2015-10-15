angular.module('starter.services', [])

.factory('Actos', ['$http', 'Settings', function($http, Settings) {
  return {
    all: function() {
      //return  $http.get('http://katakrak.net/'+Settings.getLang()+'/api/agenda/views/agenda_service');
      return  $http.get('api/'+Settings.getLang()+'/api/agenda/views/agenda_service');
    },
    get: function(actoId) { 
      //return  $http.get('http://katakrak.net/'+Settings.getLang()+'/api/agenda/views/agenda_service?args='+actoId);
      return  $http.get('api/'+Settings.getLang()+'/api/agenda/views/agenda_service?args='+actoId);
    }
  };
}])

.factory('Settings', function() {
  
  return {
    getLang: function() {
      return window.localStorage['lang'];
    },
    setLang: function (lang) {
      window.localStorage['lang'] = lang;
    }
  }
})
;

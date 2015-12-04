angular.module('starter.services', [])

.factory('Actos', ['$http', 'Settings', function($http, Settings) {
  return {
    all: function() {
      return  $http.get('http://katakrak.net/'+Settings.getLang()+'/api/agenda/views/service_agenda');
      return  $http.get('api/'+Settings.getLang()+'/api/views/service_agenda');
    },
    get: function(actoId) { 
      return  $http.get('http://katakrak.net/'+Settings.getLang()+'/api/agenda/views/service_agenda?args='+actoId);
      return  $http.get('api/'+Settings.getLang()+'/api/views/service_agenda?args='+actoId);
    }
  };
}])

.factory('Libros', ['$http', 'Settings', function($http, Settings) {
  return {
    all: function() {
      return  $http.get('http://katakrak.net/'+Settings.getLang()+'/api/agenda/views/service_libros');
      return  $http.get('api/'+Settings.getLang()+'/api/views/service_libros');
    },
    get: function(actoId) { 
      return  $http.get('http://katakrak.net/'+Settings.getLang()+'/api/agenda/views/service_libros?args='+actoId);
      return  $http.get('api/'+Settings.getLang()+'/api/views/service_libros?args='+actoId);
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
});

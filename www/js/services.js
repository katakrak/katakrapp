angular.module('starter.services', [])

.factory('Actos', ['$http', 'Settings', function($http, Settings) {
  return {
    all: function() {
      //return  $http.get('http://katakrak.net/'+Settings.getLang()+'/rest/service_agenda');
      return  $http.get('api/'+Settings.getLang()+'/rest/service_agenda');
    },
    get: function(actoId) { 
      //return  $http.get('http://katakrak.net/'+Settings.getLang()+'/rest/service_agenda?args[0]='+actoId);
      return  $http.get('api/'+Settings.getLang()+'/rest/service_agenda?args[0]='+actoId);
    }
  };
}])

.factory('Libros', ['$http', 'Settings', function($http, Settings) {
  return {
    all: function() {
      //return  $http.get('http://katakrak.net/'+Settings.getLang()+'/rest/service_libros');
      return  $http.get('api/'+Settings.getLang()+'/rest/service_libros');
    },
    get: function(actoId) { 
      //return  $http.get('http://katakrak.net/'+Settings.getLang()+'/rest/service_libros?args='+actoId);
      return  $http.get('api/'+Settings.getLang()+'/rest/service_libros?args='+actoId);
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

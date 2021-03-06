// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ionic.service.core','ionic.service.push','ngCordova', 'starter.controllers', 'starter.services', 'pascalprecht.translate'])

.run(function($ionicPlatform, $translate) {
  $ionicPlatform.ready(function() {
    if (typeof window.plugin != 'undefined') {
      window.plugin.notification.local.on("click", function (notification) {
        window.plugin.notification.local.cancel(notification.id, function() { 
          window.location.replace('#/app/acto/'+notification.id);
        });
      });
    }
    if(typeof window.localStorage['lang'] === "undefined") {
      if (typeof navigator.globalization !== "undefined") {
        navigator.globalization.getPreferredLanguage(function(language) {
          lang = language.value.split('-')[0];
          if (lang === 'eu') {
             window.localStorage['lang'] = 'eus';
          }
          else {
             window.localStorage['lang'] = 'cas';
          }
        });
      }
      else {
        window.localStorage['lang'] = 'cas';
      }
    }
   
   if (window.localStorage['lang'] === 'eus') {
     $translate.use('eu');
   }
   else {
     $translate.use('es');
   }
//    window.plugin.notification.local.on("click", function (notification, state) {
//      window.plugin.notification.local.cancel(notification.id, function() {
//       
//      });
//    }, this);
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $translateProvider, $ionicConfigProvider) {


    $ionicConfigProvider.tabs.position('bottom'); // other values: top

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $translateProvider.useSanitizeValueStrategy('sanitize');
  $translateProvider.translations('es', {
    titulo_seccion_actos: "Agenda Katakrak",
    titulo_seccion_libros: "Libros",
    tab_hoy: 'Hoy',
    tab_esta_semana: "Esta semana",
    tab_proximamente: "Próximamente",
    loading: "Cargando",
    add_notification: "Notificarme",
    notification_settings_text: "Cuándo recibir la notificación",
  });
  $translateProvider.translations('eu', {
      titulo_seccion_actos: "Katakrakeko agenda",
      titulo_seccion_libros: "Liburuak",
      tab_hoy: 'gaur',
      tab_esta_semana: "Aste honetan",
      tab_proximamente: "Aurki",
      loading: "Kargatzen",
      add_notification: "Ekitaldiaren berri eman",
      notification_settings_text: "Noiz jaso jakinarazpena",
  });
  
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html'
  })

  // Each tab has its own nav history stack:

  .state('app.agenda', {
      url: '/agenda',
      views: {
        'menuContent': {
          templateUrl: 'templates/agenda.html',
          controller: 'AgendaCtrl'
        }
      }
    })
    .state('app.acto', {
      url: '/acto/:actoId',
      views: {
        'menuContent': {
          templateUrl: 'templates/acto.html',
          controller: 'ActoCtrl'
        }
      }
    })

  .state('app.config', {
    url: '/config',
    views: {
      'menuContent': {
        templateUrl: 'templates/config.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/agenda');
})

.config(['$ionicAppProvider', function($ionicAppProvider) {
  // Identify app
  $ionicAppProvider.identify({
    // The App ID (from apps.ionic.io) for the server
    app_id: '1fd5dc44',
    // The public API key all services will use for this app
    api_key: '35e0598afafafef1d0bdbaa38bfddcaed4a7be87130d7d06',
    // Set the app to use development pushes
    dev_push: true
  });
}])
;

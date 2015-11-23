// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'pascalprecht.translate'])

.run(function($ionicPlatform, $translate) {
  $ionicPlatform.ready(function() {
    if(typeof window.localStorage['lang'] === "undefined" && typeof navigator.globalization !== "undefined") {
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
   if (window.localStorage['lang'] == 'eus') {
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

.config(function($stateProvider, $urlRouterProvider, $translateProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $translateProvider.useSanitizeValueStrategy('sanitize');
  $translateProvider.translations('es', {
    titulo_seccion_actos: "Actos Katakrak",
    tab_actos: 'Actos',
    tab_config: "Configuración",
    tab_libros: "Libros",
  });
  $translateProvider.translations('eu', {
      titulo_seccion_actos: "Katakrakeko ekitaldiak",
      tab_actos: 'Ekitaldiak',
      tab_config: "Konfigurazioa",
      tab_libros: "Liburuak",
  });
  
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.actos', {
      url: '/actos',
      views: {
        'tab-actos': {
          templateUrl: 'templates/tab-actos.html',
          controller: 'ActosCtrl'
        }
      }
    })
    .state('tab.acto-detail', {
      url: '/acto/:actoId',
      views: {
        'tab-actos': {
          templateUrl: 'templates/acto-detail.html',
          controller: 'ActoDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/actos');
});

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
  //$scope.actos = [{"title":"M. Jos\u00e9 Gea Fern\u00e1ndez \u00abUna condena compartida\u00bb","fecha":"1447264800","id":"49525","imagen":"<img src=\"http://www.katakrak.net/sites/default/files/styles/medium/public/events/mjose.jpg?itok=gvbqQ0ZZ\" alt=\"\" />","thumbnail":"<img src=\"http://www.katakrak.net/sites/default/files/styles/event_thumbnail/public/events/mjose.jpg?itok=cANxJwXE\" alt=\"\" />","description":null,"link":"<a href=\"http://katakrak.net/node/49525\">ver mas</a>"},{"title":"Clase de yoga y ciclo menstrual","fecha":"1447347600","id":"48843","imagen":"<img src=\"http://www.katakrak.net/sites/default/files/styles/medium/public/events/yoga_3.jpg?itok=DjMg_kVj\" alt=\"\" />","thumbnail":"<img src=\"http://www.katakrak.net/sites/default/files/styles/event_thumbnail/public/events/yoga_3.jpg?itok=YWzmxDAX\" alt=\"\" />","description":"<p>La propuesta est\u00e1 articulada en diez sesiones con las que nos iremos familiarizando con posiciones f\u00edsicas, respiraciones y meditaciones concretas para cada fase del ciclo menstrual; con el sistema reproductor, el hormonal y el nervioso; con el suelo p\u00e9lvico.</p>\n<p>Hay dos sesiones cada uno de los d\u00edas: de 18:00 a 19:30 y de 20:00 a 21:30.</p>\n<p>Las sesiones tienen una duraci\u00f3n de dos horas: durante la primera, comenzamos con unos instantes de autopercepci\u00f3n, tomando conciencia de nuestra sensaciones, de nuestro estado y continuamos con un calentamiento que nos permite ir relajando y mimando nuestro cuerpo y calmando y centrando nuestra mente. A continuaci\u00f3n, realizamos ejercicios y posturas encaminadas a reequilibrar el sistema reproductor femenino, el hormonal, el nervioso, etc. Continuamos con un tiempo para la relajaci\u00f3n profunda y reparadora (fundamental, porque el estr\u00e9s y la ansiedad donde primero afectan es en el aparato reproductor) y un tiempo para la meditaci\u00f3n.</p>\n<p>Suponen la f\u00f3rmula m\u00e1s ajustada para familiarizarnos con los ciclos de la mujer y prevenir, o poner al d\u00eda, los s\u00edntomas y desequilibrios relacionados con la menstruaci\u00f3n, la fertilidad; porque ajustar la pr\u00e1ctica de yoga a la naturaleza femenina nos permite conocer y respetar nuestros ritmos, nuestras necesidades y cambios.</p>\n","link":"<a href=\"http://katakrak.net/node/48843\">ver mas</a>"},{"title":"Emilio Gancedo \u00abPalabras mayores\u00bb","fecha":"1447437600","id":"49046","imagen":"<img src=\"http://www.katakrak.net/sites/default/files/styles/medium/public/events/emilio_gancedo.jpg?itok=ROTwtFwd\" alt=\"\" />","thumbnail":"<img src=\"http://www.katakrak.net/sites/default/files/styles/event_thumbnail/public/events/emilio_gancedo.jpg?itok=-FBAHuB4\" alt=\"\" />","description":"<p>Presentaci\u00f3n del libro con el autor.<br />\nDurante medio a\u00f1o Emilio Gancedo se ech\u00f3 a la carretera y pacientemente hizo un recorrido por la diversidad y heterogeneidad de lo que hoy llamamos Espa\u00f1a. En su camino se encontr\u00f3 y charl\u00f3 largo y tendido con personas vinculadas al medio rural, todas ellas cultivadoras de recuerdos, ejemplos comprometidos con la memoria viva. Fruto de ese trabajo es Palabras mayores, una suma de historias, recuerdos, anhelos y ense\u00f1anzas de una generaci\u00f3n, los nacidos antes o inmediatamente despu\u00e9s de la guerra civil, a quienes pr\u00e1cticamente hemos dejado de escuchar; un libro que rescata muchas experiencias y ense\u00f1anzas \u00fatiles para el presente de unas gentes extraordinarias que pasaron en pocas d\u00e9cadas del Neol\u00edtico a Internet.</p>\n","link":"<a href=\"http://katakrak.net/node/49046\">ver mas</a>"},{"title":"M\u00fasica enlatada o m\u00fasicos en vivo","fecha":"1447515000","id":"50325","imagen":"<img src=\"http://www.katakrak.net/sites/default/files/styles/medium/public/events/pasai_donibane1970.jpg?itok=CkOJch56\" alt=\"\" />","thumbnail":"<img src=\"http://www.katakrak.net/sites/default/files/styles/event_thumbnail/public/events/pasai_donibane1970.jpg?itok=n2XI9zFU\" alt=\"\" />","description":"<p>Caf\u00e9-tertulia organizada por la Federaci\u00f3n de Dantzaris de Navarra.</p>\n","link":"<a href=\"http://katakrak.net/node/50325\">ver mas</a>"},{"title":"Guerra, Paz y Revoluci\u00f3n: Los dilemas del antimilitarismo entre las dos guerras mundiales","fecha":"1447783200","id":"49806","imagen":"<img src=\"http://www.katakrak.net/sites/default/files/styles/medium/public/events/postart4.jpg?itok=u156z5L0\" alt=\"\" />","thumbnail":"<img src=\"http://www.katakrak.net/sites/default/files/styles/event_thumbnail/public/events/postart4.jpg?itok=ZLB7VhNc\" alt=\"\" />","description":"<p>Fernando Mendiola (UPNA-NUP)<br />\nPrecios: 30 euros / 10 euros (precarix) / 50 eurox (apoyo)<br />\nSe entregar\u00e1 dossier de materiales con la matriculaci\u00f3n<br />\nCertificado de asistencia por curso de 10 horas</p>\n","link":"<a href=\"http://katakrak.net/node/49806\">ver mas</a>"},{"title":"Lohitzune Zuloaga \u00abEl espejismo de la seguridad ciudadana\u00bb","fecha":"1447869600","id":"49528","imagen":"<img src=\"http://www.katakrak.net/sites/default/files/styles/medium/public/events/lohitzune.jpg?itok=QVHCD0sW\" alt=\"\" />","thumbnail":"<img src=\"http://www.katakrak.net/sites/default/files/styles/event_thumbnail/public/events/lohitzune.jpg?itok=Tyz1NjDW\" alt=\"\" />","description":"<p>Con la autora.</p>\n","link":"<a href=\"http://katakrak.net/node/49528\">ver mas</a>"},{"title":"Cata de cerveza con Akui","fecha":"1447873200","id":"50182","imagen":"<img src=\"http://www.katakrak.net/sites/default/files/styles/medium/public/events/brauerei.jpeg?itok=Af5KULUc\" alt=\"\" />","thumbnail":"<img src=\"http://www.katakrak.net/sites/default/files/styles/event_thumbnail/public/events/brauerei.jpeg?itok=OFuo4hCE\" alt=\"\" />","description":"<p>Por 8\u20ac con picoteo.<br />\nEscribe a <a href=\"mailto:ardotegia@katakrak.net\">ardotegia@katakrak.net</a> o llama al 948 225520.</p>\n","link":"<a href=\"http://katakrak.net/node/50182\">ver mas</a>"},{"title":"Clase de yoga y ciclo menstrual","fecha":"1447952400","id":"48845","imagen":"<img src=\"http://www.katakrak.net/sites/default/files/styles/medium/public/events/yoga_4.jpg?itok=fspCzzyK\" alt=\"\" />","thumbnail":"<img src=\"http://www.katakrak.net/sites/default/files/styles/event_thumbnail/public/events/yoga_4.jpg?itok=F9HFu1Ib\" alt=\"\" />","description":"<p>La propuesta est\u00e1 articulada en diez sesiones con las que nos iremos familiarizando con posiciones f\u00edsicas, respiraciones y meditaciones concretas para cada fase del ciclo menstrual; con el sistema reproductor, el hormonal y el nervioso; con el suelo p\u00e9lvico.</p>\n<p>Hay dos sesiones cada uno de los d\u00edas: de 18:00 a 19:30 y de 20:00 a 21:30.</p>\n<p>Las sesiones tienen una duraci\u00f3n de dos horas: durante la primera, comenzamos con unos instantes de autopercepci\u00f3n, tomando conciencia de nuestra sensaciones, de nuestro estado y continuamos con un calentamiento que nos permite ir relajando y mimando nuestro cuerpo y calmando y centrando nuestra mente. A continuaci\u00f3n, realizamos ejercicios y posturas encaminadas a reequilibrar el sistema reproductor femenino, el hormonal, el nervioso, etc. Continuamos con un tiempo para la relajaci\u00f3n profunda y reparadora (fundamental, porque el estr\u00e9s y la ansiedad donde primero afectan es en el aparato reproductor) y un tiempo para la meditaci\u00f3n.</p>\n<p>Suponen la f\u00f3rmula m\u00e1s ajustada para familiarizarnos con los ciclos de la mujer y prevenir, o poner al d\u00eda, los s\u00edntomas y desequilibrios relacionados con la menstruaci\u00f3n, la fertilidad; porque ajustar la pr\u00e1ctica de yoga a la naturaleza femenina nos permite conocer y respetar nuestros ritmos, nuestras necesidades y cambios.</p>\n","link":"<a href=\"http://katakrak.net/node/48845\">ver mas</a>"},{"title":"Paul Valery \u00abEl cementerio marino\u00bb","fecha":"1448044200","id":"48360","imagen":"<img src=\"http://www.katakrak.net/sites/default/files/styles/medium/public/events/paul_valery.jpg?itok=iwWtodr2\" alt=\"\" />","thumbnail":"<img src=\"http://www.katakrak.net/sites/default/files/styles/event_thumbnail/public/events/paul_valery.jpg?itok=aZfEZOxT\" alt=\"\" />","description":"<p>Cita mensual del grupo de lectura de poes\u00eda La Casa Roja. An\u00edmate a leerlo y ven a charlar.</p>\n","link":"<a href=\"http://katakrak.net/node/48360\">ver mas</a>"},{"title":"Danza y g\u00e9nero","fecha":"1448119800","id":"50349","imagen":"<img src=\"http://www.katakrak.net/sites/default/files/styles/medium/public/events/ezpatadantza.jpg?itok=JXRMQ-Nx\" alt=\"\" />","thumbnail":"<img src=\"http://www.katakrak.net/sites/default/files/styles/event_thumbnail/public/events/ezpatadantza.jpg?itok=GWWOOqHj\" alt=\"\" />","description":"<p>Organizado por la Federaci\u00f3n de Dantzaris de Navarra.</p>\n","link":"<a href=\"http://katakrak.net/node/50349\">ver mas</a>"}]
  $scope.actos = [];
  Actos.all().success(function(data) {
    angular.forEach(data, function(value, key) {
      value.fecha = parseInt(value.fecha) * 1000;
      $scope.actos.push(value);
    });
  });
})

.controller('ActoDetailCtrl', function($scope, $ionicModal, $stateParams, Actos) {
  Actos.get($stateParams.actoId).success(function(data) {
    $scope.acto = data[0]; 
    $scope.acto.fecha = parseInt($scope.acto.fecha) * 1000;
    $scope.acto.scheduled = $scope.isPresent();
  });
  //$scope.acto = {"title":"M. Jos\u00e9 Gea Fern\u00e1ndez \u00abUna condena compartida\u00bb","fecha":"1447264800","id":"49525","imagen":"<img src=\"http://www.katakrak.net/sites/default/files/styles/medium/public/events/mjose.jpg?itok=gvbqQ0ZZ\" alt=\"\" />","thumbnail":"<img src=\"http://www.katakrak.net/sites/default/files/styles/event_thumbnail/public/events/mjose.jpg?itok=cANxJwXE\" alt=\"\" />","description":null,"link":"<a href=\"http://katakrak.net/node/49525\">ver mas</a>"};
  
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
        window.plugin.notification.local.schedule({
            id: $scope.acto.id,
            at: alarmTime,
            text: "Tienes una cita",
            title: $scope.acto.title,
            autoClear: true,
            sound: null,
        }, function() {
          $scope.closeModal();
        });
        window.plugin.notification.local.on("click", function (notification, state) {
        alert("cancelando: " + notification.id);
        window.plugin.notification.local.cancel(notification.id, function() {
          alert("notification cleared");
        });
        
      });
    };
    
    
    $scope.isScheduled = function() {
      window.plugin.notification.local.isScheduled($scope.acto.id, function(isScheduled) {
            alert("Notification " + $scope.acto.id + " Scheduled: " + isScheduled);
        });
    };

    $scope.isPresent = function() {
      window.plugin.notification.local.isPresent($scope.acto.id, function(isPresent) {
            return isPresent;
        });
    };
    $scope.isTriggered = function() {
      window.plugin.notification.local.isTriggered($scope.acto.id, function(isTriggered) {
            alert("Notification " + $scope.acto.id + " Triggered: " + isTriggered);
        });
    };
    
    $scope.cancelNotification = function() {
      window.plugin.notification.local.cancel($scope.acto.id, function() {
          alert("notificación cancelada");
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

angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

})

.controller('ActosCtrl', function($scope, $translate, Actos) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  //$scope.actos = [{"title":"Lohitzune Zuloaga \u00abEl espejismo de la seguridad ciudadana\u00bb","fecha":"1447869600","id":"49528","imagen":"<img src=\"http://www.katakrak.net/sites/default/files/styles/medium/public/events/lohitzune.jpg?itok=QVHCD0sW\" alt=\"\" />","thumbnail":"<img src=\"http://www.katakrak.net/sites/default/files/styles/event_thumbnail/public/events/lohitzune.jpg?itok=Tyz1NjDW\" alt=\"\" />","description":"<p>Con la autora.</p>\n","link":"<a href=\"http://katakrak.net/node/49528\">ver mas</a>"},{"title":"Cata de cerveza con Akui","fecha":"1447873200","id":"50182","imagen":"<img src=\"http://www.katakrak.net/sites/default/files/styles/medium/public/events/brauerei.jpeg?itok=Af5KULUc\" alt=\"\" />","thumbnail":"<img src=\"http://www.katakrak.net/sites/default/files/styles/event_thumbnail/public/events/brauerei.jpeg?itok=OFuo4hCE\" alt=\"\" />","description":"<p>Por 8\u20ac con picoteo.<br />\nEscribe a <a href=\"mailto:ardotegia@katakrak.net\">ardotegia@katakrak.net</a> o llama al 948 225520.</p>\n","link":"<a href=\"http://katakrak.net/node/50182\">ver mas</a>"},{"title":"Clase de yoga y ciclo menstrual","fecha":"1447952400","id":"48845","imagen":"<img src=\"http://www.katakrak.net/sites/default/files/styles/medium/public/events/yoga_4.jpg?itok=fspCzzyK\" alt=\"\" />","thumbnail":"<img src=\"http://www.katakrak.net/sites/default/files/styles/event_thumbnail/public/events/yoga_4.jpg?itok=F9HFu1Ib\" alt=\"\" />","description":"<p>La propuesta est\u00e1 articulada en diez sesiones con las que nos iremos familiarizando con posiciones f\u00edsicas, respiraciones y meditaciones concretas para cada fase del ciclo menstrual; con el sistema reproductor, el hormonal y el nervioso; con el suelo p\u00e9lvico.</p>\n<p>Hay dos sesiones cada uno de los d\u00edas: de 18:00 a 19:30 y de 20:00 a 21:30.</p>\n<p>Las sesiones tienen una duraci\u00f3n de dos horas: durante la primera, comenzamos con unos instantes de autopercepci\u00f3n, tomando conciencia de nuestra sensaciones, de nuestro estado y continuamos con un calentamiento que nos permite ir relajando y mimando nuestro cuerpo y calmando y centrando nuestra mente. A continuaci\u00f3n, realizamos ejercicios y posturas encaminadas a reequilibrar el sistema reproductor femenino, el hormonal, el nervioso, etc. Continuamos con un tiempo para la relajaci\u00f3n profunda y reparadora (fundamental, porque el estr\u00e9s y la ansiedad donde primero afectan es en el aparato reproductor) y un tiempo para la meditaci\u00f3n.</p>\n<p>Suponen la f\u00f3rmula m\u00e1s ajustada para familiarizarnos con los ciclos de la mujer y prevenir, o poner al d\u00eda, los s\u00edntomas y desequilibrios relacionados con la menstruaci\u00f3n, la fertilidad; porque ajustar la pr\u00e1ctica de yoga a la naturaleza femenina nos permite conocer y respetar nuestros ritmos, nuestras necesidades y cambios.</p>\n","link":"<a href=\"http://katakrak.net/node/48845\">ver mas</a>"},{"title":"Stamatis Karagiannopoulos: \u00bfQu\u00e9 est\u00e1 pasando en Grecia?","fecha":"1448035200","id":"50567","imagen":"<img src=\"http://www.katakrak.net/sites/default/files/styles/medium/public/events/dsc_8230.jpg?itok=kjch97cU\" alt=\"\" />","thumbnail":"<img src=\"http://www.katakrak.net/sites/default/files/styles/event_thumbnail/public/events/dsc_8230.jpg?itok=SysSGkBM\" alt=\"\" />","description":"<p>Miembro de la Corriente Marxista Internacional, y del Comit\u00e9 Central de Unidad Popular, el partido que se escindi\u00f3 de Syriza tras aceptar esta \u00faltima el rescate con condiciones de la Troika.</p>\n<p>Organizado por ATTAC Navarra-Nafarroa.</p>\n","link":"<a href=\"http://katakrak.net/node/50567\">ver mas</a>"},{"title":"Fiscalidad y lucha contra el fraude","fecha":"1448042400","id":"50440","imagen":"<img src=\"http://www.katakrak.net/sites/default/files/styles/medium/public/events/asambleaporelcambio.jpg?itok=d9Bk0UjE\" alt=\"\" />","thumbnail":"<img src=\"http://www.katakrak.net/sites/default/files/styles/event_thumbnail/public/events/asambleaporelcambio.jpg?itok=MmjtBnQl\" alt=\"\" />","description":"<p>Participantes mesa redonda:<br />\nJokin Castiella        (Geroa Bai)<br />\nMaiorga Ram\u00edrez         (EH Bildu)<br />\nF\u00e1tima Andreo             (Podemos)<br />\nJos\u00e9 Miguel Nuin         (Izquierda Ezkerra)</p>\n","link":"<a href=\"http://katakrak.net/node/50440\">ver mas</a>"},{"title":"Paul Valery \u00abEl cementerio marino\u00bb","fecha":"1448044200","id":"48360","imagen":"<img src=\"http://www.katakrak.net/sites/default/files/styles/medium/public/events/paul_valery.jpg?itok=iwWtodr2\" alt=\"\" />","thumbnail":"<img src=\"http://www.katakrak.net/sites/default/files/styles/event_thumbnail/public/events/paul_valery.jpg?itok=aZfEZOxT\" alt=\"\" />","description":"<p>Cita mensual del grupo de lectura de poes\u00eda La Casa Roja. An\u00edmate a leerlo y ven a charlar.</p>\n","link":"<a href=\"http://katakrak.net/node/48360\">ver mas</a>"},{"title":"Laurent Bonelli: Securocracia y \u00ablucha contra el terrorismo\u00bb","fecha":"1448100000","id":"50510","imagen":"<img src=\"http://www.katakrak.net/sites/default/files/styles/medium/public/events/bonelli.jpg?itok=T4nYkEgl\" alt=\"\" />","thumbnail":"<img src=\"http://www.katakrak.net/sites/default/files/styles/event_thumbnail/public/events/bonelli.jpg?itok=drTy2OrU\" alt=\"\" />","description":"<p>Maestro de conferencias de ciencias pol\u00edticas en la Universidad Paris X de Nanterre. Especialista en temas de seguridad urbana, vigilancia y lucha contra el terrorismo.<br />\nActo organizado por la fundaci\u00f3n Iratzar.</p>\n","link":"<a href=\"http://katakrak.net/node/50510\">ver mas</a>"},{"title":"Danza y g\u00e9nero","fecha":"1448119800","id":"50349","imagen":"<img src=\"http://www.katakrak.net/sites/default/files/styles/medium/public/events/ezpatadantza.jpg?itok=JXRMQ-Nx\" alt=\"\" />","thumbnail":"<img src=\"http://www.katakrak.net/sites/default/files/styles/event_thumbnail/public/events/ezpatadantza.jpg?itok=GWWOOqHj\" alt=\"\" />","description":"<p>Organizado por la Federaci\u00f3n de Dantzaris de Navarra.</p>\n","link":"<a href=\"http://katakrak.net/node/50349\">ver mas</a>"},{"title":"Desobedientzia: de la solidaridad al compromiso","fecha":"1448128800","id":"50379","imagen":"<img src=\"http://www.katakrak.net/sites/default/files/styles/medium/public/events/herri_harresia.jpg?itok=hU_VP8rk\" alt=\"\" />","thumbnail":"<img src=\"http://www.katakrak.net/sites/default/files/styles/event_thumbnail/public/events/herri_harresia.jpg?itok=1yJA64xv\" alt=\"\" />","description":"<p>Desde el inicio de la actual \"crisis\" econ\u00f3mica se han venido efectuando una serie de reformas estructurales con el objetivo de potenciar las pol\u00edticas neoliberales, favorecer el traspaso de los bienes p\u00fablicos a manos privadas y mantener los privilegios de las clases dominantes. La reforma constitucional, la reforma de la seguridad social, la reforma del estatuto de los trabajadores, la reforma educativa,....y ahora para proteger todas estas reformas que atentan contra los intereses de las clases populares se reforma el C\u00f3digo Penal criminalizando aun mas la respuesta de la sociedad. Un claro ejemplo de esta estrategia la podemos ver en la reforma del delito de \"desordenes p\u00fablicos\", donde se se amplian de manera considerables los supuestos que entrar\u00edan a formar parte de este delito y se incrementa la pena hasta 6 a\u00f1os de prisi\u00f3n, a dem\u00e1s se sancionar\u00e1 con penas-multas a quienes entren en entidades p\u00fablicas (como entidades bancarias) y alteren su funcionamiento, o quienes no se vayan cuando llegue la hora del cierre.<br />\nEn relaci\u00f3n con las \u00faltimas huelgas secundadas en Euskal Herria el balance total de detenidos, encausados, multados y condenados es enorme, solamente en Nafarroa hay un balance de 74 detenciones, 3 condenas firmes de 16 meses de c\u00e1rcel para tres personas y peticiones para otras cinco de 4 a\u00f1os de c\u00e1rcel y 5700\u20ac de multa. Y el pasado 10 de enero fueron juzgadas 18 personas integrantes de un piquete informativo en Gernika-Lumo. A estas 18 personas les piden 3 a\u00f1os y 9 meses de carcel y 6.000\u20ac de multa para cada una de ellas.<br />\nUn Juzgado de Bilbo ha impuesto una condena de a\u00f1o y tres meses de prisi\u00f3n para dos j\u00f3venes acusados de agredir a la Ertzaintza durante la huelga del 29M de 2012.</p>\n<p>Un activista vegano es detenido por los GAR el 22 de Junio del 2011 en una maniobra represiva , a nivel estatal, contra el movimiento de defensa de derechos animales. Despu\u00e9s de pasar 19 d\u00edas en prisi\u00f3n provisional se encuentra en libertad provisional con cargos a la espera de juicio.</p>\n","link":"<a href=\"http://katakrak.net/node/50379\">ver mas</a>"},{"title":"Daniel Jim\u00e9nez Franco \u00abTrampas y tormentos\u00bb","fecha":"1448301600","id":"49530","imagen":"<img src=\"http://www.katakrak.net/sites/default/files/styles/medium/public/events/danijimenezpic.jpeg?itok=m3fsSeIE\" alt=\"\" />","thumbnail":"<img src=\"http://www.katakrak.net/sites/default/files/styles/event_thumbnail/public/events/danijimenezpic.jpeg?itok=UX6Exk5g\" alt=\"\" />","description":"<p>El secuestro institucional parece perder protagonismo como herramienta de gobierno y la expulsi\u00f3n gana peso como mecanismo productor de penalidad. Ya no la expulsi\u00f3n a la c\u00e1rcel propia del estado penal neoliberal, sino una expulsi\u00f3n en sentido mucho m\u00e1s amplio, como l\u00f3gica constitutiva de una ecolog\u00eda del castigo impuesta bajo el actual r\u00e9gimen de acumulaci\u00f3n y desposesi\u00f3n.</p>\n","link":"<a href=\"http://katakrak.net/node/49530\">ver mas</a>"}];
  $scope.actos = [];
  Actos.all().success(function(data) {
    angular.forEach(data, function(value, key) {
      value.fecha = parseInt(value.fecha) * 1000;
      $scope.actos.push(value);
    });
  });
  $translate("titulo_seccion_actos").then(function(text) {$scope.title = text;});
})

.controller('ActoDetailCtrl', function($scope, $ionicModal, $stateParams, Actos) {
  $scope.acto = {};
  Actos.get($stateParams.actoId).success(function(data) {
    $scope.acto = data[0]; 
    $scope.acto.fecha = parseInt($scope.acto.fecha) * 1000;
    window.plugin.notification.local.isScheduled($scope.acto.id, function(isScheduled) {
      if (isScheduled) {
        $scope.acto.scheduled = true; 
      }
    });
  });
  //$scope.acto = {"title":"Lohitzune Zuloaga \u00abEl espejismo de la seguridad ciudadana\u00bb","fecha":"1447869600","id":"49528","imagen":"<img src=\"http://www.katakrak.net/sites/default/files/styles/medium/public/events/lohitzune.jpg?itok=QVHCD0sW\" alt=\"\" />","thumbnail":"<img src=\"http://www.katakrak.net/sites/default/files/styles/event_thumbnail/public/events/lohitzune.jpg?itok=Tyz1NjDW\" alt=\"\" />","description":"<p>Con la autora.</p>\n","link":"<a href=\"http://katakrak.net/node/49528\">ver mas</a>"};
  
  
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
      //sound: isAndroid ? 'file://sound.mp3' : 'file://beep.caf',
    }, function() {
      $scope.acto.scheduled = true; 
      $scope.closeModal();
    });
  };
    
    $scope.isScheduled = function() {
      window.plugin.notification.local.isScheduled($scope.acto.id, function(isScheduled) {
        if (isScheduled) {
          $scope.acto.scheduled = true; 
        }
        alert("Notification " + $scope.acto.id + " Scheduled: " + isScheduled);
        });
    };
    
    $scope.isTriggered = function() {
      window.plugin.notification.local.isTriggered($scope.acto.id, function(isTriggered) {
            alert("Notification " + $scope.acto.id + " Triggered: " + isTriggered);
        });
    };
    
    $scope.cancelNotification = function() {
      $scope.acto.scheduled = false;
      window.plugin.notification.local.cancel($scope.acto.id, function() { 
      });
      console.log($scope.acto.scheduled);
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

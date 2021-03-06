angular.module('starter.controllers', [])

.controller('AgendaCtrl', function($scope, Actos, $ionicLoading, Settings, $ionicSideMenuDelegate) {
  
  Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(),0,1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay()+1)/7);
  }
  
  Date.prototype.getDayOfYear= function(){
    var j1= new Date(this);
    j1.setMonth(0, 0);
    return Math.round((this-j1)/8.64e7);
  }
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  //$scope.actos = [{"title":"Lohitzune Zuloaga \u00abEl espejismo de la seguridad ciudadana\u00bb","fecha":"1447869600","id":"49528","imagen":"<img src=\"http://www.katakrak.net/sites/default/files/styles/medium/public/events/lohitzune.jpg?itok=QVHCD0sW\" alt=\"\" />","thumbnail":"<img src=\"http://www.katakrak.net/sites/default/files/styles/event_thumbnail/public/events/lohitzune.jpg?itok=Tyz1NjDW\" alt=\"\" />","description":"<p>Con la autora.</p>\n","link":"<a href=\"http://katakrak.net/node/49528\">ver mas</a>"},{"title":"Cata de cerveza con Akui","fecha":"1447873200","id":"50182","imagen":"<img src=\"http://www.katakrak.net/sites/default/files/styles/medium/public/events/brauerei.jpeg?itok=Af5KULUc\" alt=\"\" />","thumbnail":"<img src=\"http://www.katakrak.net/sites/default/files/styles/event_thumbnail/public/events/brauerei.jpeg?itok=OFuo4hCE\" alt=\"\" />","description":"<p>Por 8\u20ac con picoteo.<br />\nEscribe a <a href=\"mailto:ardotegia@katakrak.net\">ardotegia@katakrak.net</a> o llama al 948 225520.</p>\n","link":"<a href=\"http://katakrak.net/node/50182\">ver mas</a>"},{"title":"Clase de yoga y ciclo menstrual","fecha":"1447952400","id":"48845","imagen":"<img src=\"http://www.katakrak.net/sites/default/files/styles/medium/public/events/yoga_4.jpg?itok=fspCzzyK\" alt=\"\" />","thumbnail":"<img src=\"http://www.katakrak.net/sites/default/files/styles/event_thumbnail/public/events/yoga_4.jpg?itok=F9HFu1Ib\" alt=\"\" />","description":"<p>La propuesta est\u00e1 articulada en diez sesiones con las que nos iremos familiarizando con posiciones f\u00edsicas, respiraciones y meditaciones concretas para cada fase del ciclo menstrual; con el sistema reproductor, el hormonal y el nervioso; con el suelo p\u00e9lvico.</p>\n<p>Hay dos sesiones cada uno de los d\u00edas: de 18:00 a 19:30 y de 20:00 a 21:30.</p>\n<p>Las sesiones tienen una duraci\u00f3n de dos horas: durante la primera, comenzamos con unos instantes de autopercepci\u00f3n, tomando conciencia de nuestra sensaciones, de nuestro estado y continuamos con un calentamiento que nos permite ir relajando y mimando nuestro cuerpo y calmando y centrando nuestra mente. A continuaci\u00f3n, realizamos ejercicios y posturas encaminadas a reequilibrar el sistema reproductor femenino, el hormonal, el nervioso, etc. Continuamos con un tiempo para la relajaci\u00f3n profunda y reparadora (fundamental, porque el estr\u00e9s y la ansiedad donde primero afectan es en el aparato reproductor) y un tiempo para la meditaci\u00f3n.</p>\n<p>Suponen la f\u00f3rmula m\u00e1s ajustada para familiarizarnos con los ciclos de la mujer y prevenir, o poner al d\u00eda, los s\u00edntomas y desequilibrios relacionados con la menstruaci\u00f3n, la fertilidad; porque ajustar la pr\u00e1ctica de yoga a la naturaleza femenina nos permite conocer y respetar nuestros ritmos, nuestras necesidades y cambios.</p>\n","link":"<a href=\"http://katakrak.net/node/48845\">ver mas</a>"},{"title":"Stamatis Karagiannopoulos: \u00bfQu\u00e9 est\u00e1 pasando en Grecia?","fecha":"1448035200","id":"50567","imagen":"<img src=\"http://www.katakrak.net/sites/default/files/styles/medium/public/events/dsc_8230.jpg?itok=kjch97cU\" alt=\"\" />","thumbnail":"<img src=\"http://www.katakrak.net/sites/default/files/styles/event_thumbnail/public/events/dsc_8230.jpg?itok=SysSGkBM\" alt=\"\" />","description":"<p>Miembro de la Corriente Marxista Internacional, y del Comit\u00e9 Central de Unidad Popular, el partido que se escindi\u00f3 de Syriza tras aceptar esta \u00faltima el rescate con condiciones de la Troika.</p>\n<p>Organizado por ATTAC Navarra-Nafarroa.</p>\n","link":"<a href=\"http://katakrak.net/node/50567\">ver mas</a>"},{"title":"Fiscalidad y lucha contra el fraude","fecha":"1448042400","id":"50440","imagen":"<img src=\"http://www.katakrak.net/sites/default/files/styles/medium/public/events/asambleaporelcambio.jpg?itok=d9Bk0UjE\" alt=\"\" />","thumbnail":"<img src=\"http://www.katakrak.net/sites/default/files/styles/event_thumbnail/public/events/asambleaporelcambio.jpg?itok=MmjtBnQl\" alt=\"\" />","description":"<p>Participantes mesa redonda:<br />\nJokin Castiella        (Geroa Bai)<br />\nMaiorga Ram\u00edrez         (EH Bildu)<br />\nF\u00e1tima Andreo             (Podemos)<br />\nJos\u00e9 Miguel Nuin         (Izquierda Ezkerra)</p>\n","link":"<a href=\"http://katakrak.net/node/50440\">ver mas</a>"},{"title":"Paul Valery \u00abEl cementerio marino\u00bb","fecha":"1448044200","id":"48360","imagen":"<img src=\"http://www.katakrak.net/sites/default/files/styles/medium/public/events/paul_valery.jpg?itok=iwWtodr2\" alt=\"\" />","thumbnail":"<img src=\"http://www.katakrak.net/sites/default/files/styles/event_thumbnail/public/events/paul_valery.jpg?itok=aZfEZOxT\" alt=\"\" />","description":"<p>Cita mensual del grupo de lectura de poes\u00eda La Casa Roja. An\u00edmate a leerlo y ven a charlar.</p>\n","link":"<a href=\"http://katakrak.net/node/48360\">ver mas</a>"},{"title":"Laurent Bonelli: Securocracia y \u00ablucha contra el terrorismo\u00bb","fecha":"1448100000","id":"50510","imagen":"<img src=\"http://www.katakrak.net/sites/default/files/styles/medium/public/events/bonelli.jpg?itok=T4nYkEgl\" alt=\"\" />","thumbnail":"<img src=\"http://www.katakrak.net/sites/default/files/styles/event_thumbnail/public/events/bonelli.jpg?itok=drTy2OrU\" alt=\"\" />","description":"<p>Maestro de conferencias de ciencias pol\u00edticas en la Universidad Paris X de Nanterre. Especialista en temas de seguridad urbana, vigilancia y lucha contra el terrorismo.<br />\nActo organizado por la fundaci\u00f3n Iratzar.</p>\n","link":"<a href=\"http://katakrak.net/node/50510\">ver mas</a>"},{"title":"Danza y g\u00e9nero","fecha":"1448119800","id":"50349","imagen":"<img src=\"http://www.katakrak.net/sites/default/files/styles/medium/public/events/ezpatadantza.jpg?itok=JXRMQ-Nx\" alt=\"\" />","thumbnail":"<img src=\"http://www.katakrak.net/sites/default/files/styles/event_thumbnail/public/events/ezpatadantza.jpg?itok=GWWOOqHj\" alt=\"\" />","description":"<p>Organizado por la Federaci\u00f3n de Dantzaris de Navarra.</p>\n","link":"<a href=\"http://katakrak.net/node/50349\">ver mas</a>"},{"title":"Desobedientzia: de la solidaridad al compromiso","fecha":"1448128800","id":"50379","imagen":"<img src=\"http://www.katakrak.net/sites/default/files/styles/medium/public/events/herri_harresia.jpg?itok=hU_VP8rk\" alt=\"\" />","thumbnail":"<img src=\"http://www.katakrak.net/sites/default/files/styles/event_thumbnail/public/events/herri_harresia.jpg?itok=1yJA64xv\" alt=\"\" />","description":"<p>Desde el inicio de la actual \"crisis\" econ\u00f3mica se han venido efectuando una serie de reformas estructurales con el objetivo de potenciar las pol\u00edticas neoliberales, favorecer el traspaso de los bienes p\u00fablicos a manos privadas y mantener los privilegios de las clases dominantes. La reforma constitucional, la reforma de la seguridad social, la reforma del estatuto de los trabajadores, la reforma educativa,....y ahora para proteger todas estas reformas que atentan contra los intereses de las clases populares se reforma el C\u00f3digo Penal criminalizando aun mas la respuesta de la sociedad. Un claro ejemplo de esta estrategia la podemos ver en la reforma del delito de \"desordenes p\u00fablicos\", donde se se amplian de manera considerables los supuestos que entrar\u00edan a formar parte de este delito y se incrementa la pena hasta 6 a\u00f1os de prisi\u00f3n, a dem\u00e1s se sancionar\u00e1 con penas-multas a quienes entren en entidades p\u00fablicas (como entidades bancarias) y alteren su funcionamiento, o quienes no se vayan cuando llegue la hora del cierre.<br />\nEn relaci\u00f3n con las \u00faltimas huelgas secundadas en Euskal Herria el balance total de detenidos, encausados, multados y condenados es enorme, solamente en Nafarroa hay un balance de 74 detenciones, 3 condenas firmes de 16 meses de c\u00e1rcel para tres personas y peticiones para otras cinco de 4 a\u00f1os de c\u00e1rcel y 5700\u20ac de multa. Y el pasado 10 de enero fueron juzgadas 18 personas integrantes de un piquete informativo en Gernika-Lumo. A estas 18 personas les piden 3 a\u00f1os y 9 meses de carcel y 6.000\u20ac de multa para cada una de ellas.<br />\nUn Juzgado de Bilbo ha impuesto una condena de a\u00f1o y tres meses de prisi\u00f3n para dos j\u00f3venes acusados de agredir a la Ertzaintza durante la huelga del 29M de 2012.</p>\n<p>Un activista vegano es detenido por los GAR el 22 de Junio del 2011 en una maniobra represiva , a nivel estatal, contra el movimiento de defensa de derechos animales. Despu\u00e9s de pasar 19 d\u00edas en prisi\u00f3n provisional se encuentra en libertad provisional con cargos a la espera de juicio.</p>\n","link":"<a href=\"http://katakrak.net/node/50379\">ver mas</a>"},{"title":"Daniel Jim\u00e9nez Franco \u00abTrampas y tormentos\u00bb","fecha":"1448301600","id":"49530","imagen":"<img src=\"http://www.katakrak.net/sites/default/files/styles/medium/public/events/danijimenezpic.jpeg?itok=m3fsSeIE\" alt=\"\" />","thumbnail":"<img src=\"http://www.katakrak.net/sites/default/files/styles/event_thumbnail/public/events/danijimenezpic.jpeg?itok=UX6Exk5g\" alt=\"\" />","description":"<p>El secuestro institucional parece perder protagonismo como herramienta de gobierno y la expulsi\u00f3n gana peso como mecanismo productor de penalidad. Ya no la expulsi\u00f3n a la c\u00e1rcel propia del estado penal neoliberal, sino una expulsi\u00f3n en sentido mucho m\u00e1s amplio, como l\u00f3gica constitutiva de una ecolog\u00eda del castigo impuesta bajo el actual r\u00e9gimen de acumulaci\u00f3n y desposesi\u00f3n.</p>\n","link":"<a href=\"http://katakrak.net/node/49530\">ver mas</a>"}];
  $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  } 
  $scope.logo = '<img class="pull-right" src="img/logo_katakrak.png">';
  $scope.hoy = [];
  $scope.esta_semana = [];
  $scope.agenda = [];
  
 $ionicLoading.show({
    templateUrl: 'templates/spinner.html'
  });
  $scope.tab_hoy = false;
      $scope.tab_semana = false;
  Actos.all().success(function(data) {
   
    angular.forEach(data, function(value, key) {
      
      var book_cat = ['31418', '31282', '31289'];
      if (book_cat.indexOf(value.event_tid.tid) > -1) {
        value.icon = "ion-ios-book";
      }
      var charla_cat = ['31771', '36044', '37379', '32792', '31317', '32292'];
      if (charla_cat.indexOf(value.event_tid.tid) > -1) {
        value.icon = 'ion-chatbubbles';
      }
      
      var gastro_cat = ['35887', '40762'];
      if (gastro_cat.indexOf(value.event_tid.tid) > -1) {
        value.icon = 'ion-beer';
      }
      
      var musica_cat = ['31321'];
      if (musica_cat.indexOf(value.event_tid.tid) > -1) {
        value.icon = 'ion-music-note';
      }
      
      var proyeccion_cat = ['31284'];
      if (proyeccion_cat.indexOf(value.event_tid.tid) > -1) {
        value.icon = 'ion-videocamera';
      }
     
      today = new Date();
      var weekno = today.getWeek();
      var dayno = today.getDayOfYear();
      
      value.fecha = parseInt(value.fecha) * 1000;
      if (Settings.getLang() == 'eus') {
        value.k = 'k';
      }
      var date = new Date(value.fecha);
      
      if (date.getDayOfYear() == dayno) {
        $scope.hoy.push(value);
        $scope.tab_hoy = true;
      }
      else if (date.getWeek() == weekno) {
        $scope.esta_semana.push(value);
        $scope.tab_semana = true;
      }
      else {
        $scope.tab_proximamente = true;
        $scope.agenda.push(value);
      }
      
    });
    $ionicLoading.hide()
  });
})

.controller('ActoCtrl', function($scope, $ionicModal, $stateParams, Actos, $ionicLoading, $cordovaSocialSharing, Settings) {
  $scope.logo = '<img class="pull-right" src="img/logo_katakrak.png">';
  $ionicLoading.show({
    templateUrl: 'templates/spinner.html'
  });
  $scope.acto = {};
  Actos.get($stateParams.actoId).success(function(data) {
    $scope.acto = data[0]; 
    if (Settings.getLang() == 'eus') {
      $scope.acto.k = 'k';
    }
    $scope.acto.fecha = parseInt($scope.acto.fecha) * 1000;
    $ionicLoading.hide();
    if (typeof window.plugin != 'undefined') {
      window.plugin.notification.local.isScheduled($scope.acto.id, function(isScheduled) {
      if (isScheduled) {
        $scope.acto.scheduled = true; 
      }
    });
  }
  });  
  //$scope.acto = {"title":"Lohitzune Zuloaga \u00abEl espejismo de la seguridad ciudadana\u00bb","fecha":"1447869600","id":"49528","imagen":"<img src=\"http://www.katakrak.net/sites/default/files/styles/medium/public/events/lohitzune.jpg?itok=QVHCD0sW\" alt=\"\" />","thumbnail":"<img src=\"http://www.katakrak.net/sites/default/files/styles/event_thumbnail/public/events/lohitzune.jpg?itok=Tyz1NjDW\" alt=\"\" />","description":"<p>Con la autora.</p>\n","link":"<a href=\"http://katakrak.net/node/49528\">ver mas</a>"};
  
  
  $scope.notification_options = [{id:1, name:"El mismo día"}, {id: 2, name:"El día anterior"}];
  $scope.settings = {time: 0};
   // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/addNotificationForm.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  
  $scope.addNotification = function(data) {
    if ($scope.settings.time == 0) {
      alert("Tienes que elegir una opción");
    }
    else {
      
    
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
    }
  };
  $scope.addNotificationForm = function() {
    $scope.modal.show();
  }
  
  $scope.closeModal = function() {
    $scope.modal.hide();
  }
  
  $scope.shareAnywhere = function() {
      $cordovaSocialSharing.share("", $scope.acto.title, "www/imagefile.png", "http://www.katakrak.net/"+Settings.getLang()+"/node/"+$scope.acto.id);
    }
})
//Identified user Simon
// ID 8b4aba43-f2f3-4c03-a2e7-b2c5a0b56b83
.controller('AccountCtrl', function($scope, $rootScope, $ionicUser, $ionicPush, Settings) {
  $scope.logo = '<img class="pull-right" src="img/logo_katakrak.png">';
  $scope.settings = {idioma: Settings.getLang()};
  console.log($scope.settings.idioma);
  $scope.changeLang = function() {
    console.log($scope.settings.idioma);
    Settings.setLang($scope.settings.idioma);
    //refresh the page so the changes are active
    window.location.reload(true);
  };
  
  $rootScope.$on('$cordovaPush:tokenReceived', function(event, data) {
    alert("Successfully registered token " + data.token + data.platform);
    console.log('Ionic Push: Got token ', data.token, data.platform);
    $scope.token = data.token;
  });

  // Identifies a user with the Ionic User service
  $scope.identifyUser = function() {
    console.log('Ionic User: Identifying with Ionic User service');

    var user = $ionicUser.get();
    if(!user.user_id) {
      // Set your user_id here, or generate a random one.
      user.user_id = $ionicUser.generateGUID();
    };

    // Add some metadata to your user object.
    angular.extend(user, {
      name: 'Ionitron',
      bio: 'I come from planet Ion'
    });

    // Identify your user with the Ionic User Service
    $ionicUser.identify(user).then(function(){
      $scope.identified = true;
      alert('Identified user ' + user.name + '\n ID ' + user.user_id);
    });
  };

  // Registers a device for push notifications and stores its token
  $scope.pushRegister = function() {
    console.log('Ionic Push: Registering user');

    // Register with the Ionic Push service.  All parameters are optional.
    $ionicPush.register({
      canShowAlert: true, //Can pushes show an alert on your screen?
      canSetBadge: true, //Can pushes update app icon badges?
      canPlaySound: true, //Can notifications play a sound?
      canRunActionsOnWake: true, //Can run actions outside the app,
      onNotification: function(notification) {
        // Handle new push notifications here
        alert(notification);
        return true;
      }
    });
  };
});

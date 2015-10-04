angular.module('starter.controllers').factory('Agenda', ['$resource',
	function($resource){
		return $resource('http://katakrak.net/rest/views/agenda_service/:nodeId',{nodeId:'@nid'});
	}]);
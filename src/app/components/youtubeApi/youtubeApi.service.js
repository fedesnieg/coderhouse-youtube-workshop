(function() {
  'use strict';

  angular
    .module('youtube')
    .factory('youtubeApi', youtubeApi);

  /** @ngInject */
  function youtubeApi($log, $http, $q, youtubeApiKey) {
    var apiHost = 'https://www.googleapis.com/youtube/v3';

    var service = {
      search: search,
      getRelated: getRelated,
      getVideoInformation: getVideoInformation
    };

    return service;

    function search(text) {

      if (!text) {
        return $q.reject("El campo texto es requerido para realizar una búsqueda.");
      }

      var params = {
        part: 'snippet',
        key: youtubeApiKey,
        q: text,
        type: 'video'
      };

      return $http.get(apiHost + '/search', {params: params})
      .then(function(response) {
          return response.data;
      }, function(error) {
          $log.error('Error: ' + angular.toJson(error.data, true));
      });
    }

    function getRelated(videoId) {

      if (!videoId) {
        return $q.reject("El campo videoId es requerido para obtener los videos relacionados.");
      }

      var params = {
        part: 'snippet',
        key: youtubeApiKey,
        type: 'video',
        relatedToVideoId: videoId
      };

      return $http.get(apiHost + '/search', {params: params})
      .then(function(response) {
          return response.data;
      }, function(error) {
          $log.error('Error: ' + angular.toJson(error.data, true));
      });
    }

    function getVideoInformation(videoId) {

      if (!videoId) {
        return $q.reject("El campo videoId es requerido para obtener los videos relacionados.");
      }

      var params = {
        part: 'snippet',
        key: youtubeApiKey,
        type: 'video',
        id: videoId
      };

      return $http.get('https://www.googleapis.com/youtube/v3/videos', {params: params})
      .then(function(response) {
          if(response && response.data && response.data.items && response.data.items.length)
            return response.data.items[0];
      }, function(error) {
          $log.error('Error: ' + angular.toJson(error.data, true));
      });
    }
  }
})();

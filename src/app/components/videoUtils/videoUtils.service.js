(function() {
  'use strict';

  angular
    .module('youtube')
    .factory('videoUtils', videoUtils);

  /** @ngInject */
  function videoUtils($log, favVids, watchedVids) {
    var service = {
      addFav: addFav,
      isInFav: isInFav,
      addToWatched: addToWatched,
      isInWatched: isInWatched
    };

    function addFav(videoId) {
      if(!isInFav(videoId))
        favVids.push(videoId);
    }

    function isInFav(videoId) {
      return favVids.indexOf(videoId) !== -1;
    }

    function addToWatched(videoId) {
      if(!isInWatched(videoId))
        watchedVids.push(videoId);
    }

    function isInWatched(videoId) {
      return watchedVids.indexOf(videoId) !== -1;
    }

    return service;
  }
})();

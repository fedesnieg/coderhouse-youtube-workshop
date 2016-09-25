(function() {
  'use strict';

  angular
    .module('youtube')
    .controller('SearchController', SearchController);

  /** @ngInject */
  function SearchController(searchList, $state, videoUtils) {
    var vm = this;

    vm.list = searchList.items;
    vm.videoUtils = videoUtils;

    vm.playVideo = function(videoId) {
      $state.go('player', { id: videoId });
    };
 }
})();

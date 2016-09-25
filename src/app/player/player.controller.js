(function() {
  'use strict';

  angular
    .module('youtube')
    .controller('PlayerController', PlayerController);

  /** @ngInject */
  function PlayerController($stateParams, youtubeApi, $state, videoUtils, toastr) {
    var vm = this;

    vm.videoId = $stateParams.id;
    vm.videoUtils = videoUtils;

    vm.isWatched = videoUtils.isInWatched(vm.videoId);

    vm.playVideo = function(videoId) {
      $state.go('player', { id: videoId });
    };

    vm.addToFav = function(videoId) {
      videoUtils.addFav(videoId);
      toastr.info("Has agregado el video a favoritos!");
    };

    activate();
    
    function activate() {
      videoUtils.addToWatched(vm.videoId);

      youtubeApi.getRelated(vm.videoId).then(function(relatedVideos){
        vm.relatedVideos = relatedVideos;
      });

     youtubeApi.getVideoInformation(vm.videoId).then(function(videoInformation){
        vm.videoInformation = videoInformation;
      }); 
    }
 }
})();

(function() {
  'use strict';

  angular
    .module('youtube')
    .directive('videoPlayer', videoPlayer);

  /** @ngInject */
  function videoPlayer() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/videoPlayer/videoPlayer.html',
      scope: {
          videoId: '='
      },
      link: linkFc
    };

    return directive;

    function linkFc(scope) {
      scope.getIframeSrc = function () {
        return 'https://www.youtube.com/embed/' + scope.videoId;
      };
    }
  }

})();

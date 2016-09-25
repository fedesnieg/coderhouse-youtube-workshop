(function() {
  'use strict';

  angular
    .module('youtube')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

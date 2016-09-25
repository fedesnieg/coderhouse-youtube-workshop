(function() {
  'use strict';

  angular
    .module('youtube')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($state) {
    var vm = this;

    vm.classAnimation = '';
    vm.search = search;
    
    activate();

    function activate() {
        vm.classAnimation = 'rubberBand';
    }

    function search() {
      $state.go('search', { text: vm.text });
    }
 }
})();

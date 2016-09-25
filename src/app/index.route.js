(function() {
  'use strict';

  angular
    .module('youtube')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      }).state('search', {
        url: '/search/:text',
        templateUrl: 'app/search/search.html',
        controller: 'SearchController',
        controllerAs: 'search',
        resolve:
        {
          searchList: function($stateParams, youtubeApi) {
            return youtubeApi.search($stateParams.text);
          }
        }
      }).state('player', {
        url: '/player/:id',
        templateUrl: 'app/player/player.html',
        controller: 'PlayerController',
        controllerAs: 'player'
      });

    $urlRouterProvider.otherwise('/');
  }

})();

angular.module('nc-wedding', [
  'ui.router',
  'nc-wedding.templates',
  'nc-wedding.nav'
])

.config(function($locationProvider, $stateProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home/home.template.html'
    })
    .state('itinerary', {
      url: '/itinerary',
      templateUrl: 'itinerary/itinerary.template.html'
    })
    .state('travel', {
      url: '/travel',
      templateUrl: 'travel/travel.template.html'
    })
    .state('activities', {
      url: '/activities',
      templateUrl: 'acivities/acivities.template.html'
    })
    .state('photos', {
      url: '/photos',
      templateUrl: 'photos/photos.template.html'
    })
    .state('registry', {
      url: '/registry',
      templateUrl: 'registry/registry.template.html'
    })
});

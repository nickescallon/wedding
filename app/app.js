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
      template: '<span>HOME</span'
    })
    .state('itinerary', {
      url: '/itinerary',
      template: '<span>itinerary</span'
    })
    .state('travel', {
      url: '/travel',
      template: '<span>travel</span'
    })
    .state('activities', {
      url: '/activities',
      template: '<span>activities</span'
    })
    .state('photos', {
      url: '/photos',
      template: '<span>photos</span'
    })
    .state('registry', {
      url: '/registry',
      template: '<span>registry</span'
    })
});

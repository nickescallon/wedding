angular.module('nc-wedding', [
  'ui.router',
  'nc-wedding.templates',
  'nc-wedding.nav'
])

.config(function($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);

  $urlRouterProvider.rule(function ($injector, $location) {
    var path = $location.path(), normalized = path.toLowerCase();
    if (path != normalized) {
      $location.replace().path(normalized);
    }
  });

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
    .state('safari', {
      url: '/safari',
      templateUrl: 'safari/safari.template.html'
    })
    .state('activities', {
      url: '/activities',
      templateUrl: 'activities/activities.template.html'
    })
    .state('photos', {
      url: '/photos',
      templateUrl: 'photos/photos.template.html'
    })
    .state('registry', {
      url: '/registry',
      templateUrl: 'registry/registry.template.html'
    })
    .state('rsvp', {
      url: '/rsvp',
      templateUrl: 'rsvp/rsvp.template.html'
    })
})

.run(function($rootScope, $window) {
  $rootScope.$on('$stateChangeStart', function() { $window.scrollTo(0,0) });
});

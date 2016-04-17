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
      controller: function($window) {
        $window.open('https://docs.google.com/forms/d/1h8t3fy5Q7ydP2E5o3dMzjWgARI6iNt8mqwVTbcTGgCM/viewform', '_self');
      }
    })
})

.run(function($rootScope, $window) {
  $rootScope.$on('$stateChangeStart', function() { $window.scrollTo(0,0) });
});

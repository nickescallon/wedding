angular
  .module('nc-wedding.nav', [])
  .component('ncNav', {
    templateUrl: 'nav/nav.template.html',
    controller: NavController
  });


function NavController($state) {
  this.routes = [
    'itinerary',
    'travel',
    'activities',
    'photos',
    'registry',
    'rsvp'
  ];

  this.go = function(stateName) {
    return $state.go(stateName);
  }
}

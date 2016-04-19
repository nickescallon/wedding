angular.module('nc-wedding')

.directive('kinetic', function() {
  return {
    restrict: 'A',
    link: function(scope, element) {
      $(element).kinetic();
    }
  }
});

(function(module) {
try {
  module = angular.module('nc-wedding.templates');
} catch (e) {
  module = angular.module('nc-wedding.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('nav/nav.template.html',
    '<div class="navbar navbar-inverse navbar-fixed-top">\n' +
    '  <div class="container">\n' +
    '\n' +
    '    <div class="navbar-header">\n' +
    '      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">\n' +
    '        <span class="icon-bar"></span>\n' +
    '        <span class="icon-bar"></span>\n' +
    '        <span class="icon-bar"></span>\n' +
    '      </button>\n' +
    '      <a class="navbar-brand" href="#">Escallucci</a>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="collapse navbar-collapse">\n' +
    '      <ul class="nav navbar-nav navbar-right">\n' +
    '        <li ng-repeat="route in $ctrl.routes" ui-sref-active="active">\n' +
    '          <a href ui-sref="{{route}}">\n' +
    '            {{::route}}\n' +
    '          </a>\n' +
    '        </li>\n' +
    '      </ul>\n' +
    '    </div>\n' +
    '\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();

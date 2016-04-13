(function(module) {
try {
  module = angular.module('nc-wedding.templates');
} catch (e) {
  module = angular.module('nc-wedding.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('activities/activities.template.html',
    'activities.template.html\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('nc-wedding.templates');
} catch (e) {
  module = angular.module('nc-wedding.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('itinerary/itinerary.template.html',
    '<div id="itinerary">\n' +
    '  <div class="wide"></div>\n' +
    '\n' +
    '  <div class="container-fluid">\n' +
    '    <div class="col-xs-12 text-center">\n' +
    '\n' +
    '      <div class="row">\n' +
    '        <div class="col-xs-3 col-sm-4 col-lg-5 line line-primary"></div>\n' +
    '        <h2 class="col-xs-6 col-sm-4 col-lg-2 text-center primary">Welcome</h2>\n' +
    '        <div class="col-xs-3 col-sm-4 col-lg-5 line line-primary"></div>\n' +
    '      </div>\n' +
    '\n' +
    '      <div class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '          <p>\n' +
    '            We\'re so excited to have you join us for our wedding in beautiful Stellenbosch, South Africa.\n' +
    '          </p>\n' +
    '\n' +
    '          <p>\n' +
    '            Outside of the wedding itself, we\'ve planned a few events for us to all enjoy in the days leading up to, and following the wedding day.\n' +
    '          </p>\n' +
    '          <p>\n' +
    '            We\'re planning on spending some time in Cape Town, hosting a classic south African Braai for the rehearsal dinner, and traveling\n' +
    '            closer to Johannesburg in order to spend a few nights on Safari. While we ask that you join us on October 9th and 10th for the rehearsal\n' +
    '            and the wedding, please feel free to opt in or out of any of the other planned activities.\n' +
    '          </p>\n' +
    '\n' +
    '          <p>\n' +
    '            We\'ve outlined the key dates below, and have more details the "Activities" page.\n' +
    '          </p>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '\n' +
    '      <!-- NEED TO DEFINE INVERSE CLASSES... #333333 BG and Gold text. Also add padding for every new "section" -->\n' +
    '      <div class="row inverse">\n' +
    '        <p>\n' +
    '          We\'re still working on finalizing our plans, but our <strong>tentative itinerary is currently:</strong>\n' +
    '        </p>\n' +
    '\n' +
    '        <div class="row">\n' +
    '          <div class="col-xs-offset-3 col-xs-2 text-right"><strong>Oct 4:</strong></div>\n' +
    '          <div class="col-xs-6 text-left">Depart Boston for Cape Town.</div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="row">\n' +
    '          <div class="col-xs-offset-3 col-xs-2 text-right"><strong>Oct 5-8:</strong></div>\n' +
    '          <div class="col-xs-6 text-left">Activities/Tourism in Cape Town.</div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="row">\n' +
    '          <div class="col-xs-offset-3 col-xs-2 text-right"><strong>Oct 9 - 10:</strong></div>\n' +
    '          <div class="col-xs-6 text-left">Drive to Stellenbosch for the wedding events and wine tastings.</div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="row">\n' +
    '          <div class="col-xs-offset-3 col-xs-2 text-right"><strong>Oct 11:</strong></div>\n' +
    '          <div class="col-xs-6 text-left">Fly to Johannesburg.</div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="row">\n' +
    '          <div class="col-xs-offset-3 col-xs-2 text-right"><strong>Oct 12 - 13:</strong></div>\n' +
    '          <div class="col-xs-6 text-left">Drive to Tau Game Lodge for Safari.</div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="row">\n' +
    '          <div class="col-xs-offset-3 col-xs-2 text-right"><strong>Oct 14:</strong></div>\n' +
    '          <div class="col-xs-6 text-left">Drive to Johannesburg and fly home.</div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('nc-wedding.templates');
} catch (e) {
  module = angular.module('nc-wedding.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('home/home.template.html',
    '<div id="home" class="wide">\n' +
    '  <div class="caption">\n' +
    '    <!-- <div class="col-sm-5 col-xs-3 line"><hr></div> -->\n' +
    '    <div class="col-xs-6 logo pull-right">Chiara & Nick</div>\n' +
    '    <!-- <div class="col-sm-5 col-xs-3 line"><hr></div> -->\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();

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
    '      <a class="navbar-brand" href ui-sref-active="active" ui-sref="home">Escallucci</a>\n' +
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

(function(module) {
try {
  module = angular.module('nc-wedding.templates');
} catch (e) {
  module = angular.module('nc-wedding.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('photos/photos.template.html',
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('nc-wedding.templates');
} catch (e) {
  module = angular.module('nc-wedding.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('travel/travel.template.html',
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('nc-wedding.templates');
} catch (e) {
  module = angular.module('nc-wedding.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('registry/registry.template.html',
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('nc-wedding.templates');
} catch (e) {
  module = angular.module('nc-wedding.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('activities/activities.template.html',
    '<div class="text-center">\n' +
    '  <h1>COMING SOON</h1>\n' +
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
    '<div id="home" class="page">\n' +
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
  $templateCache.put('itinerary/itinerary.template.html',
    '<div id="itinerary" class="page">\n' +
    '  <div class="wide"></div>\n' +
    '\n' +
    '  <div class="container-fluid">\n' +
    '    <div class="text-center">\n' +
    '\n' +
    '      <div class="row-fluid section primary">\n' +
    '        <div class="content">\n' +
    '          <div class="row">\n' +
    '            <div class="col-md-8 col-md-offset-2">\n' +
    '              <h3 class="text-center">WELCOME</h3>\n' +
    '              <div class="separator"></div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="row">\n' +
    '            <div class="col-xs-12">\n' +
    '              <p>\n' +
    '                We\'re so excited to have you join us for our wedding in beautiful Stellenbosch, South Africa.\n' +
    '              </p>\n' +
    '\n' +
    '              <p>\n' +
    '                Outside of the wedding itself, we\'ve planned a few events for us to all enjoy in the days leading up to, and following the wedding day.\n' +
    '              </p>\n' +
    '\n' +
    '              <p>\n' +
    '                We\'re planning on spending some time in Cape Town, hosting a classic south African Braai for the rehearsal dinner, and traveling\n' +
    '                closer to Johannesburg in order to spend a few nights on Safari. While we ask that you join us on October 9th and 10th for the rehearsal\n' +
    '                and the wedding, please feel free to opt in or out of any of the other planned activities.\n' +
    '              </p>\n' +
    '\n' +
    '              <p>\n' +
    '                We\'ve outlined the key dates below, and will soon have more details on the <a href ui-sref="activities">Activities</a> page.\n' +
    '              </p>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '\n' +
    '      <div class="row-fluid section inverse">\n' +
    '\n' +
    '        <div class="row">\n' +
    '          <div class="content">\n' +
    '            <div class="col-md-8 col-md-offset-2">\n' +
    '              <h3 class="text-center">KEY DATES</h3>\n' +
    '              <div class="separator"></div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="row">\n' +
    '\n' +
    '          <div class="col-lg-3 col-sm-6 text-center">\n' +
    '            <div class="box">\n' +
    '              <h4>OCT 9</h4>\n' +
    '              <p>\n' +
    '                  Check into your room at the <a href="//www.zorgvlietwines.com/" target="_blank">Zorgvliet Wine Estate</a>,\n' +
    '                  which is also where we\'ll be hosting the <strong>rehearsal dinner</strong> at 5:00pm.\n' +
    '              <p>\n' +
    '                The rehearsal dinner will be a traditional South Afrrican Braai.\n' +
    '              <p>\n' +
    '                <strong>Suggested Attire:</strong> Casual\n' +
    '            </div>\n' +
    '          </div>\n' +
    '\n' +
    '\n' +
    '          <div class="col-lg-3 col-sm-6 text-center">\n' +
    '            <div class="box">\n' +
    '              <h4>OCT 10</h4>\n' +
    '              <p>\n' +
    '                <strong>Wedding day!</strong> Please join us at <a href="//www.molenvliet.co.za/" target="_blank">MolenVliet</a> at 2:30pm. We\'ll be providing transportation to and from <a href="//www.zorgvlietwines.com/" target="_blank">Zorgvliet</a>, where you\'ll be staying.\n' +
    '              <p>\n' +
    '                <strong>Ceremony:</strong> 3:00pm\n' +
    '              <p>\n' +
    '                <strong>Reception:</strong> 5:30pm\n' +
    '              <p>\n' +
    '                <strong>Suggested Attire:</strong> Formal\n' +
    '            </div>\n' +
    '\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="col-lg-3 col-sm-6 text-center">\n' +
    '            <div class="box">\n' +
    '              <h4>OCT 11</h4>\n' +
    '              <p>\n' +
    '                If you\'re joining us for safari at the <a href="//www.taugamelodge.co.za/" target="_blank">Tau Game Lodge</a>,\n' +
    '                then today we\'ll be flying to Johannseburg, and immediately departing for the <a href="//www.sun-city-south-africa.com/">Sun City Resort.</a>\n' +
    '              <p>\n' +
    '                We\'ll be spending one night there.\n' +
    '              <p>\n' +
    '                Please check our <a href ui-sref="travel">Travel</a> section for suggested flights from Capetown to Johannesburg.\n' +
    '            </div>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="col-lg-3 col-sm-6 text-center">\n' +
    '            <div class="box">\n' +
    '              <h4>OCT 12</h4>\n' +
    '              <p>\n' +
    '                We\'ll be departing <a href="//www.sun-city-south-africa.com/">Sun City</a> for Safari at the <a href="//www.taugamelodge.co.za/" target="_blank">Tau Game Lodge</a>.\n' +
    '              <p>\n' +
    '                We\'ll be spending two nights at <a href="//www.taugamelodge.co.za/" target="_blank">Tau</a>.\n' +
    '            </div>\n' +
    '          </div>\n' +
    '\n' +
    '        </div>\n' +
    '      </div>\n' +
    '\n' +
    '      <div class="row-fluid section primary">\n' +
    '        <div class="content">\n' +
    '          <div class="row">\n' +
    '            <div class="col-md-8 col-md-offset-2">\n' +
    '              <h3 class="text-center">OUR ITINERARY</h3>\n' +
    '              <div class="separator"></div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="row">\n' +
    '            <div class="col-xs-12">\n' +
    '              <p>\n' +
    '                We\'re still working on finalizing our plans, but our <strong>tentative itinerary is currently:</strong>\n' +
    '              </p>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="row">\n' +
    '            <div class="col-xs-offset-3 col-xs-2 text-right"><strong>Oct 4:</strong></div>\n' +
    '            <div class="col-xs-6 text-left">Depart Boston for Cape Town.</div>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="row">\n' +
    '            <div class="col-xs-offset-3 col-xs-2 text-right"><strong>Oct 5-8:</strong></div>\n' +
    '            <div class="col-xs-6 text-left">Activities/Tourism in Cape Town.</div>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="row">\n' +
    '            <div class="col-xs-offset-3 col-xs-2 text-right"><strong>Oct 9 - 10:</strong></div>\n' +
    '            <div class="col-xs-6 text-left">Drive to Stellenbosch for the wedding events and wine tastings.</div>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="row">\n' +
    '            <div class="col-xs-offset-3 col-xs-2 text-right"><strong>Oct 11:</strong></div>\n' +
    '            <div class="col-xs-6 text-left">Fly to Johannesburg.</div>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="row">\n' +
    '            <div class="col-xs-offset-3 col-xs-2 text-right"><strong>Oct 12 - 13:</strong></div>\n' +
    '            <div class="col-xs-6 text-left">Drive to Tau Game Lodge for Safari.</div>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="row">\n' +
    '            <div class="col-xs-offset-3 col-xs-2 text-right"><strong>Oct 14:</strong></div>\n' +
    '            <div class="col-xs-6 text-left">Drive to Johannesburg and fly home.</div>\n' +
    '          </div>\n' +
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
    '<div class="text-center">\n' +
    '  <h1>COMING SOON</h1>\n' +
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
  $templateCache.put('registry/registry.template.html',
    '<div id="registry" class="page">\n' +
    '  <ul>\n' +
    '    <li>\n' +
    '      <a target="_blank"  href="//www.crateandbarrel.com/gift-registry/nicolas-escallon-and-chiara-castellucci/r5496614">\n' +
    '        <img src="/images/cb-logo.png"></img>\n' +
    '      </a>\n' +
    '    </li>\n' +
    '\n' +
    '    <li>\n' +
    '      <a target="_blank"  href="//www1.bloomingdales.com/registry/wedding/guest/?registryId=6560559">\n' +
    '        <img src="/images/bl-logo.png"></img>\n' +
    '      </a>\n' +
    '    </li>\n' +
    '    <li>\n' +
    '      <a target="_blank"  href="https://secure.williams-sonoma.com/registry/2lcbclwsvd/registry-list.html">\n' +
    '        <img src="/images/ws-logo.png"></img>\n' +
    '      </a>\n' +
    '    </li>\n' +
    '    <li>\n' +
    '      <a target="_blank"  href="https://www.amazon.com/gp/registry/wedding/I2IM8OFIT19K">\n' +
    '        <img src="/images/am-logo.png"></img>\n' +
    '      </a>\n' +
    '    </li>\n' +
    '  </ul>\n' +
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
  $templateCache.put('travel/travel.template.html',
    '<div id="travel" class="page">\n' +
    '  <div class="wide"></div>\n' +
    '\n' +
    '  <div class="container-fluid">\n' +
    '    <div class="text-center">\n' +
    '\n' +
    '      <div class="row-fluid section primary">\n' +
    '        <div class="content">\n' +
    '          <div class="row">\n' +
    '\n' +
    '            <div class="col-sm-8">\n' +
    '\n' +
    '              <div class="row">\n' +
    '                <div class="col-md-8 col-md-offset-2">\n' +
    '                  <h3 class="text-center">TRAVEL PLANS</h3>\n' +
    '                  <div class="separator"></div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '\n' +
    '              <p>\n' +
    '                In order to facilitate the many travel arrangments you\'ll need to make, we\'re working with a travel agent, Mary Wilkinson.\n' +
    '              </p>\n' +
    '\n' +
    '              <p>\n' +
    '                <strong>Please reach out to Mary as soon as possible</strong> so she can help you plan your trip.\n' +
    '              </p>\n' +
    '\n' +
    '              <p>\n' +
    '                If you plan on attending the Safari portion of the trip, please make sure to RSVP as soon as possible\n' +
    '                in order to guarantee a spot. We\'ll need to book these accomodations far in advance.\n' +
    '              </p>\n' +
    '\n' +
    '              <p>\n' +
    '                <a href="/rsvp" target="_blank" class="btn btn-default">Click Here to RSVP</a>\n' +
    '              </p>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="col-sm-4">\n' +
    '              <div class="row">\n' +
    '                <div class="col-md-8 col-md-offset-2">\n' +
    '                  <h3 class="text-center">TRAVEL AGENT</h3>\n' +
    '                  <div class="separator"></div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '\n' +
    '              <h4 class="text-primary">Mary Wilkinson</h4>\n' +
    '              <h4>\n' +
    '                <a href="mailto:mary@travelstudio.co.za">mary@travelstudio.co.za</a>\n' +
    '              </h4>\n' +
    '              <h4 class="text-primary">+27 012 3621806</h4>\n' +
    '            </div>\n' +
    '\n' +
    '          </div>\n' +
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
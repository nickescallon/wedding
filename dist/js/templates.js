(function(module) {
try {
  module = angular.module('nc-wedding.templates');
} catch (e) {
  module = angular.module('nc-wedding.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('activities/activities.template.html',
    '<div id="activities" class="page">\n' +
    '\n' +
    '  <div class="container-fluid">\n' +
    '    <div class="text-center">\n' +
    '\n' +
    '      <div class="row-fluid section primary">\n' +
    '        <div class="content">\n' +
    '          <div class="row">\n' +
    '            <div class="col-md-8 col-md-offset-2">\n' +
    '              <h3 class="text-center">Stay tuned for more information about what to do in Cape Town and Wine country...</h3>\n' +
    '              <!-- <div class="separator"></div> -->\n' +
    '            </div>\n' +
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
    '                We are so excited to have you join us for our wedding in beautiful Stellenbosch, South Africa.\n' +
    '              </p>\n' +
    '\n' +
    '              <p>\n' +
    '                We have planned a few events for us to all enjoy in the days leading up to, and following the wedding day.\n' +
    '              </p>\n' +
    '\n' +
    '              <p>\n' +
    '                We are planning on spending some time in Cape Town, hosting a classic South African braai for the rehearsal dinner, and traveling\n' +
    '                closer to Johannesburg in order to spend a few nights on <a href="" ui-sref="safari">Safari</a>. While we ask that you join us on October 9th and 10th for the rehearsal dinner and the wedding, please feel free to opt in or out of any of the other planned activities.\n' +
    '              </p>\n' +
    '\n' +
    '              <p>\n' +
    '                We have outlined the key dates below, and will soon have more details on the <a href ui-sref="activities">Activities</a> page.\n' +
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
    '          <div class="col-xs-12">\n' +
    '            <div class="row">\n' +
    '              <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 text-center box">\n' +
    '                <h4>OCT 9</h4>\n' +
    '\n' +
    '                <p><strong>Wine Country!</strong></p>\n' +
    '\n' +
    '                <p>\n' +
    '                  This will be a wonderful opportunity to visit many of the world class wineries in South Africa. Here is a list of our favorites:\n' +
    '                </p>\n' +
    '                <p>\n' +
    '                  <a href="http://www.delaire.co.za/" target="_blank">Graff Delaire</a>,\n' +
    '                  <a href="https://www.babylonstoren.com/" target="_blank">Babylonstoren</a>,\n' +
    '                  <a href="http://www.beauconstantia.com/" target="_blank">Beau Constantia</a>,\n' +
    '                  <a href="http://www.la-motte.com/" target="_blank">La Motte</a>,\n' +
    '                  <a href="http://www.virginlimitededition.com/en/mont-rochelle" target="_blank">Mont Rochelle</a>,\n' +
    '                  <a href="http://www.tokara.co.za/" target="_blank">Tokara</a>\n' +
    '                </p>\n' +
    '                <p>\n' +
    '                  Check into your room at the <a href="//www.zorgvlietwines.com/" target="_blank">Zorgvliet Wine Estate</a>. We will be hosting the <strong>rehearsal dinner</strong> at 5:00pm. The rehearsal dinner will be a traditional South African braai.\n' +
    '                </p>\n' +
    '\n' +
    '                  <strong>Suggested Attire:</strong> Smart / Casual\n' +
    '              </div>\n' +
    '\n' +
    '\n' +
    '              <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 text-center box">\n' +
    '                <h4>OCT 10</h4>\n' +
    '\n' +
    '                <p>\n' +
    '                  <strong>Wedding day at Molenvliet!</strong>\n' +
    '                </p>\n' +
    '                <p>\n' +
    '                  Transportation will be provided to and from <a href="//www.zorgvlietwines.com/" target="_blank">Zorgvliet</a>.\n' +
    '                </p>\n' +
    '                <p>\n' +
    '                  <strong>Ceremony:</strong> 3:00pm\n' +
    '                </p>\n' +
    '                <p>\n' +
    '                  <strong>Reception:</strong> 5:30pm\n' +
    '                </p>\n' +
    '                <p>\n' +
    '                  <strong>Suggested Attire:</strong> Cocktail\n' +
    '                </p>\n' +
    '              </div>\n' +
    '\n' +
    '              <!-- clear here on sm and md because of uneven column heights -->\n' +
    '              <div class="clearfix visible-md visible-sm"></div>\n' +
    '\n' +
    '              <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 text-center box">\n' +
    '                <h4>OCT 11</h4>\n' +
    '                <p>\n' +
    '                  If you’re joining us for the <a hreg ui-sref="safari">safari</a> at <a href="//www.taugamelodge.co.za/" target="_blank">Tau Game Lodge</a>, we will be flying to Johannesburg and immediately departing for the Sun City Resort.\n' +
    '                </p>\n' +
    '                <p>\n' +
    '                  We will be spending one night there.\n' +
    '                </p>\n' +
    '                <p>\n' +
    '                  Please check our <a href ui-sref="travel">travel</a> section for more information.\n' +
    '                </p>\n' +
    '              </div>\n' +
    '\n' +
    '              <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 text-center box">\n' +
    '                <h4>OCT 12</h4>\n' +
    '                <p>\n' +
    '                  We will be departing <a href="//www.sun-city-south-africa.com/" target="_blank">Sun City</a> for Safari at the <a href="//www.taugamelodge.co.za/" target="_blank">Tau Game Lodge</a>.\n' +
    '                </p>\n' +
    '                <p>\n' +
    '                  We will be spending two nights at <a href="//www.taugamelodge.co.za/" target="_blank">Tau</a>.\n' +
    '                </p>\n' +
    '              </div>\n' +
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
    '              <h3 class="text-center">CHIARA & NICO\'S ITINERARY</h3>\n' +
    '              <div class="separator"></div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="row">\n' +
    '            <div class="col-xs-12">\n' +
    '              <p>\n' +
    '                We are still working on finalizing our plans, but our <strong>tentative itinerary is currently:</strong>\n' +
    '              </p>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="row">\n' +
    '            <div class="col-xs-offset-1 col-xs-4 text-right"><strong>Oct 4:</strong></div>\n' +
    '            <div class="col-xs-6 text-left">Depart Boston for Cape Town.</div>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="row">\n' +
    '            <div class="col-xs-offset-1 col-xs-4 text-right"><strong>Oct 5-8:</strong></div>\n' +
    '            <div class="col-xs-6 text-left">Activities/Tourism in Cape Town.</div>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="row">\n' +
    '            <div class="col-xs-offset-1 col-xs-4 text-right"><strong>Oct 9 - 10:</strong></div>\n' +
    '            <div class="col-xs-6 text-left">Drive to Stellenbosch for the wedding events and wine tastings.</div>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="row">\n' +
    '            <div class="col-xs-offset-1 col-xs-4 text-right"><strong>Oct 11:</strong></div>\n' +
    '            <div class="col-xs-6 text-left">Fly to Johannesburg.</div>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="row">\n' +
    '            <div class="col-xs-offset-1 col-xs-4 text-right"><strong>Oct 12 - 13:</strong></div>\n' +
    '            <div class="col-xs-6 text-left">Drive to Tau Game Lodge for Safari.</div>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="row">\n' +
    '            <div class="col-xs-offset-1 col-xs-4 text-right"><strong>Oct 14:</strong></div>\n' +
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
    '      <i class="fa fa-bars navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"></i>\n' +
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
  $templateCache.put('photos/photos.template.html',
    '<div id="photos" class="page">\n' +
    '  <div class="wide">\n' +
    '    <div class="caption">\n' +
    '      <div class="col-xs-6 logo pull-right">Artist: Luca Callis</div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '  <div class="flex-row section primary bg-secondary">\n' +
    '\n' +
    '    <div class="flex-item">\n' +
    '      <img src="/images/photos/roofdeck.jpg"/>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="flex-item">\n' +
    '      <img src="/images/photos/kitchen.jpg"/>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="flex-item">\n' +
    '      <img src="/images/photos/lobster.jpg"/>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="flex-item">\n' +
    '      <img src="/images/photos/cottilion.jpg"/>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="flex-item">\n' +
    '      <img src="/images/photos/beso.jpg"/>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="flex-item">\n' +
    '      <img src="/images/photos/30th.jpg"/>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="flex-item">\n' +
    '      <img src="/images/photos/seapoint.jpg"/>\n' +
    '    </div>\n' +
    '\n' +
    '    <!-- <div class="flex-item">\n' +
    '      <img src="/images/photos/Luca.jpg"/>\n' +
    '      <div class="caption">\n' +
    '        <div class="col-xs-12 logo pull-right">Artist: Luca Callis</div>\n' +
    '      </div>\n' +
    '    </div> -->\n' +
    '\n' +
    '    <div class="flex-item">\n' +
    '      <img src="/images/photos/colombia.jpg"/>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="flex-item">\n' +
    '      <img src="/images/photos/hamilton.jpg"/>\n' +
    '    </div>\n' +
    '\n' +
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
  $templateCache.put('registry/registry.template.html',
    '<div id="registry" class="page">\n' +
    '  <ul>\n' +
    '    <li>\n' +
    '      <a target="_blank"  href="//www.crateandbarrel.com/gift-registry/nicolas-escallon-and-chiara-castellucci/r5496614">\n' +
    '        <img src="/images/registry/cb-logo.png"></img>\n' +
    '      </a>\n' +
    '    </li>\n' +
    '\n' +
    '    <li>\n' +
    '      <a target="_blank"  href="//www1.bloomingdales.com/registry/wedding/guest/?registryId=6560559">\n' +
    '        <img src="/images/registry/bl-logo.png"></img>\n' +
    '      </a>\n' +
    '    </li>\n' +
    '    <li>\n' +
    '      <a target="_blank"  href="https://secure.williams-sonoma.com/registry/2lcbclwsvd/registry-list.html">\n' +
    '        <img src="/images/registry/ws-logo.png"></img>\n' +
    '      </a>\n' +
    '    </li>\n' +
    '    <li>\n' +
    '      <a target="_blank"  href="https://www.amazon.com/gp/registry/wedding/I2IM8OFIT19K">\n' +
    '        <img src="/images/registry/am-logo.png"></img>\n' +
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
  $templateCache.put('rsvp/rsvp.template.html',
    '<div id="activities" class="page">\n' +
    '  <iframe src="https://docs.google.com/forms/d/1h8t3fy5Q7ydP2E5o3dMzjWgARI6iNt8mqwVTbcTGgCM/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>\n' +
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
    '                <div class="col-md-10 col-md-offset-1">\n' +
    '                  <h3 class="text-center">TRAVEL PLANS</h3>\n' +
    '                  <div class="separator"></div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '\n' +
    '              <p>\n' +
    '                In order to facilitate the many travel arrangments you\'ll need to make, we\'re working with a travel agent and family friend, Mary Wilkinson.\n' +
    '              </p>\n' +
    '\n' +
    '              <p>\n' +
    '                <strong>Please reach out to Mary as soon as possible</strong> so she can help you plan your accommodation for the wedding and safari. Mary may have access to discounted rates and can help you with any additional bookings (i.e. car rentals, tours, accommodation).\n' +
    '              </p>\n' +
    '\n' +
    '              <p>\n' +
    '                If you plan on attending the Safari portion of the trip, please make sure to RSVP as soon as possible\n' +
    '                in order to guarantee a spot. We\'ll need to book these accomodations far in advance.\n' +
    '              </p>\n' +
    '\n' +
    '              <p>\n' +
    '                <a href ui-sref="rsvp" class="btn btn-default">Click Here to RSVP</a>\n' +
    '              </p>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="col-sm-4">\n' +
    '              <div class="row">\n' +
    '                <div class="col-md-10 col-md-offset-1">\n' +
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
    '      <div class="row-fluid section inverse">\n' +
    '        <div class="content">\n' +
    '\n' +
    '           <div class="row">\n' +
    '            <div class="col-md-10 col-md-offset-1">\n' +
    '              <h3 class="text-center">WHERE TO STAY IN CAPE TOWN</h3>\n' +
    '              <div class="separator"></div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="row">\n' +
    '            <div class="col-xs-12">\n' +
    '              <p>\n' +
    '                Cape Town has many beautiful hotels - below is a short list of hotels that we recommend. Feel free to book your stay on line, or contact Mary for potential discounted rates. Individual homes can be rented online.\n' +
    '              </p>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '\n' +
    '        </div>\n' +
    '      </div>\n' +
    '\n' +
    '\n' +
    '      <div class="flex-row section primary bg-secondary">\n' +
    '\n' +
    '        <div class="flex-item">\n' +
    '          <a href="//www.presidenthotel.co.za/" target="_blank">\n' +
    '            <div class="row primary">\n' +
    '              <img class="img-responsive" src="/images/hotel/president.jpg"/>\n' +
    '              <div class="col-md-10 col-md-offset-1">\n' +
    '                <h3 class="text-center">President Hotel</h3>\n' +
    '                <div class="separator"></div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="row primary">\n' +
    '              <div class="col-xs-12">\n' +
    '\n' +
    '                <div class="row">\n' +
    '                  <div class="col-xs-3 text-right"><strong>Location:</strong></div>\n' +
    '                  <div class="col-xs-9 text-left">Bantry Bay</div>\n' +
    '                  <br>\n' +
    '                  <br>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="row">\n' +
    '                  <div class="col-xs-3 text-right"><strong>Rates:</strong></div>\n' +
    '                  <div class="col-xs-9 text-left">TBD</div>\n' +
    '                  <br>\n' +
    '                  <br>\n' +
    '                </div>\n' +
    '\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </a>\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '        <div class="flex-item">\n' +
    '          <a href="//www.radissonblu.com/en/hotel-capetown" target="_blank">\n' +
    '            <div class="row primary">\n' +
    '              <img class="img-responsive" src="/images/hotel/radisson.jpg"/>\n' +
    '              <div class="col-md-10 col-md-offset-1">\n' +
    '                <h3 class="text-center">Radisson Blu Hotel</h3>\n' +
    '                <div class="separator"></div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="row primary">\n' +
    '              <div class="col-xs-12">\n' +
    '\n' +
    '                <div class="row">\n' +
    '                  <div class="col-xs-3 text-right"><strong>Location:</strong></div>\n' +
    '                  <div class="col-xs-9 text-left">Waterfront</div>\n' +
    '                  <br>\n' +
    '                  <br>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="row">\n' +
    '                  <div class="col-xs-3 text-right"><strong>Rates:</strong></div>\n' +
    '                  <div class="col-xs-9 text-left">TBD</div>\n' +
    '                  <br>\n' +
    '                  <br>\n' +
    '                </div>\n' +
    '\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </a>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="flex-item">\n' +
    '          <a href="//www.12apostleshotel.com/" target="_blank">\n' +
    '            <div class="row primary">\n' +
    '              <img class="img-responsive" src="/images/hotel/12_apostles.jpg"/>\n' +
    '              <div class="col-md-10 col-md-offset-1">\n' +
    '                <h3 class="text-center">12 Apostles</h3>\n' +
    '                <div class="separator"></div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="row primary">\n' +
    '              <div class="col-xs-12">\n' +
    '\n' +
    '                <div class="row">\n' +
    '                  <div class="col-xs-3 text-right"><strong>Location:</strong></div>\n' +
    '                  <div class="col-xs-9 text-left">Bantry Bay</div>\n' +
    '                  <br>\n' +
    '                  <br>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="row">\n' +
    '                  <div class="col-xs-3 text-right"><strong>Rates:</strong></div>\n' +
    '                  <div class="col-xs-9 text-left">TBD</div>\n' +
    '                  <br>\n' +
    '                  <br>\n' +
    '                </div>\n' +
    '\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </a>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="flex-item">\n' +
    '          <a href="//peninsula.co.za/" target="_blank">\n' +
    '            <div class="row primary">\n' +
    '              <img class="img-responsive" src="/images/hotel/peninsula.jpg"/>\n' +
    '              <div class="col-md-10 col-md-offset-1">\n' +
    '                <h3 class="text-center">Peninsula Hotel</h3>\n' +
    '                <div class="separator"></div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="row primary">\n' +
    '              <div class="col-xs-12">\n' +
    '\n' +
    '                <div class="row">\n' +
    '                  <div class="col-xs-3 text-right"><strong>Location:</strong></div>\n' +
    '                  <div class="col-xs-9 text-left">Sea Point</div>\n' +
    '                  <br>\n' +
    '                  <br>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="row">\n' +
    '                  <div class="col-xs-3 text-right"><strong>Rates:</strong></div>\n' +
    '                  <div class="col-xs-9 text-left">$200 - $300/night</div>\n' +
    '                  <br>\n' +
    '                  <br>\n' +
    '                </div>\n' +
    '\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </a>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="flex-item">\n' +
    '          <a href="//www.airbnb.com/s/Cape-Town--South-Africa?s_tag=XJQxZgnP" target="_blank">\n' +
    '            <div class="row primary">\n' +
    '              <img class="img-responsive" src="/images/hotel/airbnb.jpg"/>\n' +
    '              <div class="col-md-10 col-md-offset-1">\n' +
    '                <h3 class="text-center">AirBnB</h3>\n' +
    '                <div class="separator"></div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="row primary">\n' +
    '              <div class="col-xs-12">\n' +
    '\n' +
    '                <div class="row">\n' +
    '                  <div class="col-xs-3 text-right"><strong>Location:</strong></div>\n' +
    '                  <div class="col-xs-9 text-left">All Over Cape Town</div>\n' +
    '                  <br>\n' +
    '                  <br>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="row">\n' +
    '                  <div class="col-xs-3 text-right"><strong>Rates:</strong></div>\n' +
    '                  <div class="col-xs-9 text-left">Variable</div>\n' +
    '                  <br>\n' +
    '                  <br>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="row">\n' +
    '                  <div class="col-xs-3 text-right"><strong>Notes:</strong></div>\n' +
    '                  <div class="col-xs-9 text-left">\n' +
    '                    <ul>\n' +
    '                      <li><p>Affordable</p></li>\n' +
    '                      <li><p>We suggest looking in Bantry Bay, Camps Bay, Seapoint, and Fresnaye</p></li>\n' +
    '                    </ul>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </a>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="flex-item">\n' +
    '          <a href="//www.property24.com/to-rent" target="_blank">\n' +
    '            <div class="row primary">\n' +
    '              <img class="img-responsive" src="/images/hotel/house.jpg"/>\n' +
    '              <div class="col-md-10 col-md-offset-1">\n' +
    '                <h3 class="text-center">House Rentals</h3>\n' +
    '                <div class="separator"></div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="row primary">\n' +
    '              <div class="col-xs-12">\n' +
    '\n' +
    '                <div class="row">\n' +
    '                  <div class="col-xs-3 text-right"><strong>Location:</strong></div>\n' +
    '                  <div class="col-xs-9 text-left">All Over Cape Town</div>\n' +
    '                  <br>\n' +
    '                  <br>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="row">\n' +
    '                  <div class="col-xs-3 text-right"><strong>Rates:</strong></div>\n' +
    '                  <div class="col-xs-9 text-left">Variable</div>\n' +
    '                  <br>\n' +
    '                  <br>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="row">\n' +
    '                  <div class="col-xs-3 text-right"><strong>Notes:</strong></div>\n' +
    '                  <div class="col-xs-9 text-left">\n' +
    '                    <ul>\n' +
    '                      <li><p>Affordable and Luxurious</p></li>\n' +
    '                      <li><p>We suggest looking in Bantry Bay, Camps Bay, Seapoint, and Fresnaye</p></li>\n' +
    '                    </ul>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </a>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="flex-item">\n' +
    '          <a href="//www.rhondasmanor.co.za/" target="_blank">\n' +
    '            <div class="row primary">\n' +
    '              <img class="img-responsive" src="/images/hotel/rhonda.jpg"/>\n' +
    '              <div class="col-md-10 col-md-offset-1">\n' +
    '                <h3 class="text-center">Rhonda\'s Manor</h3>\n' +
    '                <div class="separator"></div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="row primary">\n' +
    '              <div class="col-xs-12">\n' +
    '\n' +
    '                <div class="row">\n' +
    '                  <div class="col-xs-3 text-right"><strong>Location:</strong></div>\n' +
    '                  <div class="col-xs-9 text-left">Sea Point</div>\n' +
    '                  <br>\n' +
    '                  <br>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="row">\n' +
    '                  <div class="col-xs-3 text-right"><strong>Rates:</strong></div>\n' +
    '                  <div class="col-xs-9 text-left">$185 - $240/night</div>\n' +
    '                  <br>\n' +
    '                  <br>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="row">\n' +
    '                  <div class="col-xs-3 text-right"><strong>Notes:</strong></div>\n' +
    '                  <div class="col-xs-9 text-left">\n' +
    '                    <ul>\n' +
    '                      <li><p>We spent a week here in 2015 and it was fantastic.</p></li>\n' +
    '                      <li><p>Centrally located, with a parking garage.</p></li>\n' +
    '                      <li><p>Delicious home-made breakfast every morning</p></li>\n' +
    '                      <li><p>Minimum stay required</p></li>\n' +
    '                    </ul>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </a>\n' +
    '        </div>\n' +
    '\n' +
    '      </div> <!-- end flex row -->\n' +
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
  $templateCache.put('safari/safari.template.html',
    '<div id="safari" class="page">\n' +
    '  <div class="wide"></div>\n' +
    '\n' +
    '  <div class="container-fluid">\n' +
    '    <div class="text-center">\n' +
    '\n' +
    '      <div class="row-fluid section primary">\n' +
    '        <div class="content">\n' +
    '          <div class="row">\n' +
    '            <div class="col-md-8 col-md-offset-2">\n' +
    '              <h3 class="text-center">SAFARI</h3>\n' +
    '              <div class="separator"></div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="row">\n' +
    '            <div class="col-xs-12">\n' +
    '              <p>\n' +
    '                After the wedding, we\'ll be going on safari at the <a href="//www.taugamelodge.co.za/" target="_blank">Tau Game Lodge</a>.\n' +
    '              </p>\n' +
    '\n' +
    '              <p>\n' +
    '                Safari is our most highly recommended activity, espeicially if you\'re visiting South Africa for the first time. We hope\n' +
    '                you can join us!\n' +
    '              </p>\n' +
    '\n' +
    '              <p>\n' +
    '                We\'ll need to reserve our spots on safari <strong>ASAP</strong> so we\'ve asked you to confirm your interest in our <a href ui-sref="rsvp">RSVP</a>.\n' +
    '              </p>\n' +
    '\n' +
    '              <p>\n' +
    '                We anticitpate that the safari portion - including all transportation and meals etc - will cost ~ $1,000 per person. Please take some time to scroll through the details below.\n' +
    '              </p>\n' +
    '\n' +
    '              <p>\n' +
    '                Once everyone has confirmed their interest in safari via <a href ui-sref="rsvp">RSVP</a>, we will be making a non-refundable deposit for the group.\n' +
    '              </p>\n' +
    '\n' +
    '              <p>\n' +
    '                Stay tuned for further updates once the group size is confirmed.\n' +
    '              </p>\n' +
    '\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '\n' +
    '      <div class="row-fluid section inverse">\n' +
    '        <div class="row">\n' +
    '          <div class="col-xs-12">\n' +
    '            <p></p>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '\n' +
    '      <div kinetic class="section primary bg-secondary drag-row">\n' +
    '\n' +
    '\n' +
    '        <div class="flex-column text-center">\n' +
    '          <div><i class="fa fa-3x fa-bus"></i></div>\n' +
    '          <div>\n' +
    '            <p>First we will take a bus or rental cars to the airport from our hotel in wine country.</p>\n' +
    '            <br>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <i class="fa fa-3x fa-long-arrow-right"></i>\n' +
    '\n' +
    '        <div class="flex-column text-center">\n' +
    '          <div><i class="fa fa-3x fa-plane"></i></div>\n' +
    '          <div>\n' +
    '            <p>Fly to Johannesburg.</p>\n' +
    '            <p>\n' +
    '              ~ $75 - $150 per person\n' +
    '              <br>\n' +
    '              (depending on the group size)\n' +
    '            </p>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <i class="fa fa-3x fa-long-arrow-right"></i>\n' +
    '\n' +
    '        <div class="flex-column text-center">\n' +
    '          <div><i class="fa fa-3x fa-bus"></i></div>\n' +
    '          <div>\n' +
    '            <p>From the airport, we\'ll take another bus to the Sun City Resort</p>\n' +
    '            <p>~ $100 per person<br><strong>Covers all bus fees</strong></p>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <i class="fa fa-3x fa-long-arrow-right"></i>\n' +
    '\n' +
    '        <div class="flex-column text-center">\n' +
    '          <div><i class="fa fa-3x fa-bed"></i></div>\n' +
    '          <div>\n' +
    '            <p>We\'ll spend one night in Sun City, enjoying the resort and splitting up the travel</p>\n' +
    '            <p>~ $125 per person</p>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <i class="fa fa-3x fa-long-arrow-right"></i>\n' +
    '\n' +
    '        <div class="flex-column text-center">\n' +
    '          <div><i class="fa fa-3x fa-bus"></i></div>\n' +
    '          <div>\n' +
    '            <p>On the morning of the 12th, we\'ll head out to the Tau Game Lodge.</p>\n' +
    '            <p> </p>\n' +
    '            <br>\n' +
    '            <br>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <i class="fa fa-3x fa-long-arrow-right"></i>\n' +
    '\n' +
    '        <div class="flex-column text-center">\n' +
    '          <div><i class="fa fa-3x fa-paw"></i></div>\n' +
    '          <div>\n' +
    '            <p>\n' +
    '              We will spend 2 nights at Tau Game Lodge. The rate per person includes accommodation for 2 nights, 3 meals per day and 4 multi hour game drives.\n' +
    '            </p>\n' +
    '            <p>~ $560 per person</p>\n' +
    '            <br>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '        <!-- <div class="flex-item" style="max-width: 25%;">\n' +
    '          <div class="row primary">\n' +
    '            <img class="img-responsive" src="/images/sun_city.jpg"/>\n' +
    '            <div class="col-md-8 col-md-offset-2">\n' +
    '              <h3 class="text-center">Oct 11</h3>\n' +
    '              <div class="separator"></div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="primary flex-column text-center">\n' +
    '            <div><i class="fa fa-3x fa-bus"></i></div>\n' +
    '            <div><p>First we\'ll take a bus to the airport from our hotels in wine country.</p></div>\n' +
    '            <br>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="primary flex-column text-center">\n' +
    '            <div><i class="fa fa-3x fa-plane"></i></div>\n' +
    '            <div><p>Then we\'ll catch a flight to Johannesburg.</p></div>\n' +
    '            <br>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="primary flex-column text-center">\n' +
    '            <div><i class="fa fa-3x fa-bus"></i></div>\n' +
    '            <div>\n' +
    '              <p>\n' +
    '                Next we\'ll all get on a bus to <a href="//www.sun-city-south-africa.com/">Sun City</a>,\n' +
    '                a casino resort, and also the halfway point between Johannesrburg and Tau.\n' +
    '              </p>\n' +
    '              <p>We\'ll spend one night here enjoying the resort</p>\n' +
    '            </div>\n' +
    '            <br>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="flex-item" style="max-width: 25%;">\n' +
    '          <div class="row primary">\n' +
    '            <img class="img-responsive" src="/images/hotel_rhonda.jpg"/>\n' +
    '            <div class="col-md-8 col-md-offset-2">\n' +
    '              <h3 class="text-center">Oct 11</h3>\n' +
    '              <div class="separator"></div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '\n' +
    '\n' +
    '          <div class="primary text-center">\n' +
    '            <div><i class="fa fa-3x fa-bus"></i></div>\n' +
    '            <div><p>First we\'ll take a bus to the airport from our hotels in wine country.</p></div>\n' +
    '            <br>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="primary text-center">\n' +
    '            <div><i class="fa fa-3x fa-plane"></i></div>\n' +
    '            <div><p>Then we\'ll catch a flight to Johannesburg.</p></div>\n' +
    '            <br>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="primary text-center">\n' +
    '            <div><i class="fa fa-3x fa-bus"></i></div>\n' +
    '            <div>\n' +
    '              <p>\n' +
    '                Next we\'ll all get on a bus to <a href="//www.sun-city-south-africa.com/">Sun City</a>.\n' +
    '              </p>\n' +
    '            </div>\n' +
    '            <br>\n' +
    '          </div>\n' +
    '        </div> -->\n' +
    '\n' +
    '\n' +
    '      </div> <!-- end flex row -->\n' +
    '\n' +
    '      <div class="row-fluid section inverse">\n' +
    '        <div class="row">\n' +
    '          <div class="col-xs-12">\n' +
    '            <p> </p>\n' +
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

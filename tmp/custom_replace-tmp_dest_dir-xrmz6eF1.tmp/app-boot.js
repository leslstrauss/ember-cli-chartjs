/* jshint ignore:start */

define('ember-cli-chartjs/config/environment', ['ember'], function(Ember) {
  var prefix = 'ember-cli-chartjs';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("ember-cli-chartjs/tests/test-helper");
} else {
  require("ember-cli-chartjs/app")["default"].create({"name":"ember-cli-chartjs","version":"0.0.0.4656aa8c"});
}

/* jshint ignore:end */

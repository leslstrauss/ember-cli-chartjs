/* jshint ignore:start */

/* jshint ignore:end */

define('ember-cli-chartjs/adapters/application', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].FixtureAdapter.extend();

});
define('ember-cli-chartjs/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'ember-cli-chartjs/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  var App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('ember-cli-chartjs/components/ember-chart', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    tagName: "canvas",
    attributeBindings: ["width", "height"],

    renderChart: (function () {
      var context = this.get("element").getContext("2d");
      var data = this.get("data");
      var type = this.get("type").classify();
      var options = Ember['default'].merge({}, this.get("options"));

      var chart = new Chart(context)[type](data, options);

      if (this.get("legend")) {
        var legend = chart.generateLegend();
        this.$().parent().append(legend);
      }

      this.set("chart", chart);
    }).on("didInsertElement"),

    destroyChart: (function () {
      if (this.get("legend")) {
        this.$().parent().children("[class$=legend]").remove();
      }

      this.get("chart").destroy();
    }).on("willDestroyElement"),

    updateChart: (function () {
      try {
        var chart = this.get("chart");
        var data = this.get("data");
        var needUpdate = this.updateChartBasedOnType(data, chart);

        if (needUpdate) {
          chart.update();
        }
      } catch (error) {
        Ember['default'].warn("Dataset is not equal in structure as previous values. Rebuilding chart...");
        console.error(error);
        this.destroyChart();
        this.renderChart();
      }
    }).observes("data", "data.[]", "options"),

    updateChartBasedOnType: function (data, chart) {
      if (data.datasets) {
        return this.updateLinearCharts(data.datasets, chart);
      }
      if (Array.isArray(data)) {
        return this.updatePieCharts(data, chart);
      }
    },

    updateLinearCharts: function (datasets, chart) {
      datasets.forEach(function (dataset, i) {
        dataset.data.forEach(function (item, j) {
          item = item || 0;
          if (typeof chart.datasets[i] === "undefined") {
            chart.segments[j].value = item;
          } else {
            var dataSet = chart.datasets[i];

            if (typeof dataSet.bars !== "undefined") {
              chart.datasets[i].bars[j].value = item;
            } else {
              chart.datasets[i].points[j].value = item;
            }
          }
        });
      });
      return true;
    },

    updatePieCharts: function (data, chart) {
      var needUpdate = false;
      data.forEach(function (segment, i) {
        if (typeof chart.segments[i] !== "undefined") {
          segment.value = segment.value || 0;
          if (chart.segments[i].value !== segment.value) {
            chart.segments[i].value = segment.value;
            needUpdate = true;
          }
        } else {
          // there are now more segments than the chart knows about; add them
          chart.addData(segment, i, true);
          needUpdate = true;
        }
      });
      return needUpdate;
    }
  });

});
define('ember-cli-chartjs/controllers/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    pieValue1: 300,
    pieValue2: 50,
    pieValue3: 100,
    pieData: (function () {
      return [{
        value: parseInt(this.get("pieValue1")),
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
      }, {
        value: parseInt(this.get("pieValue2")),
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
      }, {
        value: parseInt(this.get("pieValue3")),
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
      }];
    }).property("pieValue1", "pieValue2", "pieValue3"),
    lineValue1: 65,
    lineValue2: 59,
    lineData: (function () {
      return {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
          label: "My First dataset",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [parseInt(this.get("lineValue1")), parseInt(this.get("lineValue2")), 80, 81, 56, 55, 40]
        }, {
          label: "My Second dataset",
          fillColor: "rgba(151,187,205,0.2)",
          strokeColor: "rgba(151,187,205,1)",
          pointColor: "rgba(151,187,205,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data: [28, 48, 40, 19, 86, 27, 90]
        }]
      };
    }).property("lineValue1", "lineValue2"),
    barData: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [{
        label: "My First dataset",
        fillColor: "rgba(220,220,220,0.5)",
        strokeColor: "rgba(220,220,220,0.8)",
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data: [65, 59, 80, 81, 56, 55, 40]
      }, {
        label: "My Second dataset",
        fillColor: "rgba(151,187,205,0.5)",
        strokeColor: "rgba(151,187,205,0.8)",
        highlightFill: "rgba(151,187,205,0.75)",
        highlightStroke: "rgba(151,187,205,1)",
        data: [28, 48, 40, 19, 86, 27, 90]
      }]
    },
    radarData: {
      labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
      datasets: [{
        label: "My First dataset",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: [65, 59, 90, 81, 56, 55, 40]
      }, {
        label: "My Second dataset",
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: [28, 48, 40, 19, 96, 27, 100]
      }]
    },
    polarAreaData: [{
      value: 300,
      color: "#F7464A",
      highlight: "#FF5A5E",
      label: "Red"
    }, {
      value: 50,
      color: "#46BFBD",
      highlight: "#5AD3D1",
      label: "Green"
    }, {
      value: 100,
      color: "#FDB45C",
      highlight: "#FFC870",
      label: "Yellow"
    }, {
      value: 40,
      color: "#949FB1",
      highlight: "#A8B3C5",
      label: "Grey"
    }, {
      value: 120,
      color: "#4D5360",
      highlight: "#616774",
      label: "Dark Grey"
    }]
  });

});
define('ember-cli-chartjs/controllers/index', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].ArrayController.extend({
    name: null,
    score: null,
    actions: {
      createPerson: function () {
        this.store.createRecord("person", {
          name: this.get("name"),
          hobby: this.get("hobby")
        }).save();

        this.setProperties({
          name: null,
          score: null
        });
      }
    }
  });

});
define('ember-cli-chartjs/initializers/app-version', ['exports', 'ember-cli-chartjs/config/environment', 'ember'], function (exports, config, Ember) {

  'use strict';

  var classify = Ember['default'].String.classify;

  exports['default'] = {
    name: "App Version",
    initialize: function (container, application) {
      var appName = classify(application.toString());
      Ember['default'].libraries.register(appName, config['default'].APP.version);
    }
  };

});
define('ember-cli-chartjs/initializers/export-application-global', ['exports', 'ember', 'ember-cli-chartjs/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    var classifiedName = Ember['default'].String.classify(config['default'].modulePrefix);

    if (config['default'].exportApplicationGlobal && !window[classifiedName]) {
      window[classifiedName] = application;
    }
  };

  exports['default'] = {
    name: "export-application-global",

    initialize: initialize
  };

});
define('ember-cli-chartjs/models/person', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var Person = DS['default'].Model.extend({
    name: DS['default'].attr("string"),
    hobby: DS['default'].attr("string")
  });

  Person.reopenClass({

    FIXTURES: [{
      id: "1",
      name: "leslie",
      hobby: "dancing"
    }, {
      id: "2",
      name: "nathan",
      hobby: "traveling"
    }]
  });

  exports['default'] = Person;

});
define('ember-cli-chartjs/router', ['exports', 'ember', 'ember-cli-chartjs/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route("charts");
  });

  exports['default'] = Router;

});
define('ember-cli-chartjs/routes/index', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function () {
      return this.store.find("person");
    }
  });

});
define('ember-cli-chartjs/templates/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
  /**/) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


    data.buffer.push("<header>\n  <div class=\"row\">\n    <div class=\"small-12 medium-12 large-12 columns\">\n      <h2><a href=\"index.html\">Peeps & Hobbies</a></h2>\n    </div>\n  </div>\n</header>\n<div class=\"section-headline\">\n  <div class=\"row\">\n    <div class=\"small-12 medium-12 large-12 large-centered columns\">\n      <h1></h1>\n      <h5></h5>\n    </div>\n  </div>\n</div>\n\n");
    stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n<div class=\"section-features-pricing section-bg-color1 \">\n  <div class=\"row\">\n    <div class=\"small-12 medium-6 large-6 columns\">\n      <div class=\"feature-box\">\n        <h4>Line Chart</h4> ");
    data.buffer.push(escapeExpression((helper = helpers['ember-chart'] || (depth0 && depth0['ember-chart']),options={hash:{
      'type': ("Line"),
      'data': ("lineData"),
      'width': (300),
      'height': (300)
    },hashTypes:{'type': "STRING",'data': "ID",'width': "INTEGER",'height': "INTEGER"},hashContexts:{'type': depth0,'data': depth0,'width': depth0,'height': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ember-chart", options))));
    data.buffer.push("\n      </div>\n    </div>\n    <div class=\"small-12 medium-6 large-6 columns\">\n      <div class=\"feature-box\">\n        <h4>Pie Chart</h4> ");
    data.buffer.push(escapeExpression((helper = helpers['ember-chart'] || (depth0 && depth0['ember-chart']),options={hash:{
      'type': ("Pie"),
      'data': ("pieData"),
      'width': (300),
      'height': (300)
    },hashTypes:{'type': "STRING",'data': "ID",'width': "INTEGER",'height': "INTEGER"},hashContexts:{'type': depth0,'data': depth0,'width': depth0,'height': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ember-chart", options))));
    data.buffer.push("\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"small-12 medium-6 large-6 columns\">\n      <div class=\"feature-box\">\n        <h3>Donut Chart</h3> ");
    data.buffer.push(escapeExpression((helper = helpers['ember-chart'] || (depth0 && depth0['ember-chart']),options={hash:{
      'type': ("Doughnut"),
      'data': ("pieData"),
      'width': (300),
      'height': (300)
    },hashTypes:{'type': "STRING",'data': "ID",'width': "INTEGER",'height': "INTEGER"},hashContexts:{'type': depth0,'data': depth0,'width': depth0,'height': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ember-chart", options))));
    data.buffer.push("\n      </div>\n    </div>\n    <div class=\"small-12 medium-6 large-6 columns\">\n      <div class=\"feature-box\">\n        <h3>Bar Chart</h3> ");
    data.buffer.push(escapeExpression((helper = helpers['ember-chart'] || (depth0 && depth0['ember-chart']),options={hash:{
      'type': ("Bar"),
      'data': ("barData"),
      'width': (300),
      'height': (300)
    },hashTypes:{'type': "STRING",'data': "ID",'width': "INTEGER",'height': "INTEGER"},hashContexts:{'type': depth0,'data': depth0,'width': depth0,'height': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ember-chart", options))));
    data.buffer.push("\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"small-12 medium-6 large-6 columns\">\n      <div class=\"feature-box\">\n        <h3>Radar Chart</h3> ");
    data.buffer.push(escapeExpression((helper = helpers['ember-chart'] || (depth0 && depth0['ember-chart']),options={hash:{
      'type': ("radar"),
      'data': ("radarData"),
      'width': (300),
      'height': (300)
    },hashTypes:{'type': "STRING",'data': "ID",'width': "INTEGER",'height': "INTEGER"},hashContexts:{'type': depth0,'data': depth0,'width': depth0,'height': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ember-chart", options))));
    data.buffer.push("\n      </div>\n    </div>\n    <div class=\"small-12 medium-6 large-6 columns\">\n      <div class=\"feature-box\">\n        <h3>Polar Area Chart</h3> ");
    data.buffer.push(escapeExpression((helper = helpers['ember-chart'] || (depth0 && depth0['ember-chart']),options={hash:{
      'type': ("polar area"),
      'data': ("polarAreaData"),
      'width': (300),
      'height': (300)
    },hashTypes:{'type': "STRING",'data': "ID",'width': "INTEGER",'height': "INTEGER"},hashContexts:{'type': depth0,'data': depth0,'width': depth0,'height': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ember-chart", options))));
    data.buffer.push("\n      </div>\n    </div>\n  </div>\n</div>\n\n<footer class=\"section-bg-color2\">\n  <div class=\"row\">\n    <div class=\"small-12 medium-12 large-12 columns\">\n      <ul>\n        <li>&copy; 2015 Leslie Strauss.</li>\n      </ul>\n    </div>\n  </div>\n</footer>\n\n");
    return buffer;
    
  });

});
define('ember-cli-chartjs/templates/index', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
  /**/) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

  function program1(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n        <span class=\"name\">");
    stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</span>\n        <hr>\n      ");
    return buffer;
    }

  function program3(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n        <span class=\"hobby\">");
    stack1 = helpers._triageMustache.call(depth0, "hobby", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</span>\n        <hr>\n      ");
    return buffer;
    }

    data.buffer.push("<div class=\"row\">\n  <div class=\"small-12 medium-12 large-12 columns\">\n    <form ");
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "createPerson", {hash:{
      'on': ("submit")
    },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
    data.buffer.push(">\n      <div class=\"small-12 medium-6 large-6 columns\">\n        <div class=\"input\">\n          <label for=\"name\">name:</label>\n          ");
    data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
      'name': ("name"),
      'value': ("name")
    },hashTypes:{'name': "STRING",'value': "ID"},hashContexts:{'name': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
    data.buffer.push("\n        </div>\n      </div>\n      <div class=\"small-12 medium-6 large-6 columns\">\n        <div class=\"input\">\n          <label for=\"hobby\">hobby:</label>\n          ");
    data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
      'name': ("hobby"),
      'value': ("hobby")
    },hashTypes:{'name': "STRING",'value': "ID"},hashContexts:{'name': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
    data.buffer.push("\n        </div>\n      </div>\n      <div class=\"small-6 medium-6 large-6 columns\">\n        <div class=\"actions\">\n          <button type=\"submit\">Submit</button>\n        </div>\n      </div>\n      <div class=\"small-6 medium-6 large-6 columns\">\n        <div class=\"actions\">\n          <button type=\"submit\">Submit</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n<br>\n<br>\n\n<div class=\"row\">\n  <div class=\"small-12 medium-6 large-6 columns\">\n    <ul>\n      ");
    stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    </ul>\n  </div>\n  <div class=\"small-12 medium-6 large-6 columns\">\n    <ul>\n      ");
    stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    </ul>\n  </div>\n</div>\n\n\n");
    return buffer;
    
  });

});
define('ember-cli-chartjs/tests/adapters/application.jshint', function () {

  'use strict';

  module('JSHint - adapters');
  test('adapters/application.js should pass jshint', function() { 
    ok(true, 'adapters/application.js should pass jshint.'); 
  });

});
define('ember-cli-chartjs/tests/app.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('app.js should pass jshint', function() { 
    ok(true, 'app.js should pass jshint.'); 
  });

});
define('ember-cli-chartjs/tests/components/ember-chart.jshint', function () {

  'use strict';

  module('JSHint - components');
  test('components/ember-chart.js should pass jshint', function() { 
    ok(true, 'components/ember-chart.js should pass jshint.'); 
  });

});
define('ember-cli-chartjs/tests/controllers/application.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/application.js should pass jshint', function() { 
    ok(true, 'controllers/application.js should pass jshint.'); 
  });

});
define('ember-cli-chartjs/tests/controllers/index.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/index.js should pass jshint', function() { 
    ok(true, 'controllers/index.js should pass jshint.'); 
  });

});
define('ember-cli-chartjs/tests/helpers/resolver', ['exports', 'ember/resolver', 'ember-cli-chartjs/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('ember-cli-chartjs/tests/helpers/resolver.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/resolver.js should pass jshint', function() { 
    ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('ember-cli-chartjs/tests/helpers/start-app', ['exports', 'ember', 'ember-cli-chartjs/app', 'ember-cli-chartjs/router', 'ember-cli-chartjs/config/environment'], function (exports, Ember, Application, Router, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('ember-cli-chartjs/tests/helpers/start-app.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/start-app.js should pass jshint', function() { 
    ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('ember-cli-chartjs/tests/models/person.jshint', function () {

  'use strict';

  module('JSHint - models');
  test('models/person.js should pass jshint', function() { 
    ok(true, 'models/person.js should pass jshint.'); 
  });

});
define('ember-cli-chartjs/tests/router.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('router.js should pass jshint', function() { 
    ok(true, 'router.js should pass jshint.'); 
  });

});
define('ember-cli-chartjs/tests/routes/index.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/index.js should pass jshint', function() { 
    ok(true, 'routes/index.js should pass jshint.'); 
  });

});
define('ember-cli-chartjs/tests/test-helper', ['ember-cli-chartjs/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('ember-cli-chartjs/tests/test-helper.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('test-helper.js should pass jshint', function() { 
    ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('ember-cli-chartjs/tests/unit/controllers/application.js-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("controller:application.js", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('ember-cli-chartjs/tests/unit/controllers/application.js-test.jshint', function () {

  'use strict';

  module('JSHint - unit/controllers');
  test('unit/controllers/application.js-test.js should pass jshint', function() { 
    ok(true, 'unit/controllers/application.js-test.js should pass jshint.'); 
  });

});
define('ember-cli-chartjs/tests/unit/controllers/person-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("controller:person", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('ember-cli-chartjs/tests/unit/controllers/person-test.jshint', function () {

  'use strict';

  module('JSHint - unit/controllers');
  test('unit/controllers/person-test.js should pass jshint', function() { 
    ok(true, 'unit/controllers/person-test.js should pass jshint.'); 
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

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
  require("ember-cli-chartjs/app")["default"].create({"LOG_ACTIVE_GENERATION":true,"LOG_VIEW_LOOKUPS":true,"name":"ember-cli-chartjs","version":"0.0.0.9899e1b6"});
}

/* jshint ignore:end */
//# sourceMappingURL=ember-cli-chartjs.map
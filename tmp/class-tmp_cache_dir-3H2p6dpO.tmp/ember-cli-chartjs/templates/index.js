define('ember-cli-chartjs/templates/index', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
  /**/) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


    data.buffer.push("<header>\n  <div class=\"row\">\n    <div class=\"small-12 medium-12 large-12 columns\">\n      <h2><a href=\"index.html\">People & Hobbies</a></h2>\n    </div>\n  </div>\n</header>\n\n<nav>\n  <div class=\"row\">\n    <div class=\"small-12 medium-12 large-12 columns\">\n      <ul>\n        <li><a href=\"index.html\" class=\"current\">Names</a>\n        </li>\n        <li><a href=\"about.html\">Hobbies</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<div class=\"section-hero section-bg-color1\">\n  <div class=\"row\">\n    <div class=\"small-12 medium-6 large-6 columns\">\n      <h3>Names</h3>\n      <ul>\n        <li>");
    data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
      'value': ("pieValue1"),
      'type': ("number")
    },hashTypes:{'value': "ID",'type': "STRING"},hashContexts:{'value': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
    data.buffer.push("</li>\n        <li>");
    data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
      'value': ("pieValue2"),
      'type': ("number")
    },hashTypes:{'value': "ID",'type': "STRING"},hashContexts:{'value': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
    data.buffer.push("</li>\n        <li>");
    data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
      'value': ("pieValue3"),
      'type': ("number")
    },hashTypes:{'value': "ID",'type': "STRING"},hashContexts:{'value': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
    data.buffer.push("</li>\n      </ul>\n    </div>\n    <div class=\"small-12 medium-6 large-6 columns\">\n      <h3>Hobbies</h3>\n\n    </div>\n  </div>\n</div>\n<div class=\"section-features-pricing section-bg-color1 \">\n  <div class=\"row\">\n    <div class=\"small-12 medium-12 large-12 columns\">\n      <h3>Charts & Graphs</h3>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"small-12 medium-12 large-12 columns\">\n      <div class=\"feature-box\">\n        <h4>Line Chart</h4>\n        ");
    data.buffer.push(escapeExpression((helper = helpers['ember-chart'] || (depth0 && depth0['ember-chart']),options={hash:{
      'type': ("Line"),
      'data': ("lineData"),
      'width': (600),
      'height': (200)
    },hashTypes:{'type': "STRING",'data': "ID",'width': "INTEGER",'height': "INTEGER"},hashContexts:{'type': depth0,'data': depth0,'width': depth0,'height': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ember-chart", options))));
    data.buffer.push("\n        <ul>\n          <li>");
    data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
      'value': ("lineValue1"),
      'type': ("number")
    },hashTypes:{'value': "ID",'type': "STRING"},hashContexts:{'value': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
    data.buffer.push("</li>\n          <li>");
    data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
      'value': ("lineValue2"),
      'type': ("number")
    },hashTypes:{'value': "ID",'type': "STRING"},hashContexts:{'value': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
    data.buffer.push("</li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"small-12 medium-4 large-4 columns\">\n      <div class=\"feature-box\">\n        <h4><i class=\"fa fa-laptop fa-lg fa-fw\"></i> Feature Two</h4>\n        <p>Donec congue sapien sed dui accum san, vel ultri cies purus tempor. Aenean egestas rhoncus ornare tempor.</p>\n      </div>\n    </div>\n    <div class=\"small-12 medium-4 large-4 columns\">\n      <div class=\"feature-box\">\n        <h4><i class=\"fa fa-plus-square fa-lg fa-fw\"></i> Feature Three</h4>\n        <p>Donec congue sapien sed dui accum san, vel ultri cies purus tempor. Aenean egestas rhoncus ornare tempor.</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"small-12 medium-4 large-4 columns\">\n      <div class=\"feature-box\">\n        <h4><i class=\"fa fa-bolt fa-lg fa-fw\"></i> Feature Four</h4>\n        <p>Donec congue sapien sed dui accum san, vel ultri cies purus tempor. Aenean egestas rhoncus ornare tempor.</p>\n      </div>\n    </div>\n    <div class=\"small-12 medium-4 large-4 columns\">\n      <div class=\"feature-box\">\n        <h4><i class=\"fa fa-certificate fa-lg fa-fw\"></i> Feature Five</h4>\n        <p>Donec congue sapien sed dui accum san, vel ultri cies purus tempor. Aenean egestas rhoncus ornare tempor.</p>\n      </div>\n    </div>\n    <div class=\"small-12 medium-4 large-4 columns\">\n      <div class=\"feature-box\">\n        <h4><i class=\"fa fa-terminal fa-lg fa-fw\"></i> Feature Six</h4>\n        <p>Donec congue sapien sed dui accum san, vel ultri cies purus tempor. Aenean egestas rhoncus ornare tempor.</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"small-12 medium-4 large-4 columns\">\n      <div class=\"feature-box pricing\">\n        <h4>Pricing Table 1</h4>\n        <ul>\n          <li>Lorem ipsum dolor sit amet</li>\n          <li>Sed interdum tincidunt nibh</li>\n          <li>Et vehicula metus malesuada eget</li>\n        </ul>\n        <a href=\"#\" class=\"button round\">Buy Now</a>\n      </div>\n    </div>\n    <div class=\"small-12 medium-4 large-4 columns\">\n      <div class=\"feature-box pricing\">\n        <h4>Pricing Table 2</h4>\n        <ul>\n          <li>Lorem ipsum dolor sit amet</li>\n          <li>Sed interdum tincidunt nibh</li>\n          <li>Et vehicula metus malesuada eget</li>\n        </ul>\n        <a href=\"#\" class=\"button round\">Buy Now</a>\n      </div>\n    </div>\n    <div class=\"small-12 medium-4 large-4 columns\">\n      <div class=\"feature-box pricing\">\n        <h4>Pricing Table 3</h4>\n        <ul>\n          <li>Lorem ipsum dolor sit amet</li>\n          <li>Sed interdum tincidunt nibh</li>\n          <li>Et vehicula metus malesuada eget</li>\n        </ul>\n        <a href=\"#\" class=\"button round\">Buy Now</a>\n      </div>\n    </div>\n    <p class=\"pricing-footer p-small\"><em>Lorem ipsum dolor sit amet consectetur adipiscing elit posuere magna neque</em>\n    </p>\n  </div>\n</div>\n<div class=\"section-features-pricing section-bg-color1 \">\n  <div class=\"row\">\n    <div class=\"small-12 medium-4 large-4 columns\">\n      <div class=\"feature-box\">\n        <h3>Pie Chart</h3> ");
    data.buffer.push(escapeExpression((helper = helpers['ember-chart'] || (depth0 && depth0['ember-chart']),options={hash:{
      'type': ("Pie"),
      'data': ("pieData"),
      'width': (200),
      'height': (200)
    },hashTypes:{'type': "STRING",'data': "ID",'width': "INTEGER",'height': "INTEGER"},hashContexts:{'type': depth0,'data': depth0,'width': depth0,'height': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ember-chart", options))));
    data.buffer.push("\n      </div>\n    </div>\n    <div class=\"small-12 medium-4 large-4 columns\">\n      <div class=\"feature-box\">\n        <h3>Donut Chart</h3> ");
    data.buffer.push(escapeExpression((helper = helpers['ember-chart'] || (depth0 && depth0['ember-chart']),options={hash:{
      'type': ("Doughnut"),
      'data': ("pieData"),
      'width': (200),
      'height': (200),
      'legend': (true)
    },hashTypes:{'type': "STRING",'data': "ID",'width': "INTEGER",'height': "INTEGER",'legend': "BOOLEAN"},hashContexts:{'type': depth0,'data': depth0,'width': depth0,'height': depth0,'legend': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ember-chart", options))));
    data.buffer.push("\n      </div>\n    </div>\n    <div class=\"small-12 medium-4 large-4 columns\">\n      <div class=\"feature-box\">\n        <h3>Line Chart</h3> ");
    data.buffer.push(escapeExpression((helper = helpers['ember-chart'] || (depth0 && depth0['ember-chart']),options={hash:{
      'type': ("Line"),
      'data': ("lineData"),
      'width': (600),
      'height': (200)
    },hashTypes:{'type': "STRING",'data': "ID",'width': "INTEGER",'height': "INTEGER"},hashContexts:{'type': depth0,'data': depth0,'width': depth0,'height': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ember-chart", options))));
    data.buffer.push("\n      </div>\n    </div>\n    <row>\n      <div class=\"small-12 medium-4 large-4 columns\">\n        <div class=\"feature-box\">\n          <h3>Line Chart Update</h3> ");
    data.buffer.push(escapeExpression((helper = helpers['ember-chart'] || (depth0 && depth0['ember-chart']),options={hash:{
      'type': ("Line"),
      'data': ("lineData"),
      'width': (600),
      'height': (200)
    },hashTypes:{'type': "STRING",'data': "ID",'width': "INTEGER",'height': "INTEGER"},hashContexts:{'type': depth0,'data': depth0,'width': depth0,'height': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ember-chart", options))));
    data.buffer.push("\n          <ul>\n            <li>");
    data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
      'value': ("lineValue1"),
      'type': ("number")
    },hashTypes:{'value': "ID",'type': "STRING"},hashContexts:{'value': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
    data.buffer.push("</li>\n            <li>");
    data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
      'value': ("lineValue2"),
      'type': ("number")
    },hashTypes:{'value': "ID",'type': "STRING"},hashContexts:{'value': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
    data.buffer.push("</li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"small-12 medium-4 large-4 columns\">\n        <div class=\"feature-box\">\n          <h3>Bar Chart</h3> ");
    data.buffer.push(escapeExpression((helper = helpers['ember-chart'] || (depth0 && depth0['ember-chart']),options={hash:{
      'type': ("Bar"),
      'data': ("barData"),
      'width': (600),
      'height': (200)
    },hashTypes:{'type': "STRING",'data': "ID",'width': "INTEGER",'height': "INTEGER"},hashContexts:{'type': depth0,'data': depth0,'width': depth0,'height': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ember-chart", options))));
    data.buffer.push("\n        </div>\n      </div>\n      <div class=\"small-12 medium-4 large-4 columns\">\n        <div class=\"feature-box\">\n          <h3>Radar Chart</h3> ");
    data.buffer.push(escapeExpression((helper = helpers['ember-chart'] || (depth0 && depth0['ember-chart']),options={hash:{
      'type': ("radar"),
      'data': ("radarData"),
      'width': (400),
      'height': (400)
    },hashTypes:{'type': "STRING",'data': "ID",'width': "INTEGER",'height': "INTEGER"},hashContexts:{'type': depth0,'data': depth0,'width': depth0,'height': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ember-chart", options))));
    data.buffer.push("\n        </div>\n      </div>\n      <div class=\"small-12 medium-4 large-4 columns\">\n        <div class=\"feature-box\">\n          <h3>Polar Area Chart</h3> ");
    data.buffer.push(escapeExpression((helper = helpers['ember-chart'] || (depth0 && depth0['ember-chart']),options={hash:{
      'type': ("polar area"),
      'data': ("radarData"),
      'width': (400),
      'height': (400)
    },hashTypes:{'type': "STRING",'data': "ID",'width': "INTEGER",'height': "INTEGER"},hashContexts:{'type': depth0,'data': depth0,'width': depth0,'height': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ember-chart", options))));
    data.buffer.push("\n        </div>\n      </div>\n  </div>\n</div>\n\n<footer class=\"section-bg-color2\">\n  <div class=\"row\">\n    <div class=\"small-12 medium-12 large-12 columns\">\n      <ul>\n        <li>&copy; 2015 Leslie Strauss.</li>\n      </ul>\n    </div>\n  </div>\n</footer>\n\n");
    return buffer;
    
  });

});
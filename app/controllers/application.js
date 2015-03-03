import Ember from 'ember';

export default Ember.Controller.extend({
  myRenderOptions: {
    "height": 400,
    "width": "100%",
    "events": {
      node_click: function(p) {
        console.log(p);
      }
    }
  },
  myChartData: {
    "type": "line",
    "title": {
      "text": "Average Metric"
    },
    "series": [{
      "values": [69, 68, 54, 48, 70, 74, 98, 70, 72, 68, 49, 69]
    }, {
      "values": [51, 53, 47, 60, 48, 52, 75, 52, 55, 47, 60, 48]
    }]
  },
  myThemeData: {
    "palette": {
      "line": [
        ["#ffffff", "#196eed", "#196eed", "#196eed"],
        ["#ffffff", "#d94530", "#d94530", "#d94530"],
        ["#ffffff", "#fdb82b", "#fdb82b", "#fdb82b"],
        ["#ffffff", "#159755", "#159755", "#159755"],
        ["#ffffff", "#8e8e8e", "#8e8e8e", "#8e8e8e"]
      ]
    },
    "graph": {
      "background-color": "#f9f9f9",
      "border-color": "#ddd",
      "border-width": "1px",
      "border-style": "solid",
      "border-radius": 5
    }
  }
});

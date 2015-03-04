import Ember from 'ember';

export default Ember.Controller.extend({
  pieValue1: 300,
  pieValue2: 50,
  pieValue3: 100,
  pieData: function () {
    return [{
      value: parseInt(this.get('pieValue1')),
      color: "#3F7CAC",
      highlight: "#3F7CAC",
      label: "Red"
    }, {
      value: parseInt(this.get('pieValue2')),
      color: "#6A5D7B",
      highlight: "#6A5D7B",
      label: "Green"
    }, {
      value: parseInt(this.get('pieValue3')),
      color: "#597322",
      highlight: "#597322",
      label: "Yellow"
    }];
  }.property('pieValue1', 'pieValue2', 'pieValue3'),
  lineValue1: 65,
  lineValue2: 59,
  lineValue3: 13,
  lineData: function () {
    return {
      labels: ["Soccer", "Dancing", "Art", "Reading", "Sleeping", "Fargo", "Picnic"],
      datasets: [{
        label: "My First dataset",
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "#6A5D7B",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: [parseInt(this.get('lineValue1')), parseInt(this.get('lineValue2')), parseInt(this.get('lineValue3')), 80, 81, 56, 55, 40, 12, 90]
      }, {
        label: "My Second dataset",
        fillColor: "rgba(151,187,205,0.3)",
        strokeColor: "#3F7CAC",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: [28, 48, 40, 19, 86, 27, 90]
      }, {
        label: "My Third dataset",
        fillColor: "rgba(151,187,205,0.4)",
        strokeColor: "rgba(151,187,20,1)",
        pointColor: "rgba(15,187,205,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: [38, 18, 60, 89, 12, 24, 64]
      }]
    };
  }.property('lineValue1', 'lineValue2', 'lineValue3'),
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
    labels: ["Soccer", "Dancing", "Art", "Reading", "Sleeping", "Fargo", "Picnic"],
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
      color: "#3F7CAC",
      highlight: "#3F7CAC",
      label: "Red"
    }, {
      value: 50,
      color: "#597322",
      highlight: "#597322",
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
    }

  ]
});


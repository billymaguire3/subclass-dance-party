// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  // this.hello();
  // push the dancer into the datncer array
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
  this.step();

};

// Convert from Functional Instantiation to Pseudoclassical

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};


makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function(space) {

  var styleSettings = {
    top: 500,
    left: space,
  };

  this.$node.css(styleSettings);

};
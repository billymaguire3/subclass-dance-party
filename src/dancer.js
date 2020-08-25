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


// use jQuery to create an HTML <span> tag
// makeDancer.prototype.$node = $('<span class="dancer"></span>');
//to pseudoclassical


makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

// moved into prototype
// dancer.step();


makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function(dancerArray) {
  // for(var i = 0; i < dancerArray.length; i++) {
  //   $(`"${dancerArray[i]}"`).css({"left":"2000px"});
  alert('Works!');
};



// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body




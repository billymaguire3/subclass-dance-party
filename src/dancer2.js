var dancer2 = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = this.step;
  this.$node.addClass('dancer2').prepend('<img class="dancer2" src="virus.png"/>');


};

dancer2.prototype = Object.create(makeDancer.prototype);
dancer2.prototype.constructor = dancer2;


dancer2.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  this.$node.toggle('dancer2');
  // this.$node.toggleClass('dancer2');
};



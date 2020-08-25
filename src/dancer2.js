var dancer2 = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = this.step;
  this.$node.addClass('dancer2');
};

dancer2.prototype = Object.create(makeDancer.prototype);
dancer2.prototype.constructor = dancer2;

dancer2.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  this.$node.toggle();
};



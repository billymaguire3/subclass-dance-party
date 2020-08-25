var dancer3 = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = this.step;
  this.$node.addClass('dancer3');
};

dancer3.prototype = Object.create(makeDancer.prototype);
dancer3.prototype.constructor = dancer3;

dancer3.prototype.step = function () {
  makeDancer.prototype.step.call(this);

  this.$node.toggle();
};

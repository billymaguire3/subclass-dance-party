const dancer3 = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = this.step();
  this.$node = $('<span class="dancer3"></span>');
};

dancer3.prototype = Object.create(makeDancer.prototype);
dancer3.prototype.constructor = dancer3;

dancer3.prototype.step = function () {
  makeDacner.prototype.step.call(this);

  this.$node.toggle();
};

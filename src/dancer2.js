const dancer2 = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = this.step();
  this.$node = $('<span class="dancer2"></span>');
};

dancer2.prototype = Object.create(makeDancer.prototype);
dancer2.prototype.constructor = dancer2;

dancer2.prototype.step = function () {
  makeDancer.prototype.step.call(this);

  this.$node.toggle();
};

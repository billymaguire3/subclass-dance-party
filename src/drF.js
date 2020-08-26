var dancer4 = function (top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);

  // this.oldStep = this.step;

  this.$node.addClass('dancer4').prepend('<img class="dancer4" src="blank.png"/>');

};

dancer4.prototype = Object.create(makeDancer.prototype);
dancer4.prototype.constructor = dancer4;
var dancer3 = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = this.step;
  this.randomDancer = this.randomDancer.bind(this);
  this.$node.addClass('dancer3').prepend(`"${this.randomDancer()}"`);
};

dancer3.prototype = Object.create(makeDancer.prototype);
dancer3.prototype.constructor = dancer3;

dancer3.prototype.step = function () {
  makeDancer.prototype.step.call(this);

  // this.$node.toggle();
};

dancer3.prototype.randomDancer = function() {
  var imagesArray = ['haz1.png', 'haz2.png', 'haz3.png', 'sanitizer.png'];

  var randomNumber = function() {
    return Math.floor(Math.random() * Math.floor(4));
  };
  var image = (`<img class="dancer3" src="${imagesArray[randomNumber()]}" />`);
  return image;
};
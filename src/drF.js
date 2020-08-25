var dancer4 = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = this.step;
  this.randomDancer = this.randomDancer.bind(this);
  this.$node.addClass('dancer4').prepend(`"${this.randomDancer()}"`);
};

dancer4.prototype = Object.create(makeDancer.prototype);
dancer4.prototype.constructor = dancer4;

dancer4.prototype.step = function () {
  makeDancer.prototype.step.call(this);

  this.$node.toggle();
};

dancer4.prototype.randomDancer = function() {
  var imagesArray = ['haz2.jpg', 'haz1.png', 'haz3.png', 'virus.png'];

  var randomNumber = function() {
    return Math.floor(Math.random() * Math.floor(4));
  };
  var image = (`<img class="dancer4" src="${imagesArray[randomNumber()]}" />`);
  return image;
};
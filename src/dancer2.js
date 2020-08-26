var dancer2 = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = this.step;
  this.$node.addClass('dancer2').prepend(`"${this.randomDancer()}"`);
  this.scaleX = 1;

};

dancer2.prototype = Object.create(makeDancer.prototype);
dancer2.prototype.constructor = dancer2;


dancer2.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  this.scaleX = this.scaleX === 1 ? -1 : 1;

  this.$node.css({'transform': 'scaleX(' + this.scaleX + ')'});

  // this.$node.toggleClass('dancer2');

};

dancer2.prototype.randomDancer = function() {



  var imagesArray = ['virus.png', 'virus2.png', 'virus3.png'];

  var randomNumber = function() {
    return Math.floor(Math.random() * Math.floor(3));
  };
  var image = (`<img class="dancer2" src="${imagesArray[randomNumber()]}" />`);
  return image;
};
//http://animejs.com/documentation/#CSStransforms
const CSStransforms = anime({
  //just a regular css selector
  targets: '#tunnel circle',
  scale: 1.1,
  // this alternates so it returns to beginning from the end
  direction: 'alternate',
  // it loops over and over
  loop: true,
  duration:250,
  // easing allows us to add a bit more character to our animations,
  // rather than just being linear
  easing: 'easeInOutCubic',
  // we can apply delay as a static value
  // when we use it as a function, it loops through every single item
  //delay: 1000
  // delay: function(el, i, l) {
  //   console.log(el, i, l); // element itself, index and the length
  //   return i * 50;
  // }
  delay: (el,i)=> i*50
});

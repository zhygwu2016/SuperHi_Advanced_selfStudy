//http://animejs.com/documentation/#CSStransforms

// we want to duplicate our crosses content 10 times
const duplicateHtml = (element, quantity) => {
  const content = element.innerHTML;
  const newContent = new Array(quantity).fill(element.innerHTML).join('');
  //console.log(crosses);
  element.innerHTML = newContent;
};

// we duplicate the content 10 times using our new fancy function
const crosses = document.querySelector('#crosses');
duplicateHtml(crosses, 10);

// we duplicate the dots 40 times
duplicateHtml(document.querySelector('#dots'), 40);

const allDots = document.querySelectorAll('#dots .dot');
// dots animation
// here we animate each dot separately by looping through
// and running anime on each individual one
allDots.forEach(dot =>{
  //console.log(dot);
  anime({
    targets: dot,
    rotate: (el, i) => anime.random(90, 360),
    delay: (el, i) => anime.random(0, 500),
    duration: (el, i) => anime.random(250, 750),
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate',
    autoplay: true
  });
});

// we want to create 20 dots
duplicateHtml(document.querySelector('#circles'), 20);
anime({
  targets: '#circles .dot',
  // when we use an array it runs through each property in order
  scale: [0, 1.2],
  delay: (el, i) => i * 100,
  duration: 250,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
});



// Rotating crosses animation
anime({
  targets: '#crosses path',
  rotate: '1turn',
  delay: (el, i) => i * 100,
  duration: 1200,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
});



// 左上角
anime({
  targets: '.conveyor',
  // we only want to move it left by half of its width
  translateX: '-50%',
  duration: 1500,
  loop: true,
  // remove the default easing effect to keep it consistently smooth
  easing: 'linear'
});

anime({
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


// https://codepen.io/juliangarnier/pen/ZeEpgd
const zigZagPath = document.querySelector('#zigzag path');
// setDashoffset figures out how long our path is
const zigZagoffset = anime.setDashoffset(zigZagPath);
// we then set that back onto the path element
zigZagPath.setAttribute('stroke-dashoffset', zigZagoffset);
anime({
  targets: zigZagPath,
  strokeDashoffset: [zigZagoffset, 0],
  duration: 3000,
  delay: anime.random(0, 2000),
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine',
  autoplay: true
});

//wave animation. we duplicate the same code (pretty much) for the wave
const wave = document.querySelector('#wave path');
const waveOffset = anime.setDashoffset(wave);
wave.setAttribute('stroke-dashoffset', waveOffset);
anime({
  targets: wave,
  strokeDashoffset: [waveOffset, 0],
  duration: 2000,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
});


// Flashing rectangles animation
anime({
  targets: '.flash',
  // we put the colors into an array and grab each one by its index
  backgroundColor: (el, i) => ['#fff636', '#cb89fc', '#fc3035', '#77ebfd'][i],
  // apply a random delay to each one
  delay: (el, i) => anime.random(50, 100),
  duration: 500,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
});


// animation for our squares
anime({
  targets: '#squares rect',
  // we need to force the translate position to center the squares
  translateX: ['-50%', '-50%'],
  // we’re not actually animating them, it’s a bit of a hack
  translateY: ['-50%', '-50%'],
//   animate rotation from 45 to 0 to -45
  rotate: [45, 0, -45],
  // delay each one incrementally by 100ms
  delay: (el, i) => 100 * i,
  duration: (el, i) => 750,
  loop: true,
  easing: 'easeInOutSine',
  direction: 'alternate'
});

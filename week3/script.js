//http://animejs.com/documentation/#CSStransforms

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

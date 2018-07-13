// we want to duplicate our crosses content 10 times
const duplicateHtml = (element, quantity) => {
  const newContent = new Array(quantity).fill(element.innerHTML).join('')
  element.innerHTML = newContent
}

// we duplicate the content 10 times using our new fancy function
duplicateHtml(document.querySelector('#crosses'), 10)
anime({
  targets: '#crosses path',
  rotate: '1turn',
  delay: (el, i, l) => i * 100,
  duration: 1200,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})

anime({
  // just a regular css selector
  targets: '#tunnel circle',
  // here we scale it up by 20%
  scale: 1.1,
  // this alternates so it returns to beginning from the end
  direction: 'alternate',
  // it loops over and over
  loop: true,
  duration: 250,
  // easings allow us to add a bit more character to our
  // animations, rather than them just being linear
  easing: 'easeInOutSine',
  // we can apply a delay as a static value as well as a function
  // when we use it as a function, it loops through every single item
  // and gives us the element itself, the index and the length
  delay: (el, index) => index * 50
})

// here we set up the conveyor effect
anime({
  targets: '.conveyor',
  // we only want to move it left by half of its width
  translateX: '-50%',
  duration: 1500,
  loop: true,
  // remove the default easing effect to keep it consistently smooth
  easing: 'linear'
})

const zigZagPath = document.querySelector('#zigzag path')
// setDashoffset figures out how long our path is
const zigZagOffset = anime.setDashoffset(zigZagPath)
// we then set that back onto the path element
zigZagPath.setAttribute('stroke-dashoffset', zigZagOffset)
anime({
  targets: zigZagPath,
  strokeDashoffset: [zigZagOffset, 0],
  duration: 3000,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})

// we duplicate the same code (pretty much) for the wave
const wavePath = document.querySelector('#wave path')
const waveOffset = anime.setDashoffset(wavePath)
wavePath.setAttribute('stroke-dashoffset', waveOffset)
anime({
  targets: wavePath,
  strokeDashoffset: [0, waveOffset],
  duration: 2000,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})

// we duplicate the dots 40 times 
duplicateHtml(document.querySelector('#dots'), 40)

const allDots = document.querySelectorAll('#dots .dot')
// here we animate each dot separately by looping through
// and running anime on each individual one
allDots.forEach(dot => {
  anime({
    targets: dot,
    // gives us a random rotation
    rotate: (el, i) => anime.random(90, 360),
    // random duration
    duration: (el, i) => anime.random(250, 750),
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate'
  });
});

// we want to create 20 dots
duplicateHtml(document.querySelector('#circles'), 20)
anime({
  targets: '#circles .dot',
  // when we use an array it runs through each property in order
  scale: [0, 1.2],
  delay: (el, i) => i * 100,
  duration: 250,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})

// our flashes animation
anime({
  targets: '#flashes .flash',
  // we put the colors into an array and grab each one by its index
  backgroundColor: (el, i) => ['#fff636', '#cb89fc', '#fc3035', '#77ebfd'][i],
  // apply a random delay to each one
  delay: (el, i) => anime.random(50, 100),
  duration: 500,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})

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
})
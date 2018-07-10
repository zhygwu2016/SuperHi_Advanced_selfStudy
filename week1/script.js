function makeMarquee(){
  const title = 'FIFTY Music Festival — November 10–12, Desert Valley';

  // an array is a list of things

  // here we make a new empty array with 50 spaces in it
  // then we fill it with the text from our title (50 times)
  // we then join them all together as one text string using a ' — '
  const marqueeText = new Array(50).fill(title).join(' — ');

  // 1. we want to grab our .marquee span form the html
  // 2. we want to set our repeating title as the content
  // !!! querySelector and querySelectorAll are the same as $ in jQuery
  const marquee = document.querySelector('.marquee span');
  marquee.innerHTML = marqueeText;
  //$('.marquee span').html(marqueeText);
  console.log(marquee);
}

// here we actually run our makeMarquee function
makeMarquee();


// circles animation using js
// https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
// here we grab all our the .circles from the html
const circles = document.querySelectorAll('.circle');
// circles returns us an array so we need to loop through it
// inside of the forEach we get access to each individual element
// along with its index
circles.forEach(function(circle, index){
//circles.forEach((circle, index) => {      //latest js
  // in here we get access to each one as 'circle'
  //console.log(circle);
  circle.animate([
    // keyframes
    { transform: 'scale(1)' },
    { transform: 'scale(1.2)' },
    { transform: 'scale(1)' },
  ], {
    // timing options
    delay: 300 * index,
    // here we use the index to create a staggered animation delay
    duration: 3000,
    iterations: Infinity
  });
});

// 上面的初步原型：
// document.querySelector(".shape").animate([
//   // keyframes
//   { transform: 'scale(1)' },
//   { transform: 'scale(1.2)' },
//   { transform: 'scale(1)' },
// ], {
//   // timing options
//   duration: 3000,
//   iterations: Infinity
// });

// 解释：
// $('button').html('hello');与document.querySelectorAll('button')innerHtml('hello')有不同，后者只一次
// right:
//document.querySelectorAll('button').forEach(function(thing){
//  thing.innerHTML('hello');
//})
//document.querySelectorAll('button').forEach(function(thing,index){
//  console.log(index);
//  thing.innerHTML('hello');
//})


// random function
function random(min,max)
{
  return Math.floor(Math.random()*(max-min+1)+min);
}


// similar as .circle, the animation which makes .squiggle roate
const squiggles = document.querySelectorAll('.squiggle');

squiggles.forEach(function(squiggle, index){
  // gets a random number between 0 and 45 using the random function
  const randomNumber = random(0,45);
  // create a bit of randomness for our animation delay

  squiggle.animate([
    // keyframes
    { transform: 'rotate(0)' },
    // here we join random number into our rotate property
    { transform: 'rotate(' + randomNumber + 'deg)' },
    //{ transform: `rotate(${randomNumber}deg)` }, //another latest way
    { transform: 'rotate(0)' },
  ], {
    // timing options
    delay: 300 * index,
    duration: 5000,
    iterations: Infinity
  });
});

// What’s the arrow thing about?
// // in older javascript we’d write
// ['lawrence', 'rik'].forEach(function(person) {
//   // do something with each person ('rik' and 'lawrence')
// })
//
// // in modern javascript we can write
// ['lawrence', 'rik'].forEach(person => {
//   // do something with each person
// })

// Joining strings together in modern Javascript
// // in older javascript we would write
// var name = 'lawrence'
// var age = 26
// var profile = name + ' is ' + age
//
// // in modern javascript we can write
// const name = 'lawrence'
// const age = 26
// const profile = `${name} is ${age}`

// !!! USING GITHUB LIBRARY !!!
// here we want to detect when our .section enters the viewport
// when it does, we want to add a class of 'in-viewport', and
// when it exits we want to remove it again
// BASIC:
// inView('.someSelector')
//     .on('enter', doSomething)
//     .on('exit', el => {
//         el.style.opacity = 0.5;
//     });
inView('.section')
    .on('enter', section =>{
      section.classList.add('in-viewport');
      // classList.add is the same as jQuery’s .addClass() method
      // but the vanilla javascript version
    })
    .on('exit', section => {
      section.classList.remove('in-viewport');
    });

// here we set the class to add only once we have scrolled 0.2 of
// our section into the viewport
// (This from the Github)
inView.threshold(0.3);


// 1. we want to select all of our sections and loop through them
// 2. in each section we want to grab the artists and shapes
// 3. for both of these we want to add transition-delay effects
// 4. we want to make sure our shapes only fade in after our artists
const sections = document.querySelectorAll('.section');

sections.forEach((section,index)=>{
  // here we use querySelectorAll on our 'section' to only
	// find elements inside of our section vs. our entire page
  const artists = section.querySelectorAll('.lineup li');
  const shapes = section.querySelectorAll('.shape');
  console.log(artists,shapes);

  artists.forEach((artist,index)=>{
    const delay = index*100;
    artist.style.transitionDelay = `${delay}ms`; //delay+'ms'
  });

  shapes.forEach((shape,index)=>{
    // we are setting our delay up to only start once all of our
    // artists have faded in, using the .length property
    const delay = (artists.length + index)*100; //delay, after 'artists'
    shape.style.transitionDelay = `${delay}ms`;
  });
});


// 1. whenever we click a .js-scroll link, we want to run a function
// 2. we want to stop the link from jumping straight to our section (its default behaviour)
// 3. we want to find out the href attribute, and then grab that element
// 4. then scroll to it using scrollIntoView
const scrollLinks = document.querySelectorAll('.js-scroll');

scrollLinks.forEach(link => {
  // addEventListener is just the same as jQuery’s .on()
    // $(link).on('click',function(){
    // });
  // we can listen for events on elements and then run a function
  link.addEventListener('click', (event)=>{
    // using the event keyword we get access to a snapshot of what
    // happened when we clicked on our link

    // this is equivalent to return false in jQuery
    // it will block the default browser behaviour of the link jumping to the href attribute
    event.preventDefault();

    // here we grab the href attribute from our link
    //$(link).attr('href');
    const href = link.getAttribute('href');
    //console.log(href);
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth'
    });
  });

});

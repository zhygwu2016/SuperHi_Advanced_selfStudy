// https://davidwalsh.name/fetch
// "Handling JSON" transparent
fetch('https://api.giphy.com/v1/gifs/search?api_key=p2ZiUHjtY2nMVqWKkKm1FgeEW3CI6IlS&q=doggo&limit=50&offset=0&rating=PG-13&lang=en')
  // we use .then() to handle the response
  .then( response => {
	// here we need to convert our response to json
	return response.json();
}).then( json => {  // we use .then() to handle the response
	// json is a big piece of json data that we can then work with
  const gif = json.data[0];
  // here we look inside of the the first result and grab
  // the original mp4 src
  const src = gif.images.original.mp4;
	//console.log(src);

  // createElement lets us create html elements inside of js
  const video = document.createElement('video');
  // here we can set attributes onto our created element using the dot notation
  video.src = src;
  video.autoplay = true;
  video.loop = true;
  console.log(video);

  // here we grab our video element and then append our newly created video to it
  const videosEl = document.querySelector('.videos');
  videosEl.appendChild(video);

})

.catch(error=>{
  // lastly we can use .catch() to do something in case our fetch fails
});

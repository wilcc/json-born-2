# JSON Born 2


### Your Task

Make our little users manipulation app a `json-server` back end with a really REALLY basic browser front end.


### Background

Our last JSON project used `fs`, which allowed us to set up a back-end where we read the local file and decided what to do with it. Some examples:

* If we got a GET request to the `users` route, we ran `console.log` for all users.
* If we got a GET request to the `users 2` route, we found the user with that `index` and ran console log on it.
* If we got a POST request to `friends 3` with a name, we made a new friend object with that name and attached it to the user object at that `index`.

This time, our back end will be run by the pre-configured `json-server` library. It looks at the `db.json` file and maps out routes based on that. Since we'll have a `users` key in our JSON file, and all of our objects in that array will have an `id` property, it will set up two basic routes:

1. `/users`, which is for all users.
2. `/users/[id]`, which applies to just the user with that `id` property.

And it will also set up different actions for each of those routes. For example:

* If we send a `GET` request to `/users/[id]`, we'll get only that user.
* If we send a `POST` request to `/users` with a JSONned object with properties for a new user, it will write to the JSON file with that particular user added--even giving it a unique `id` value for us!

While you'll be back to having to configure your own back end in Term 2, the key thing for this project is that `json-server` is going to take care of the JSON retrieval and editing for us; all we have to do is fashion our request properly and `.send` it.


### Setup And Basic Workflow

1. Install `json-server` globally so that you can access it anywhere. Run `npm install -g json-server` in your repo's backend folder.
* On the front end, you have an `index.html` file which exists solely to load `main.js` and any other files you decide to create and let them console.log to the browser. Open this file in a browser using Command-O. Do *not* run it as a live-server, as you can easily make too many POST requests that grow the data dramatically, due to the file being reloaded every time you make a change.
* You're going to **reload** the page any time you want to see some the console.logs from your requests.
* Make a function that will (once we finish it) make a GET request to get all users.
* Once you've finished it, call it in `main.js` so that it happens when you reload your `index.html`.
* Once that works, comment out the CALL to your function so that it doesn't interfere with any others.
* Repeat steps 4-6 for each route from earlier.


### Portrait Of An XHR

1. Instantiate a `new XMLHttpRequest`.
2. Set up an event listener on your `xhr` for a `loadend` event. You'll be passed some JSON in the callback if your request goes through!
3. Run an `xhr.open()` with two parameters: the request (`GET` or `POST` or whatever you want) and the URL (if you're running the server on the same machine, this will be the `localhost` link from `json-server`).
4. Extra step if you're making a request OTHER than a `GET` request: `xhr.setRequestHeader` with the parameters `'Content-Type'` and `'application/json'`. This tells your `xhr` that you want JSON, not XML.
5. Run an `xhr.send()`, passing in a JSONified object if the request needs any additional info (like the object you want posted).
6. Check your `console` for results from your callback, and check the terminal running `json-server` to see what's happening on the server.


### Guidelines

* You do NOT need any real front end to this. I recommend defining functions called `getUser` and `postUser` and such that merely console log the results, then calling only one of them at a time (commenting any others out if need be), reloading the page, and checking the console and the `db.json` file to see what happens.
* You should be able to get every single one of the "routes" you used before to be _actual_ routes. Delete, get, put, and post to your heart's content.
* Do your research, but here are a couple real sticklers:
  * Many requests don't need this, but _some_ need you to explicitly say that you're expecting JSON. Check out `xhr.setRequestHeader`, and make sure you're calling it _between_ `xhr.open` and `xhr.send`.
  * `xhr.send` can accept a parameter that's the data you want to send. You can put it in JSON format if you stringify an object first. Or you can use a param string, but that's not very JavaScript-y.
